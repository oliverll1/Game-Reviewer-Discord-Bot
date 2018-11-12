const fetch = require('node-fetch');
const commando = require('discord.js-commando');
const GAMESPOTKEY = "94afbb2fb7689de96ed34a9bead33701b7cffb32";

class GameReviewCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'review',
            group: 'games',
            memberName: 'review',
            description: 'shows the review of a game'

        })
    }

    async run(message, args) {
        console.log(args);
        fetch(`http://www.gamespot.com/api/reviews/?api_key=${GAMESPOTKEY}&format=json&filter=title:${args}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json);
                if(json.number_of_total_results <= 0){
                    message.reply("Sorry i don't know the game " + args);
                }
                else{
                    message.reply(json.results[0].title + "\n" + json.results[0].deck + "\n\n" + 
                    json.results[0].score + "\n" + "Read the full article on: " + json.results[0].site_detail_url);
                }
                
            })
            .catch(function(reason){
                console.log(reason);
            });

    }
}

module.exports = GameReviewCommand;