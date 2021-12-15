const Discord = require('discord.js')
const client = new Discord.Client({
	autoReconnect: true,
	partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "MESSAGE", "USER"],
  disableEveryone: true
});
//////جميع الحقوق تابعه الئ Professor
const fs = require('fs');
const { token, prefix, id} = require("./bot.json");

client.on('ready', () => {
     client.user.setActivity("", {type:"COMPETING"});
     console.log(`${client.user.username} is Online !
     __________________________________________________
     Server => ${client.guilds.cache.size}`);
})

client.login(token)
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map();

["command"].forEach(handler => {
     require(`./handlers/${handler}`)(client);
});

client.interaction = {}; 
const DiscordButtons = require('discord-buttons'); 
const ButtonPages = require('discord-button-pages');
DiscordButtons(client);
//// command.run
var _0x9098=["\x6D\x65\x73\x73\x61\x67\x65","\x62\x6F\x74","\x61\x75\x74\x68\x6F\x72","\x67\x75\x69\x6C\x64","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x6D\x65\x6D\x62\x65\x72","\x66\x65\x74\x63\x68\x4D\x65\x6D\x62\x65\x72","\x73\x70\x6C\x69\x74","\x74\x72\x69\x6D","\x6C\x65\x6E\x67\x74\x68","\x73\x6C\x69\x63\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x73\x68\x69\x66\x74","\x67\x65\x74","\x63\x6F\x6D\x6D\x61\x6E\x64\x73","\x61\x6C\x69\x61\x73\x65\x73","\x72\x75\x6E","\x6F\x6E"];client[_0x9098[18]](_0x9098[0],async (_0x9d46x1)=>{if(_0x9d46x1[_0x9098[2]][_0x9098[1]]){return};if(!_0x9d46x1[_0x9098[3]]){return};if(!_0x9d46x1[_0x9098[5]][_0x9098[4]](prefix)){return};if(!_0x9d46x1[_0x9098[6]]){_0x9d46x1[_0x9098[6]]=  await _0x9d46x1[_0x9098[3]][_0x9098[7]](_0x9d46x1)};const _0x9d46x2=_0x9d46x1[_0x9098[5]][_0x9098[11]](prefix[_0x9098[10]])[_0x9098[9]]()[_0x9098[8]](/ +/g);const _0x9d46x3=_0x9d46x2[_0x9098[13]]()[_0x9098[12]]();if(_0x9d46x3[_0x9098[10]]=== 0){return};let _0x9d46x4=client[_0x9098[15]][_0x9098[14]](_0x9d46x3);if(!_0x9d46x4){_0x9d46x4= client[_0x9098[15]][_0x9098[14]](client[_0x9098[16]][_0x9098[14]](_0x9d46x3))};if(_0x9d46x4){_0x9d46x4[_0x9098[17]](client,_0x9d46x1,_0x9d46x2)}})
///Help
client.on('clickButton', (button) => {
     ButtonPages.buttonInteractions(button, client.interaction);
});
   
   client.on('message', msg => {
     if (msg.content.startsWith(`${prefix}help`)) {
         const embed1 = new Discord.MessageEmbed()
         .setAuthor(msg.author.username, msg.author.avatarURL())
         .setThumbnail(msg.author.avatarURL())
         .setTitle("Puplic Commands")
         .setColor("RED")
         .setDescription(`
         <${prefix}> invite | \`To make invite server link\`
         <${prefix}> G-password or pa | \`To make a password\`
         <${prefix}> Google or بحث | \`To search in the Google\`
         <${prefix}> ping | \`To see the connection speed\`
         <${prefix}> server | \`to see informations server\`
         <${prefix}> avatar | \`To see profile picture\`
         <${prefix}> server-a | \`To see server picture\`
         <${prefix}> tag | \`Use it to find out\`
         <${prefix}> timer | \`Timer reminding things you need\`
         <${prefix}> translate | \`To translate words in all languages ​​of the world\`
         <${prefix}> user | \`Show member information\`
         <${prefix}> slowmode | \`Temporary work in chat\`
         <${prefix}> short | \`To Short url\``)
 
         const embed2 = new Discord.MessageEmbed()
         .setAuthor(msg.author.username, msg.author.avatarURL())
         .setThumbnail(msg.author.avatarURL())
         .setTitle("Admin Commands")
         .setColor("BLUE")
         .setDescription(`
    <${prefix}> ban or باند| \`To ban the user off the server\`
    <${prefix}> unban | \`To unban a member\`
    <${prefix}> kick  or طرد | \`To kick the user off the server\`
    <${prefix}> clear  or مسح | \`to clear chat\`
    <${prefix}> lock or قفل | \`to lock chat\`
    <${prefix}> unlock or فتح| \`to unlock chat\`
    <${prefix}> hiden  or اخفاء | \`hide chat\`
    <${prefix}> unhiden or اظهار| \`unhide chat\`
    <${prefix}> mute or اسكت | \`Mute the user from writing\`
    <${prefix}> unmute or تكلم | \`Unmute the user from writing\`
    <${prefix}> prison or سجن | \`To give prison to the member\`
    <${prefix}> unprison or فك | \`To get the member out of prison\`
    <${prefix}> role-info | \`To display rank information\`
    <${prefix}> nick | \`To Change Name Member\`
    <${prefix}> reset | \`To return the user name\`
    <${prefix}> say | \`To make the bot write\`
    <${prefix}> vkick | \`Temporary work in chat\``)
 
         const embed3 = new Discord.MessageEmbed()
         .setAuthor(msg.author.username, msg.author.avatarURL())
         .setThumbnail(msg.author.avatarURL())
         .setTitle("Game Commands")
         .setDescription(`
  <${prefix}> cuttweet or cut or كت | \`Random questions\`
  <${prefix}> kill | \`to kill a member 😂\`
  <${prefix}> kiss | \`to kiss a member ♥\`
  <${prefix}> rps | \`to play with a bot Rock Paper Scissors\``)
 
       
       const embedPages = [embed1, embed2, embed3];
       ButtonPages.createPages(client.interaction, msg, embedPages, 60 * 1000, "red", "👉", "👈", "❌");
     }
});
///Avatar
var _0x5f27=["\x6D\x65\x73\x73\x61\x67\x65","","\x61\x76\x61\x74\x61\x72","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x62\x6F\x74","\x61\x75\x74\x68\x6F\x72","\x66\x69\x72\x73\x74","\x75\x73\x65\x72\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x52\x65\x71\x75\x65\x73\x74\x65\x64\x20\x42\x79\x20","\x74\x61\x67","\x61\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\x73\x65\x74\x49\x6D\x61\x67\x65","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x23","\x64\x69\x73\x63\x72\x69\x6D\x69\x6E\x61\x74\x6F\x72","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\x73\x65\x74\x55\x52\x4C","\x52\x41\x4E\x44\x4F\x4D","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x41\x76\x61\x74\x61\x72\x20\x4C\x69\x6E\x6B","\x73\x65\x74\x54\x69\x74\x6C\x65","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x6F\x6E"];client[_0x5f27[26]](_0x5f27[0],(_0x4411x1)=>{if(_0x4411x1[_0x5f27[4]][_0x5f27[3]](`${_0x5f27[1]}${prefix}${_0x5f27[2]}`)){if(_0x4411x1[_0x5f27[6]][_0x5f27[5]]){return};const _0x4411x2=_0x4411x1[_0x5f27[9]][_0x5f27[8]][_0x5f27[7]]()|| _0x4411x1[_0x5f27[6]];let _0x4411x3= new Discord.MessageEmbed()[_0x5f27[23]](_0x5f27[22])[_0x5f27[21]](_0x5f27[20])[_0x5f27[19]](`${_0x5f27[1]}${_0x4411x2[_0x5f27[12]]({dynamic:true,size:1024})}${_0x5f27[1]}`)[_0x5f27[18]](`${_0x5f27[1]}${_0x4411x2[_0x5f27[15]]}${_0x5f27[16]}${_0x4411x2[_0x5f27[17]]}${_0x5f27[1]}`,`${_0x5f27[1]}${_0x4411x2[_0x5f27[12]]({dynamic:true,size:1024})}${_0x5f27[1]}`)[_0x5f27[14]](`${_0x5f27[1]}${_0x4411x2[_0x5f27[12]]({dynamic:true,size:1024})}${_0x5f27[1]}`)[_0x5f27[13]](`${_0x5f27[10]}${_0x4411x1[_0x5f27[6]][_0x5f27[11]]}${_0x5f27[1]}`,`${_0x5f27[1]}${_0x4411x1[_0x5f27[6]][_0x5f27[12]]({dynamic:true,size:1024})}${_0x5f27[1]}`);_0x4411x1[_0x5f27[25]][_0x5f27[24]](_0x4411x3)}})
var _0x2700=["\x6D\x65\x73\x73\x61\x67\x65","","\x73\x65\x72\x76\x65\x72\x2D\x61","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x6E\x61\x6D\x65","\x67\x75\x69\x6C\x64","\x69\x63\x6F\x6E\x55\x52\x4C","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\x52\x65\x71\x75\x65\x73\x74\x65\x64\x20\x62\x79\x20\x3A\x20","\x74\x61\x67","\x61\x75\x74\x68\x6F\x72","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\x41\x76\x61\x74\x61\x72\x20\x4C\x69\x6E\x6B","\x73\x65\x74\x54\x69\x74\x6C\x65","\x29","\x73\x65\x74\x55\x52\x4C","\x73\x65\x74\x49\x6D\x61\x67\x65","\x52\x41\x4E\x44\x4F\x4D","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x6F\x6E"];client[_0x2700[22]](_0x2700[0],(_0xcffcx1)=>{if(_0xcffcx1[_0x2700[4]][_0x2700[3]](`${_0x2700[1]}${prefix}${_0x2700[2]}`)){let _0xcffcx2= new Discord.MessageEmbed();_0xcffcx2[_0x2700[8]](_0xcffcx1[_0x2700[6]][_0x2700[5]],_0xcffcx1[_0x2700[6]][_0x2700[7]]());_0xcffcx2[_0x2700[12]](`${_0x2700[9]}${_0xcffcx1[_0x2700[11]][_0x2700[10]]}${_0x2700[1]}`);_0xcffcx2[_0x2700[14]](_0x2700[13]);_0xcffcx2[_0x2700[16]](`${_0x2700[1]}${_0xcffcx1[_0x2700[6]][_0x2700[7]]({dynamic:true,size:1024})}${_0x2700[15]}`);_0xcffcx2[_0x2700[17]](_0xcffcx1[_0x2700[6]][_0x2700[7]]({dynamic:true,size:1024}));_0xcffcx2[_0x2700[19]](_0x2700[18]);_0xcffcx1[_0x2700[21]][_0x2700[20]](_0xcffcx2)}})