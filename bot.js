const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTcyODAxNzY4NDA1MzM2MDk2.XMoj_g.9GQeZ6c4SMVulG9cVmxlQv5yRKk);//BOT_TOKEN is the Client Secret
