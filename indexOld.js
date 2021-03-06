const Discord = require('discord.js')

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
 console.log('!Ready');
});

client.on('message', (message) => {

     if (!message.content.startsWith(prefix) || message.author.bot) return;

     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();

     if (command === `activity`) {
     message.channel.send('Le bot est actuellement opérationnel.');
     }
        else if (command === `serverinfo`) {
         message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre de Membres : ${message.guild.memberCount}`); 
     }
     else if (command === `avatar`) {
         if(!message.mentions.users.size) {
             return message.channel.send(`Votre avatar est : ${message.author.displayAvatarURL({ format : 'png'})}`);
           }
         

          const avatarList = message.mentions.users.map(user => {
          return `L'avatar de ${user.username} est : ${user.displayAvatarURL({ format : 'png'})}`;
         });

         message.channel.send(avatarList); 
        }
});

client.login(token);