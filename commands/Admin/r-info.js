const Discord = require('discord.js');

module.exports = {
     name: "role-info",
     category: "Admin",
     aliases: ["r-i"],
     usage: "[r-i or role-info]",
     description: "role-info",
     cooldown: 5,
     run: async (client, message, args) =>  {

          const role = message.mentions.roles.first()
          if(!role) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`Mention A Role`))

          var embed = new Discord.MessageEmbed()
     .setThumbnail(message.author.avatarURL())
     .setTimestamp()
     .setTitle(`${role.name} Info`)
     .setColor("RANDOM")
     .setFooter(message.guild.name ,message.guild.iconURL())
     .addField('Server Name : ',message.guild.name,true)
     .addField('Role Name : ',role.name,true)
     .addField('Role Id : ',role.id,true)
     .addField('Role Created At : ',role.createdAt,true)
     .addField('Role Members : ',role.members.array().length,true)
     .addField('Role Color : ',role.hexColor,true)
message.channel.send(embed)
     }
}