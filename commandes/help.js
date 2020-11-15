const Discord = require('discord.js')

module.exports = {
    name: "help",
    aliases: ['help', 'aide'],
    execute(message, args, client) {
        const Embed = new Discord.MessageEmbed()
        .setTitle("**__Commandes d'aide__**")
        .setColor("#343ba1")
        .setDescription("  ")
        .setThumbnail(message.guild.iconURL())
        .addFields([
            {
                name: "__**+help**__",
                value: "affiche ceci",
                inline: true
            },
            {
                name: "__**+hmodération**__",
                value: "affiche les commandes de modération.",
                
            },
            {
                name: "__**+hserver**__",
                value: "affiche les commandes globale du bot."

            }
        ])
        message.channel.send(Embed)
    }

}