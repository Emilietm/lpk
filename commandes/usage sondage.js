const Discord = require('discord.js')

module.exports = {
    name: 'usondage',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor("#f`3224")
        .setTitle("Usage de la commande Sondage")
        .setDescription("La commande sondage dispose de 10 réactions au maximum. Lorsque que vous taperez la commande merci de preciser le nombre de reactions puis d'inserer votre message, exemple +sondage 4 Je suis un sondage, cela affichera en dessous du message, 4 réactions( 1, 2, 3, 4, comme emojis")
        .addField("Usage", "`+sondage <nombre jusqu'à 10> <votre texte>`")
    
        message.channel.send(embed)
    }
}