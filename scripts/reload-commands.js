const { Client, Intents } = require('discord.js');
const { removeGuild, removeGlobal, deployGuild, deployGlobal } = require('../deploy-commands');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    const guilds = client.guilds.cache.map(guild => guild.id);
    removeGuild(guilds);
    removeGlobal();
    console.log("Removed all registered commands!");
    deployGuild(guilds);
    deployGlobal();
});

client.login(process.env.TOKEN);