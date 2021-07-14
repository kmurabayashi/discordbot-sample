const Discord = require('discord.js');
const client = new Discord.Client();
const fizzbuzz = require('./fizzbuzz');
require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.name === process.env.BOT_CHANNEL) {
        let result = fizzbuzz(message.content)
        if (result !== ''){
            message.channel.send(`${message.content} is ${result}`);
        }
    }
});

client.login(process.env.BOT_TOKEN);
