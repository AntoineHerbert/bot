const kick = require("./commande/testCommande")
g

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
client.login(process.env.TOKEN);