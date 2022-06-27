module.exports = message => { client.on("message", message => {
    if (message.content === "!ping") {
      message.channel.send("Pong.")
    }
  })
}