const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
     name: "time",
     category: "Public",
     aliases: ["توقيت"],
     usage: "[hiden or اخفاء]",
     description: "hiding the chat from the members",
     cooldown: 1,

    run: async (client, message, args) => {

          let time = args[0]
          if(!time) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("How M / H will you set u'r alarm clock"))
          if(ms(time) > ms("1d")) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("u can't set u'r alarm bigger than 1 day"))

          let reason = args.slice(1).join('')
          if(!reason) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`Please give some reason`))

          const embed = new Discord.MessageEmbed()
          .setAuthor(`${message.author.tag} Alarm Clock`, message.author.displayAvatarURL())
          .setColor("RANDOM")
          .setDescription(`Time : \`\`\` - ${time}\`\`\`\nReason : \`\`\` - ${reason}\`\`\``)
          .setTimestamp()
          message.channel.send(embed)

          setTimeout(() => {
               const embed = new Discord.MessageEmbed()
               .setAuthor(`${message.author.tag} u'r Alarm Clock Has Been Ended`, message.author.displayAvatarURL())
               .setColor("RANDOM")
               .setDescription(`Time : \`\`\` - ${time}\`\`\`\nReason : \`\`\` - ${reason}\`\`\`\nAlarm Seted in Server : \`\`\` - ${message.guild.name}\`\`\``)
               .setTimestamp()
               message.author.send(embed)
          }, ms(time))
     }
}