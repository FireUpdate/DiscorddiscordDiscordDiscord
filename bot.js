const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const Canvas = require("canvas");
const jimp = require("jimp");
const moment = require('moment');
const yt = require('ytdl-core');
const prefix = 'g!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame("g!help - For Help");
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


client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "welcome");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});




client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "↗wèlcòmèヅ");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "shop»welcome‹‹");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
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














///////////////////////////////////////////tag
client.on('message', message => {
	var prefix = "g!";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});



///////////////////////////////Trans 

/////////////////////////////





////////////
client.on("message", msg => {
var prefix = "g!";//البرفكس
let args = msg.content.split(" ").slice(2);
let men = msg.mentions.users.first();
var all = msg.content.split(" ").slice(1) - msg.mentions.users.first();
if(msg.content.startsWith(prefix + "say-embed")) {
msg.channel.send(`تم الارساله الى ${men}`)
let embed = new Discord.RichEmbed()
.setTitle("Message!!!!")
.addField("Sender", msg.author.tag, true)
.addField("Guild", msg.guild.name, true)
.addField(`Message`,`${args}`,  true)
men.sendMessage(embed);

}
});


//////////////////
const yourID = "411137717884289024"; //Instructions on how to get this: https://redd.it/40zgse
const setupCMD = "g!createrolemessage"
let initialMessage = `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`;
const roles = ["Member", "disco", "Public Relations", "Intern"];
const reactions = ["💻", "🖌", "😃", "🆕"];
const botToken = ""; /*You'll have to set this yourself; read more
                     here https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token*/

//Load up the bot...

//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS
    return messages;
}


client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});
////
const sWlc = {}
const premium = ['411137717884289024']
client.on('message', message => {
var prefix = "g!";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "»welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
 


client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "»welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setAuthor(h.username,h.avatarURL)
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['PicsArt_07-17-07.58.02 (1).png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 245, 150);
                              
                              //NAMEً
                              ctx.font = '30px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To ${member.guild.name}`, 245, 80);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });
///////////////////


 client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
 let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'pbc') {
        if (!args[1]) {
    message.channel.send(":white_check_mark: ***pbc <message>***");
    return;
    }
        message.guild.members.forEach(member => {
      if(!message.member.hasPermission('ADMINISTRATOR'))  return;
      message.react("✅");
            const w = ['./bc/1.png',
                       './bc/2.png',
                       './bc/3.png',
                       './bc/4.png',
                       './bc/5.png',
                       './bc/6.png',
                       './bc/7.png',];
            let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
 
});
 let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = '17px Arial';
                              ctx.fontSize = '13px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${args} ` , 200, 100);
member.sendFile(canvas.toBuffer());
});
});
});
}
});

/////////////////
 const ownerid = '411137717884289024'
client.colors = {}

//let rainbow = 0;

 client.on("ready", async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setGame(`☆ Top ☆`, {type: "2"});

  });
    client.setInterval(() =>{

        //adding this so it doesnt start doing weird stuff
        //try to change role color for every server
        for(let i in client.colors) {
            let guildId = client.colors[i].guild;
            let guild = client.guilds.get(guildId);
            let date = client.colors[i].date;


            //if 72 hours have passed, remove from config
            if(date < new Date().getTime() - 259200000) {
                 delete client.colors[i];
                return;
            }

            //if server gets deleted or bot gets kicked, remove from config
            if(guild === null) {
                delete client.colors[i];
                return;
            }
            //try to change the role
            try{
                guild.roles.find("name", client.colors[i].role).setColor(rainbow[place])
                
                .catch(err => { 
                    delete client.colors[i]
                   
                    return;
                });
            }catch(err){
                delete client.colors[i]
                return;
            }
        }
        	if(place == (size - 1)) {
			place = 0;
		} else {
			place++;
		}
        //Every 10 seconds change it
    }, 500)


client.on('message', message => {
    var prefix = "*"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
    if(command === "stats") {
        var time = process.uptime();
        var uptime = (time + "").toHHMMSS();

        const embed = new Discord.RichEmbed()
        .setTitle(":tools: Stats")
        .setColor(0x009688)
        .setDescription( 
        ":crown: " +              "Servers: " + client.guilds.size + "\n" + 
        ":bust_in_silhouette: " + "Users: " + client.users.size + "\n" + 
        ":clock12: " +            "Uptime: " + uptime)
        message.channel.send({embed});
    }
    if(command === "rainbow") {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
            .setAuthor("Rainbow", client.user.avatarURL)
            .setColor(0xF44336)
            .setDescription("You must have the administrator permission!")
            message.channel.send({embed});
            return;
        }

        if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
            .setAuthor("Rainbow", client.user.avatarURL)
            .setColor(0xF44336)
            .setDescription("I must have the administrator permission!")
            message.channel.send({embed});
            return;
        }
		
		if(!message.member.guild.roles.find("name", args.join(" "))) {
            const embed = new Discord.RichEmbed()
            .setAuthor("Rainbow", client.user.avatarURL)
            .setColor(0xF44336)
            .setDescription("Usage: **`*rainbow (role name)`**")
            message.channel.send({embed});
            return;
        }

        if(message.member.guild.roles.find("name", args.join(" ")) === null) {
            const embed = new Discord.RichEmbed()
            .setAuthor("Rainbow", client.user.avatarURL)
            .setColor(0xF44336)
            .setDescription("Something went wrong.")
            message.channel.send({embed});
            return;
        }


        if(message.member.guild.roles.find("name", args.join(" ")).position >= message.guild.me.highestRole.position) {
            const embed = new Discord.RichEmbed()
            .setAuthor("Rainbow", client.user.avatarURL)
            .setColor(0xF44336)
            .setDescription("My **RainColor** role must be higher than the mentioned role!")
            message.channel.send({embed});
            return;
        }


        const embed = new Discord.RichEmbed()
        .setAuthor("Rainbow", client.user.avatarURL)
        .setColor(0x4CAF50)
        .setDescription("Successfully applied rainbow colors to **`" + args.join(" ") + "`**" + "\n" +
        "Note: this only lasts 72 hours, then it will stop. You can still apply it whenever you'd like!")
        message.channel.send({embed});

        client.colors[message.guild.name] = {
            guild: message.guild.id,
            role: args.join(" "),
            date: new Date().getTime()
        }

    }
});


const size    = 12
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
	var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
	var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
	var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg
	rainbow[i] = '#'+ red + green + blue;
}
function sin_to_hex(i, phase) {
	var sin = Math.sin(Math.PI / size * 2 * i + phase);
	var int = Math.floor(sin * 127) + 128;
	var hex = int.toString(16);

	return hex.length === 1 ? '0'+hex : hex;
}
let place = 0;



client.login(process.env.BOT_TOKEN);





