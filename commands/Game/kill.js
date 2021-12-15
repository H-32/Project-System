const Discord = require('discord.js');

module.exports = {
     name:"kill",
     category: "Game",
     aliases: ["قتل","اقتل"],
     cooldown: 1,

     run: async (client, message, args) =>  {
          if (message.author.bot) return;
               const mention = message.mentions.users.first()
                    if(!mention) return message.channel.send(new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`Please specify a user to kill him`))
                    const { img } = require('./img/kill.json')
                    message.channel.send(new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setImage(`${img}`)
                    .setTitle(`I Kill Him ${mention.username}`))
     }
}