using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace QuakR.Server.Hubs
{
    public interface IChatHub
    {
        Task MessageReceived(long username, string message);
    }
    public class ChatHub : Hub<IChatHub>
    {
        public async Task SendMessage(long username, string message)
        {
            await Clients.All.MessageReceived(username, message);
        }
    }
}