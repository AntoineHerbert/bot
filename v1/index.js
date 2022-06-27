const kick = require("./commande/testCommande")
module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message)
  }
}
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const token = 'OTkwNzU4MzE3ODgwMTM5ODU3.GlG7sT.uzhmKNatV6DQI--EUgTl8ANXO2PCEY1rFTmaTg'
client.once('ready', () => {
   console.log('RDY');
});



client.on('message', (message) => {
  if(message.content === '!ping'){
    message.channel.send('pong');
  }
});
client.login(token);