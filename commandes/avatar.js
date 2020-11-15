const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    execute(message, args) {
            var user;
            user = message.mentions.users.first(); //mentioned user, if any
            if (!user) { //if no one is mentioned
            if (!args[0]) { //if the command is only "!avatar". I.e. no one is mentioned and no id is specified
            user = message.author;
            getuseravatar(user);
            } else { //if a user id IS specified (need developer mode on on discord to get it)
            var id = args[0]
            client.fetchUser(id).then(user => {
            getuseravatar(user) //get avatar of the user, whose id is specified
            
            }).catch(error => console.log(error))
            
            }
            
            } else { //if someone IS mentioned
            getuseravatar(user);
            }
            function getuseravatar(user) {
            var embed = new Discord.MessageEmbed()
            .setColor('#f98520') //can specifiy color of embed here
            .setTitle(`Voici l'avatar de ${user.username}`)
            .setImage(user.displayAvatarURL({size: 4096, dynamic: true}))
            .setFooter(`Avatar de ${user.username} | ${user.id}`)
            .setURL(user.displayAvatarURL())
            message.channel.send(embed)
            }
        }
    
}