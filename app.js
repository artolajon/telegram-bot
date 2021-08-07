require('dotenv').config({path:'.env'})
const { Telegraf } = require('telegraf')

if (!process.env.BOT_TOKEN){
    console.error('BOT_TOKEN is required!');
    return;
}

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('What do you have?'))
bot.hears('I have an army', (ctx) => ctx.reply('We have Hulk'))
bot.on('message', (ctx) => {
    console.log('New Message from', ctx.message.from.first_name);
    if (ctx.message.text == 'Hello there'){
        ctx.reply('General Kenobi')
    }
})

bot.launch()
console.log('Bot is active');