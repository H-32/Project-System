const Discord = require('discord.js');
module.exports = {
    name: "ping",
    category: "Public",
    aliases: ["بنق"],
    usage: "[ping or بنق]",
    description: "ping command",
    cooldown: 5,
    run: async (client, message, args) => {
        var ping = `${Date.now() - message.createdTimestamp}`
        var api = `${Math.round(client.ws.ping)}`
     message.channel.send('Pong ..!').then(m => {
        m.edit(new Discord.MessageEmbed()
        .setDescription(`
        Time taken : \`\`\`-> ${ping}\`\`\`
        Discord API : \`\`\`-> ${api}\`\`\``))})
    }
}