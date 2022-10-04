const mySecret = process.env['TOKEN'];
const client = getClient();

function getClient() {
  return new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS]
  });
}



client.on("ready", () => {
  console.log("Estoy listo!");
  assignRoles();
});


client.on("messageCreate", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }

  if (message.channelId == "1009831456866041866") {
    message.delete();
    console.log("mensaje eliminado");
  }
});

async function assignRoles() {
  const guild = client.guilds.cache.get('943897146485256222');
  var guildMembers = await guild.members.fetch();
  var guildRoles = await guild.roles.fetch()

  var specificRole = guildRoles.get('957842754300420167')
  console.log("Rol obtenido: " + specificRole.name)

  guildMembers.forEach(member => {
    console.log("Rol otorgado a: " + member.user.username)
    member.roles.add(specificRole);
  })
}

client.login(mySecret);


/*const intents = new Intents([
    Intents.NON_PRIVILEGED, // include all non-privileged intents, would be better to specify which ones you actually need
    "GUILD_MEMBERS", // lets you request guild members (i.e. fixes the issue)
]);
const client = new Client({ ws: { intents } });*/