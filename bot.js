const Discord = require('discord.js');
const tpoints = {};
const vpoints = {};
const prefix = "g!";
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'watching'})
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on("message", message => {
    if (message.content.startsWith("g!obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });
client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });





 client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('g!adminbc')){
if(!message.author.id === '411137717884289024') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});











const bannedwords = [//Alpha Codes
  "#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip",
  "g!help"
//Alpha Codes
//Alpha Codes

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
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })

 "#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '495595131181727774') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })



"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '495356595585417217') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })




"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '490641846993682457') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })




"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '490642049092026398') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })



"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '4479682510368931840') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**`  تم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })




"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '479041823873040399') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**`  تم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })











"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '490642049092026398') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[GamingBot] ${client.users.size}`)
    client.user.setStatus("Idle")   
});

////
//الكود حق بوت Gaming BOT
let points = JSON.parse(fs.readFileSync('./points.json', 'utf8')); // يقوم بقراءه ملف النقاط , والمسار حق النقاطس العام لجميع الأوامر
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'فكك')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {
let embed = new Discord.RichEmbed()
.setColor("04791c")
 .setImage(`${item.type}`)
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
         const sh = new Discord.RichEmbed()
.setColor("04791c")
.setDescription('**? |Good Job +1P**')
.addField('Type G.mypoints', 'To Show ur Points' , true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
        let won = collected.first().author;
                points[won.id].points++;
        })
           .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`?? |**Time Is End**`);
           })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
}
})
client.on('message', message => {
if (message.content.startsWith(prefix + 'mypoints')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});













client.login(process.env.BOT_TOKEN);





