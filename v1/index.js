const kick = require("./commande/testCommande")


module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message)
  }
}
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.once('ready', () => {
   console.log('RDY');
});



client.on('message', (message) => {
  if(message.content === '!ping'){
    message.channel.send('pong');
  }
});
client.login(this.toString(/*process.env.TOKEN*/ "OTkwNzU4MzE3ODgwMTM5ODU3.GAw1PA."+"i9-DqRQbF6MKJ43nGf_IM71SGaED_NDKZ5iV8Y"));