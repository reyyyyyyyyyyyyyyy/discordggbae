const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const config = require('./config.json');
const token = config.token;
const { greenBright } = require('chalk')
const { yellow } = require('chalk')
const prefix = config.prefix;
const noob = config.ID;


client.on("ready", () => {
  console.log(`Subscribe to svqn11 and like the video! Thanks`)
  console.log(`Prefix : ${prefix}`)
  console.log(`free legit nitro server? join my: https://discord.gg/THkV5CnbDa`)
  client.user.setActivity({ type: "WATCHING", name: `discord.gg/bae` });
});


client.on("message", message => {

if (message.content.startsWith(prefix + 'sex')) {
    if (message.author.id != noob) {
      return message.reply(`Couldn't find your User ID in Database.`)
    }
    else {
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(greenBright(` [+] Successfull DM | ${member.user.username}#${member.user.discriminator}`))).catch(e => console.error(yellow(`[+] Retrying | ${member.user.username}#${member.user.discriminator}`)));
      })
    }
  }

})

console.log(`[E] Successfull.`)
console.log(`Subscribe to svqn11 on YouTube!`)



client.login(token);