const axios = require('axios');
const Discord = require('discord.js')

module.exports = {
    name: "meme",
    category: "extra",
   async execute( message ) {
        const url = 'https://some-random-api.ml/meme';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.reply(`An error has occured, try again!`)
        }

        const embed = new Discord.MessageEmbed()
        .setColor('#7289da')
        .setTitle("Random Meme :")
        .setURL('https://some-random-api.ml/meme')
        .setDescription(data.caption)
        .setImage(data.image)
       
        message.channel.send(embed)
    }
}