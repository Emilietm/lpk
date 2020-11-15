const Discord = require('discord.js')

module.exports = {
    name: 'embed',
    execute(message, args) {
        message.delete().catch()
        const embed = new Discord.MessageEmbed()
        .setColor('#fcf404')
        .setTitle("")
        .setDescription(args.join(" "));
        message.channel.send(embed)
    }
}