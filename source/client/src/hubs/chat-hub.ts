import {HubConnectionBuilder, LogLevel} from '@aspnet/signalr';

export default {
    install(Vue) {
        const chatHub = new Vue();
        Vue.prototype.$chatHub = chatHub;

        let connection = null;
        let startedPromise = null;
        let manuallyClosed = false;

        Vue.prototype.startSignalR = () => {
            connection = new HubConnectionBuilder()
                .withUrl(`${Vue.prototype.$http.defaults.baseURL}/chat`)
                .configureLogging(LogLevel.Debug)
                .build();

            connection.on('messageReceived', (username, text) => {
                const when = new Date();
                chatHub.$emit('message-received', {username, text, when});
            });

            function start() {
                startedPromise = connection.start()
                    .catch((err: any) => {
                        // tslint:disable-next-line:no-console
                        console.error('Failed to connect with chat hub', err);
                        return new Promise((resolve, reject) =>
                            setTimeout(() => start().then(resolve).catch(reject), 5000));
                    });
                return startedPromise;
            }
            connection.onclose(() => {
                if (!manuallyClosed) { start(); }
            });

            manuallyClosed = false;
            start();
        };

        Vue.prototype.stopSignalR = () => {
            if (!startedPromise) { return; }

            manuallyClosed = true;
            return startedPromise
                .then(() => connection.stop())
                .then(() => { startedPromise = null; });
        };

        chatHub.sendMessage = (user, message) => {
            if (!startedPromise) { return; }

            return startedPromise
                .then(() => connection.send('SendMessage', user, message))
                // tslint:disable-next-line:no-console
                .catch(console.error);
        };
    },
};
