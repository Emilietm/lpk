const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    name: 'serverinfo',
    description: 'affiche les infomations du serveur',
    execute(message) {
            const embed = new Discord.MessageEmbed()
            .setColor('#fcf404')
            .setThumbnail(message.guild.iconURL())
            .setTitle(`${message.guild}`)       
            .addFields([
                {
                    name: 'Propriétaire du serveur',
                    value: `${message.guild.owner}(${message.guild.owner.id})`,
                    inline: true
                },
                {
                    name: "Identifiant",
                    value: `${message.guild.id}`,
                    inline: true
                }
            ])
            .addField("Membres", `${message.guild.memberCount} membres`)
            .addField('Membres en ligne', `${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} membres en ligne !`)
            .addFields([
                {
                   name: "Emojis",
                   value: `${message.guild.emojis.cache.size} emojis`,
                   inline: true
             },
             {
                 name: "Region",
                 value: `${message.guild.region}`, 
                 inline: true
             },
             {
                 name: "Channels",
                 value: `${message.guild.channels.cache.size} channels`,
                 inline: true
             },
             {
                 name: "Bots",
                 value: `${message.guild.members.cache.filter(m => m.user.bot).size} bots`
             },
            ])

            .addField('Création du serveur :', `${message.guild.createdAt.toLocaleDateString("en-fr")}`)
            .addField("Tu as rejoins le", message.member.joinedAt)
            .addField("Temps d'AFK" , `${message.guild.afkTimeout / 60} minutes`, true)
            .addField("Boosts", `Il y a ${message.guild.premiumSubscriptionCount} Boosters`)
            .setFooter("Made by Emilie");
           
           
            message.channel.send(embed)
    }
};