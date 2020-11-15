const Discord = require('discord.js');
const { Message, Channel} = require("discord.js");
module.exports = {
    name: "statut",
    permission: "MANAGE_MESSAGE",
    async execute(message, args) {
        message.delete();
        let status = args[0];
        let customStatus = args[1];
        let content = args.slice(2).join(" ");
        if(message.member.hasPermission("MANAGE_MESSAGE")) {
            if(status !== "online" && "status" !== "idle" && status !== "dnd" && status !== "offline") {
                message.channel.send("Veuillez indiquer comme premier argument soit online(en ligne) soit idle(AFK) soit dnd(ne pas déranger) soit offline(hors ligne)")
            }
            else if(customStatus !== "PLAYING" && customStatus !== "STREAMING" &&  customStatus !== "LISTENING" && customStatus !== "WATCHING" && customStatus !== "CUSTOM_STATUS" ) {
                message.channel.send("Veuillez indique comme 2e Argument soit STREAMING soit LISTENING soit WATCHING soit CUSTOM_STATUS")
            }
            else {
                message.client.user.setPresence({
                    status: status,
                    activity: {
                        name: content,
                        type: customStatus
                    }
                })
            }

        }
        else {
            message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !")
        }
    }
};
