const Discord = require('discord.js');

module.exports = {
     name:"rps",
     category: "Game",
     aliases: [""],
     cooldown: 1,

     run: async (client, message, args) =>  {
          let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("RPS | Game")
          .setDescription('React to play')
          .setTimestamp()
          let msg = await message.channel.send(embed)
          await msg.react("🥌")
          await msg.react("✂")
          await msg.react("📄")

          const filter = (reaction, user) => {
               return ['🥌','✂','📄'].includes(reaction.emoji.name) && user.id === message.author.id;
          }

          const choices = ['🥌','✂','📄']
          const me = choices[Math.floor(Math.random() * choices.length)]
          msg.awaitReactions(filter, {max: 1, time: 60000, error: ["time"]}).then(
               async(collected) => {
                    const reaction = collected.first()
                    let profe = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("Result | Game")
                    .addField("You'r Choice :", `${reaction.emoji.name}`)
                    .addField("Bot's Choice :", `${me}`)
                    .setTimestamp()
                    await msg.edit(profe)

                    if((me === "🥌" && reaction.emoji.name === "✂") || 
                    (me === "✂" && reaction.emoji.name === "📄") || 
                    (me === "📄" && reaction.emoji.name === "🥌")){
                         message.reply("You Lost");
                    } else if(me === reaction.emoji.name) {
                         return message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
                         .setDescription("Its a tie!"));
                    } else {
                         return message.message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
                         .setDescription("You Won!"));
                    }
               })
               .catch(collected => {
                    message.channel.send(`<@${message.author.id}>`,new Discord.MessageEmbed()
                    .setDescription(`Process Has Been Cancled , you failed to respond in time !`))
               })
               
     }
}