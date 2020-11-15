module.exports = {
    name: 'say',
    execute(message) {
        message.delete().catch();
            message.channel.send(message.content.substr(4));
       }
    }
