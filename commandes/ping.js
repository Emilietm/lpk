const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
    name: "ping",
    description: "test command",

     execute(message) {

    
      const ping = new Discord.MessageEmbed()
      .setColor('#ff1100')
      .setDescription('Pong 🏓 ')
    
       
      message.channel.send(ping)
    }
}