const Discord = require('discord.js')

module.exports = {
    name: 'ustatut',
    execute(message, args) {
        const use = new Discord.MessageEmbed()
        .setTitle('Usage Du Satut.')
        .setColor('#562300')
        .setDescription("Pour utiliser le statut, il y a differentes manières, la commande doit être effectuée comme ceci : `+statut <en ligne> <JOUE> <statut>` , cela doit être fait en anglais, il y a **dnd** pour do not distribue(ne pas deranger), online pour en ligne et voilà, ensuite il y a PLAYING, WATCHING, LISTENING, STREAMING, il y a ensuite votre description donc exemple : `+statut dnd PLAYING MON BOT`")
        .addField("Usage", "`+statut <statut en ligne> <action, ex: LESTENING> <votre texte> `")
        message.channel.send(use)
    }
}