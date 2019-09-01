const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()

client.on('ready', () => {
   client.user.setPresence({
        game: {
            name: config.status,
            type: "STREAMING"
        }
   })
});

client.login(config.token);
