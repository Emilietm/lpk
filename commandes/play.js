const { getVideoID } = require('ytdl-core');
const Discord = require('discord.js')
module.exports = {
  name: 'play',
  description: 'Play requested sound.',
  async execute(message, args) {
    if (!message.guild) return;

    if (message.member.voice.channel) {
      const ytdl = require('ytdl-core');
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play(ytdl(args[0]), {
        volume: 0.5,
      });
      var user;
      user = message.mentions.users.first();
      user = message.author;
      dispatcher.on('start', () => {
        message.client.user.setActivity('YouTube', { type: 'LISTENING' })
        const embed = new Discord.MessageEmbed()
        .setColor('#980f2')
        .setThumbnail('https://cdn.discordapp.com/avatars/759181973234778164/f1190e72c70c4778f151d3f120dcfe4c.webp?size=2048')
        .setTitle("Playing The Song")
        .addField("Made by","[Emilie](https://twitter.com/EmilieZataro)")
        .setFooter(`${message.author.tag}`)
        message.channel.send(embed)
      })

      dispatcher.on('error', () => {
        message.reply("Je n'ai pas réussi à lire cette vidéo !");
        dispatcher.destroy();
        message.member.voice.channel.leave();
      })

      dispatcher.on('finish', () => {
        dispatcher.destroy();
        message.member.voice.channel.leave();
        const embed2 = new Discord.MessageEmbed()
        .setDescription('```The Song Is FINISH```')
        message.channel.send(embed2)
      })
    } 
    else {
      message.reply('You need to join a voice channel first!');
    }  
 
  }
};