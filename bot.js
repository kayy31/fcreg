const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on("guildMemberAdd", member => {
  member.roles.add('');// Buraya Unregister
});

client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      const kanal = member.guild.channels.cache.find(r => r.id === " ");// Kanal id 
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const zaman = moment.duration(kurulus).format(` YY **[Yıl,]** MM **[Ay,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]**`) 
    var kontrol;
  if (kurulus < 1296000000) kontrol = 've kayıt olmanda bir engel bulunuyor bu sunucuda zaman geçirebilmek için en az 14 günlük bir discord hesabı lazım.'
  if (kurulus > 1296000000) kontrol = 've kayıt olmanda herhangi bir engel bulunmuyor :tada:'
    moment.locale("tr");
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.guild.name, member.guild.iconURL({dynamic:true}))
  kanal.send(`
:tada: Aramıza Hoş Geldin! <@`+member.id+`>

Kayıtlarımız şuan sadece Taglı Üyelerimize açıktır, O yüzden tagımızı alarak sende bizden biris olabilirsin, unutma varsa senden iyisi o da senden birisi

Hesabın (\``+zaman+`\`) Önce Oluşturulmuş, `+kontrol+`

Kayıt olmadan önce <#BİLGİLENDİRME KANAL ID> Kanallına göz atmayı unutmayınız, sunucumuz hakkında sizde bilgi sahibi olabilirsiniz.

Sunucumuzun tagını (\`TAGINIZ\`) İsminizin herhangi bir yerine gözükecek şekillde koyarsanız sizde bizden birisi olabilirsiniz ve yetkili alımlarına katılabilirsiniz. 

Kayıt olmak için \`Voice Confirmed\` Odalarından birine geçip kayıt olabilirsin, <@&REGİSTER ID>  Seninle ilgilenecektir.
`)
});
 client.on("guildMemberAdd", member => {
    member.roles.add('');//Burayada Unregister
  });
