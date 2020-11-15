module.exports = {
    name: 'kick',
    permissions: 'KICK_MEMBERS',
    execute(message) {
        if (!message.guild) return;

        const user = message.mentions.users.first(); // This says if you mention this user, it is talking about that user
   
        if (user) {
       
          const member = message.guild.member(user);
        
          if (member) {
         
            member.kick('Optional reason that will display in the audit logs').then(() => {
           
              message.reply(`Successfully kicked ${user.tag}, you should feel bad! They will never be able to rejoin until they click join again!`);
            }).catch(err => {
             
              message.reply('I was unable to kick the member. Check if their roles are higher then mine or if they have administrative permissions!');
              
              console.error(err);
            });
          } else {
           
            message.reply('That user isn\'t in this guild!');
          }
     
        } else {
          message.reply('You didn\'t mention the user to kick!'); // Thus is creating a message so that you know 
    }
    message.reply(`${user.tag} has been kicked`)
}
}