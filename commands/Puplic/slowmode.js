const Discord = require('discord.js');

module.exports = {
    name: "slowmode",
    category: "Admin",
    aliases: ["بطيء"],
    usage: "[<prefix>slowmode Type number]",
    description: "slowmode chat command",
    cooldown: 5,
    run: async (client, message, args) => {

     message.channel.setRateLimitPerUser(args[0])
     message.channel.send(new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`Slowmode is now : ${args[0]}`))
    }
}