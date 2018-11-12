const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const path = require('path');
const TOKEN = ""; // ;)

bot.registry
    .registerDefaultTypes()
    .registerGroups([
        ['simple', 'Simple and generic commands'],
        ['games', 'Game Related commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

bot.login(TOKEN);

bot.on('ready', () =>{
    console.log('Logged in!');
    bot.user.setActivity('with your feelings');
})

bot.on('message', (message) =>{
    if (message.content.toLowerCase() === "hi"){
        message.channel.send(`What's good ma boy`);
    }
})
