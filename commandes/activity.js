module.exports = {
    name: 'activity',
    description: 'permet de savoir si le bot est operationnel',
     execute(message) {
        message.channel.send('Le bot est actuellement opérationnel.');
    }
    
    
};