const bannedwords = [//By:Mahmoud-QuaStyle
  "#credit",//Gamingbot
  "#profile",//Gamingbot
//Gamingbot
  "#rep",//Gamingbot
  "#top",//Gamingbot
  "%level",//Gamingbot
  "%تقديم",//Gamingbot
  "-play",//Gamingbot
  "-stop",//Gamingbot
  "-p",//Gamingbot
  "-s",//Gamingbot
  "!invites",//Gamingbot
  "!top",//Gamingbot
  "G.play",//Gamingbot
  "G.stop",  //Gamingbot
  "G.skip",  //Gamingbot
  "-skip",  //Gamingbot
  "g!help",//Gamingbot
  "g!profile"  //Gamingbot
  //Gamingbot
//Gamingbot

]
client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '480937096102543385') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ تم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠`**")
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })
