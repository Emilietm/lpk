const Discord = require('discord.js')

module.exports = {
    name: 'unmute',
    permissions: 'MANAGE_ROLES',
    execute(message, args) {
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.reply('Please Provide a Member to TempMute.')

        let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
        let role = message.guild.roles.cache.find(role => role.name === "Muted");

        member.roles.add(mainrole)
                member.roles.remove(role);
                const embed2 = new Discord.MessageEmbed()
            .setColor('#4cb636')
            .setTitle(`[UNMUTE] | ${member.user.tag} has been unmuted`)
            message.channel.send(embed2)  
    }
}