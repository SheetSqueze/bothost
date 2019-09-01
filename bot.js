const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

client.on('ready', () => {
   client.user.setPresence({
        game: {
            name: "cheap origin with games accounts",
            type: "STREAMING"
        }
   })
});

client.login(process.env.BOT_TOKEN);
