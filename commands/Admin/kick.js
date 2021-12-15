const Discord = require('discord.js');

module.exports = {
     name: "kick",
     category: "Admin",
     aliases: ["كيك ","طرد"],
     usage: "<prefix>kick",
     description: "",
     cooldown: 5,
    run: async (client, message, args) => {
          if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription("You don't have permissions \`\`\`KICK_MEMBERS\`\`\`"))
          if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`I don't have permissions \`\`\`KICK_MEMBERS\`\`\``))

          let member = message.mentions.members.first() ||
          message.guild.members.cache.get(args[1]) ||
          message.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));

          if(!member) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`> Please Mention user or Type the user ID/Username`))

          if (member.id === message.author.id)return message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`You can't kick yourself`))

          if (member.id === message.guild.me.id)return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`You can't kick me dumbass`))

          if(!member.kickable) return message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`The member role is higher than me`));

          await member.kick()
          message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`This <@${member.user.id}> has been kick from server 
          \`By : <@${message.author.id}>\``))
     }
}

