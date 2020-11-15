const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
  name: 'tempmute',
  Permissions: 'MANAGE_ROLES',
  execute(message, args) {
    let msg = message.content.split(" ");
    let cmd = msg[0];

     if(cmd === '+tempmute'){
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.reply('Please Provide a Member to TempMute.')

            let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
            let role = message.guild.roles.cache.find(role => role.name === "「🎙」Muted");

            if (!role) return message.reply("Couldn't find the 'muted' role. please give name 'Muted' and not 'muted'")

            let time = args[1];
            if (!time) {
                return message.reply("You didnt specify a time!");
            }

            member.roles.remove(mainrole)
            member.roles.add(role);

            const embed = new Discord.MessageEmbed()
            .setColor('#f11100')
            .setTitle(`[MUTE] | ${member.user.uername} has been muted`)
            message.channel.send(embed)
            setTimeout( function () {
                member.roles.add(mainrole)
                member.roles.remove(role);
                const embed2 = new Discord.MessageEmbed()
            .setColor('#11100')
            .setTitle(`[UNMUTE] | ${member.user.uername} has been unmuted`)
            message.channel.send(embed2)           
           }, ms(time));

        } else {
            return message.channel.send('You dont have perms.')
        }
    }
  }
}