const Discord = require("discord.js")
const ms = require('ms')
module.exports = {
    name: 'invite',
    description: "create a invite link for how many people you want from 1 to 10 for 1 hour",
    aliases: ['inv','رابط'],
 

    run: async (client, message, args) => {
        let maxusers = args.slice(0).join(" ")
        if(!maxusers){
          return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`How many people do you want to invite?`)).then(m => {
            m.react('❔')
          })
        }
        if(parseInt(args[0]) > 10) return message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`You cannot invite more than 10 people in the link`));
        if(args[0] != Math.floor(args[0])) return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Please select the correct number of invitees`))
        
         message.channel.createInvite({
           thing: true,
           maxUses: maxusers,
           maxAge: 3600,
         })
         .then(invite => message.author.send(invite.url));
         message.channel.send(new Discord.MessageEmbed()
         .setDescription(`\`\`\`- I sent you the link in your dm \`\`\``))
         message.author.send(`An invitation link was made to people \`${maxusers}\`for an hour`)
    }
}