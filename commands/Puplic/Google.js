const Discord = require('discord.js')

module.exports = {
     name:"Google",
     category: "Public",
     aliases: ["بحث","قوقل"],
     usage: "[قوقل or Google or بحث]",
     description: "To Search in Google ",
     cooldown: 5,

     run: async (client, message, args) => {
          const google = message.content.split(' ').slice(1).join()
     if(!google) return message.channel.send(`**What do you want me to search**`)
          message.channel.send(new Discord.MessageEmbed()
     .setDescription(` > **i found this on [Google](https://www.google.com/search?q=${google})**`))
     }
}