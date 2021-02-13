const Discord = require('discord.js')
//const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
  
if(!['783839815337508914'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
  
const kadınrol = message.guild.roles.cache.find(r => r.id === '808235949024477214')
const kadınrol2 = message.guild.roles.cache.find(r => r.id === '808236002778021918')
const kadınrol3 = message.guild.roles.cache.find(r => r.id === '808236349429252156')
const unregister = message.guild.roles.cache.find(r => r.id === '804727646847893580')

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));

if(!member) return message.channel.send(`Kayıt Edilecek Kadın Kullanıcımız Etiketlenmemiş.`)
if(member.id === message.guild.OwnerID) return message.channel.send('Sunucu Sahiplerini Kayıt Edemezsin.')
  
if(!args[0]) return message.channel.send('Kayıt Edilecek Kadın Kullanıcımız Etiketlenmemiş.')  
let timereplace = args[0];
let time = timereplace.replace(/y/, ' yıl').replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat') 
 var tarih = new Date(Date.now())
 var tarih2 = ms(timereplace)
 var tarih3 = Date.now() + tarih2 + 1296000000
 let ay = moment(Date.now()+1296000000).format("MM")
 let gün = moment(Date.now()+1296000000).format("DD")
 let saat = moment(Date.now()+1296000000).format("HH:mm:ss")
 let yıl = moment(Date.now()+1296000000).format("YYYY")
 let kayıtsaat = `\`${gün} ${ay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${saat} (${yıl})\``
 let tag = "•"
 let name = args[1]
 let yas = args[2]
 if(!name) return message.channel.send('Kayıt Edilecek Kadın Kullanıcımızın İsmi Belirtilmemiş')
 if(!yas) return message.channel.send('Kayıt Edilecek Kadın Kullanıcımızın Yaşı Belirtilmemiş.')
member.setNickname(`${tag} ${name} | ${yas}`)
member.roles.add(kadınrol)
member.roles.add(kadınrol2)
member.roles.add(kadınrol3)
member.roles.remove(unregister)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kadın', 'k'],
    permLevel: 0
  }

  exports.help = {
    name: 'kadın', 
    description: "Etiketlenen kişiye kadın olarak Kayıt eder ve rollerini verir.",
    usage: '.kadın @etiket/id İsim Yaş'
  }