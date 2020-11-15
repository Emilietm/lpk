const { Channel, MessageEmbed } = require("discord.js");

const Discord = require('discord.js');
module.exports = {
    name: "sondage",
    async execute(message, args) {
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
            message.delete()
            const titre = ":bar_chart: Sondage";
            const amount = parseInt(args[0]);
            if (isNaN(amount)) {
                return message.reply("Veuillez écrire un nombre comme 1er arguments !");
            }
            else if (amount < 1 || amount > 10) {
               return message.reply("Le 1er arguments doit être compris entre 1 et 10 !");
            }
            const description = args.slice(1).join(" ")
            const pollEmbed = new Discord.MessageEmbed()
              .setTitle(titre)
              .setDescription(description)
             .setColor("#fff622")
             .setFooter(`Sondage ${message.author.tag}`)
            var msg = await message.channel.send(pollEmbed)

            const reactions = [
                "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟"
            ];
            if (amount === 2) {
               msg.react("1️⃣")
               msg.react("2️⃣")
            }
            if (amount === 1) {
                msg.react("✅")
                msg.react("❌")
            }
            else {
                for (var i = 0; i < amount; i++) {
                 await msg.react(reactions[i])
                 }
            }
            }
        else {
            message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !")
        }
    }
};