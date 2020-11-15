const fs = require('fs');
const Discord = require('discord.js')
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./commandes').filter(file => file.endsWith('.js'));

for(const file of commandfiles) {
    const command = require(`./commandes/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
 console.log('!Ready');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();

     if(!client.commands.has(command)) return;

     try {
         client.commands.get(command).execute(message, args)
     } catch(error) {
     console.error(error);
     message.reply(`Une erreur est survenue`);
     }
     
     if (message.content.indexOf(prefix) !== 0) return;
    })



client.login(token);