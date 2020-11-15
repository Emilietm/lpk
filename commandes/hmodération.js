const Discord = require('discord.js')

module.exports = {
    name: "hmodération",
    permissions: "MANAGE_ROLES",
    execute(message) {
       const Embed = new Discord.MessageEmbed()
        .setTitle("Commandes de __Modération__.")
        .setColor("#f4651")
        .setDescription("voici les commandes qui nécessite une permission quelconque.")
        .addFields([
            {
                name: "__CLEAR__",
                value: "Supprime un nombre de message compris entre 1 et 99."
            },
            {
                name: "__MUTE__",
                value: " rend muet la personne mentionnée."
            },
            {
                name: "__UNMUTE__",
                value: "Autorise la personne mentionnée à parler."
            },
            {
                name: "__TEMPMUTE__",
                value: "rend muet la personne mentionnée pendant un temps defini."
            },
            {
                name: "__STATUT__",
                value: " change le statut du bot, pour plus d'informations merci d'utiliser la commande `+ustatut`"
            },
            {
                name: "__SONDAGE__",
                value: "Créer un sondage, pour plus d'informations merci d'utiliser la commande `+usondage`"
            }
        ])
        message.channel.send(Embed)
    }
}