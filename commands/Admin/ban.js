const Discord = require("discord.js");

module.exports = {
     name: "ban",
     aliases: ["باند"],
     description: "ban command",
     cooldown: 5,
     
    run: async (client, message, args) => {

    const channellog = message.guild.channels.cache.find(ch => ch.name === "log");
    
    const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`You don't have enough powers to ban someone`))
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`I don't have powers to ban someone`))
    
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Please mention someone to ban`))
    
    if(!target) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`I can't find that member`))
    
    if(target.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.channel.send(new Discord.MessageEmbed()
      .setDescription(`They have more power than you`))
    }
    
    if(target.id === message.author.id) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`I can't ban you as you are the Boss`))
    
    channellog.send(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Banned : ${target}nFor :${reason || "No Reason Provided"} ID Target : ${target.id}Banned By : ${message.author.username}`))

    if(target.bannable) {
      let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Banned : ${target} for ${reason || "No Reason Provided"}`)
      
      message.channel.send(embed)
      
      target.ban()
      
      message.delete()
      
    } else {
      return message.channel.send(new Discord.MessageEmbed()
      .setDescription(`I can't ban them, make sure that my role is above of theirs`))
    }
    return undefined
  }
};