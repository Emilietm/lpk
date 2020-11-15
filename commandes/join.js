module.exports = {
     name: 'join',
     description: 'rejoint un vocal pour ensuite diffuser une musique',
     async execute(message, args) {
        if (!message.guild) return;
   
        if (message.member.voice.channel) {
            const ytdl = require('ytdl-core');
            const connection = await message.member.voice.channel.join();
          

           }
           message.react('✅')
       }
    }

