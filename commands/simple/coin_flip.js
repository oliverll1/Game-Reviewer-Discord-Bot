const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'flips a coin to land either face or emblem'
        })
    }

    run(message, args){
        let chance = Math.floor(Math.random() *2 );

        if(chance === 0){
            message.reply("Your coin landed on Face");
        }
        else if(chance === 1){
            message.reply("Your coin landed on Emblem");
        }
    }
}

module.exports = CoinFlipCommand;