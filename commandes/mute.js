const Discord = require('discord.js')

module.exports = {
    name: 'mute',
    permissions: 'MANAGE_ROLES',
    execute(message, args) {
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.reply('Please Provide a Member to TempMute.')

            let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
            let role = message.guild.roles.cache.find(role => role.name === "「🎙」Muted");

            if (!role) return message.reply("Couldn't find the 'muted' role. please give name 'Muted' and not 'muted'")
           
            member.roles.remove(mainrole)
            member.roles.add(role);

            const embed = new Discord.MessageEmbed()
            .setColor('f11100')
            .setTitle(`[MUTE] | ${member.user.tag} has been muted
            Reason: ${args.join(" ")}`)
            
            message.channel.send(embed)
    }
}