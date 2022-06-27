const kick = require("../commands/testCommande")
module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message)
  }
}
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [] })
const token = 'OTkwNzU4MzE3ODgwMTM5ODU3.GT96AT.QCA5KJCxwyl3U-WdYrGvFekKSLPDqTqpjnyfXc'
client.once('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});
client.on("message", message => {
    if (message.content === "!ping") {
      message.channel.send("Pong.")
    }
  })
client.login(token);