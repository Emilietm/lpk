const Discord = require('discord.js')

module.exports = {
    name: 'userinfo',
    aliases: ['userinfo', 'ui', 'user-info'],
    execute(message, client, args) { 
        const user = message.mentions.users.first();
        const embed = new Discord.MessageEmbed()
        .setTitle(`Userinfo de ${message.guild.member.mentions}`)
        .setThumbnail(message.guild.displayAvatarURL({dynamic: true}))
        .addField("Nom D'utilisateur", `${message.guild.member.username}`)
        .addField("Identifiant", `${message.guild.member.id}`)
        .addField('Création du serveur :', `${message.guild.createdAt.toLocaleDateString("fr")}`)
        .addField("Tu as rejoins le", `${user.joinedAt}`)
        .addField("Temps d'AFK" , `${message.guild.afkTimeout / 60} minutes`, true)
        .addField("Boosts", `Il y a ${message.guild.premiumSubscriptionCount} Boosters`)
        .setFooter("Made by Emilie");
        message.channel.send(embed)
    }
}