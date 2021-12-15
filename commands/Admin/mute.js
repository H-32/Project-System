const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'mute',
    category: "Admin",
    aliases: ["اسكت","اسكات"],
    description: "This mutes a member",
    run: async (client, message, args) => {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("You don't have permissions")
       var member = message.mentions.members.first()||message.guild.members.cache.get(args[1])||message.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
               if(!member) return message.channel.send(`**Please Mention user or Type the user Username ${args.slice(1).join(' ')} **`)
               if (member.id === message.author.id)return message.reply(`**You can't mute yourself**`)
     if (member.id === message.guild.me.id)return message.reply(`**You can't mute me dumbass**`)
       let mutedrole = message.guild.roles.cache.find(ro => ro.name === 'Muted')
       if(!mutedrole) {
       try {
       var createdrole = await message.guild.roles.create({
                     data : {
                       name : 'Muted',
                       permissions: [],
                   }});
                       message.guild.channels.cache.forEach(async (channel, id) => {
                           await channel.createOverwrite(createdrole, {
                               SEND_MESSAGES: false,
                               ADD_REACTIONS : false
                           })
                       })
               } catch (err) {
               console.log(err)
           }};
let muterole = message.guild.roles.cache.find(r => r.name === 'Muted')
        member.roles.add(muterole)
       message.channel.send(new Discord.MessageEmbed()
       .setColor("RANDOM")
       .setDescription(`${member.user.username} Has been muted`))
 }
}