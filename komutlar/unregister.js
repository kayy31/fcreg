const Discord = require('discord.js')
//const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
  
if(!['808274069618950144', '808659866541359125', '808274532288036864'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
  
const register = message.guild.roles.cache.find(r => r.id === '')//Buraya registere atılması için Unregister Rolünün İdsi
const taglı = message.guild.roles.cache.find(r => r.id === '')//Alınacak Rol İd
const taglı2 = message.guild.roles.cache.find(r => r.id === '')//Alınacak Rol İD
const taglı3 = message.guild.roles.cache.find(r => r.id === '')// Alınacak Rol id 

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));

if(!member) return message.channel.send(`Ekipten Atılacak Belirtilmemiş Dostum.`)
if(member.id === message.guild.OwnerID) return message.channel.send('Ekip Kurucularını Ekibe Tekrardan Alamasın.')
  
if(!args[0]) return message.channel.send('Ekipten Atılacak Kişi Belirtilmemiş Dostum')  
member.roles.add(register)//Burda daha fazla rol belirtmek isterseniz const bölümüne taglı3 veya alınacakrol3 şekilde beliriip member.roles.remove(alınacakrol3) şeklinde belirtin.
member.roles.remove(taglı)
member.roles.remove(taglı2)
member.setNickname(member.user.username)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['unregister'],
    permLevel: 0
  }

  exports.help = {
    name: 'unregister',
    description: "Etiketlenen kişiyi unregister'e atar.",
    usage: '.unregister @etiket/id İsim Yaş'
  }