<template>
    <div>
        <sui-feed class="messages">
            <sui-feed-event v-for="(message, index) in messages" :key="index">
                <sui-feed-label image="https://robohash.org/${message.username}.png"></sui-feed-label>
                <sui-feed-content>
                    <sui-feed-summary>
                        <sui-feed-user>{{message.username}}</sui-feed-user>
                        <sui-feed-date>{{message.when | duration('humanize', true) }}</sui-feed-date>
                    </sui-feed-summary>
                    <sui-feed-extra text>
                        {{message.text}}
                    </sui-feed-extra>
                    <sui-feed-meta>
                    </sui-feed-meta>
                </sui-feed-content>
            </sui-feed-event>
        </sui-feed>
        <div class="input-zone">
            <sui-form>
                <sui-form-fields inline>
                    <input v-model="form.message" placeholder="Message" />
                    <sui-button primary attached="right" type="submit" v-on:click.stop.prevent="sendMessage">Send</sui-button>
                </sui-form-fields>
            </sui-form>
        </div>
    </div>
</template>

<script lang="ts" src="./Chat.ts"></script>
<style lang="scss" scoped src="./styles.scss"></style>

