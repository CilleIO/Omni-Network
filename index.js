const Discord = require('discord.js');
const { type } = require('os');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Omni Network is Online!');
    client.user.setPresence({
        status: "online",
        game: {
            name: "~help",
            type: "WATCHING"
        }
    });
  });
//variables, constants, and more

const role = {
    ItemShop: "<@&785666966135373826>"
}
const socials = {
    twitter: "<https://twitter.com/OmniNetworkIO>",
    instagram: ""
}

var prefix = "<"
var token = "Nzg1NjYyMjk1ODQ1MjQwODUy.X87HCA.AU9kMOjsbBBcqx7zmOV4MAfIX_Q"

  //help command
  client.on('message', message => {
      if(message.content === prefix + "help") {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#e5dd75')
        .setTitle('Help')
        .setDescription('If you need some form of server support, see <#785731995610513430> Other tickets may be of more relevance! See all of our commands below!')
        .addFields(
            { name: 'Twitter', value: '~twitter for a link to our very own Twitter account!'},
            { name: 'Instagram', value: '~instagram for a link to our very own Instagram account!'}
        )
        message.channel.send(helpEmbed)
      }
  });

  //help via dm command
  client.on('message', message => {
      if(message.content === prefix + "dmhelp") {
          const dmhelpEmbed = new Discord.MessageEmbed()
          .setColor('#e5dd75')
          .setTitle('Help')
          .setDescription('If you need some form of server support, see <#785731995610513430> Other tickets may be of more relevance!')
          .addFields(
            { name: 'Twitter', value: '~twitter for a link to our very own Twitter account!', inline: true},
            { name: 'Instagram', value: '~instagram for a link to our very own Instagram account!', inline: true}
        )
        message.channel.type === (`"dm"`) + message.author.send(dmhelpEmbed)
      }
  });

  //social media commands
  client.on('message', message => {
      if(message.content === prefix + "twitter") {
          message.channel.send(socials.twitter)
      }
      if(message.content === prefix + "instagram") {
          message.channel.send(socials.instagram)
      }
  });

  //leaderboard standings 
  client.on('message', message => {
      if(message.content === prefix + "leaderboard") {
        var leaderboards = "**Choose a category please!** All of the following are options: Wins, Kills, Win %, and KD! *Example:* ~leaderboardwins"
          message.channel.send(leaderboards)
      }
    });

    //Bots latency check
    client.on('message', message => {
        if(message.content === prefix + "ping") {
            message.channel.send("Pinging...").then(m => {
                var ping = m.createdTimestamp - message.createdTimestamp;
                var pingembed = new Discord.MessageEmbed()
                .setAuthor(`Your ping is ${ping}`)
                .setColor("#e5dd75")

                m.edit(pingembed)
            });
        }
    });

      //Item Shop role pinger
  client.on('message', message => {
      if(message.channel.id === '785655452641394718')
    for(var i = 0; i < message.embeds.length; i++) {
        if(message.embeds[i].title.includes("Item Shop")) {
            message.channel.send(role.ItemShop)
        }
    }
});

//Get Roles Command
//NAE
client.on('message', message => {
    const guild = client.guilds.cache.get("726710869198635088");
    let NAE = message.guild.roles.cache.find(r => r.name === "NAE");
    let member = message.mentions.members.first();
    if(client.roles === NAE) {
        message.channel.send("You already have that role!");
    }
    else(message.content === prefix + "roleadd nae"); {
        message.guild.members.cache.get(message.author.id).roles.add(NAE);
        message.channel.send("Role NAE Added!");
    }
});
//message.guild.members.cache.get(message.author.id).roles.add(NAE);
//NAW
client.on('message', message => {
    const guild = client.guilds.cache.get("726710869198635088");
    let NAW = message.guild.roles.cache.find(r => r.name === "NAW");
    let member = message.mentions.members.first();
    if(client.roles === NAW) {
        message.channel.send("You already have that role!");
    }
    else(message.content === prefix + "roleadd naw"); {
        message.guild.members.cache.get(message.author.id).roles.add(NAW);
        message.channel.send("Role NAW Added!");
    }
});
//EU
client.on('message', message => {
    const guild = client.guilds.cache.get("726710869198635088");
    let EU = message.guild.roles.cache.find(r => r.name === "EU");
    let member = message.mentions.members.first();
    if(client.roles === EU) {
        message.channel.send("You already have that role!");
    }
    else(message.content === prefix + "roleadd eu"); {
        message.guild.members.cache.get(message.author.id).roles.add(EU);
        message.channel.send("Role EU Added!");
    }
});

client.login(token);
