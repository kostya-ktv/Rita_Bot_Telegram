const TelegramAPI = require('node-telegram-bot-api')
require('dotenv').config()

const token = process.env.TOKEN

const bot = new TelegramAPI(token, {polling: true})
bot.setMyCommands([
   {command: "/help", description: "Help you to choose command"},
   {command: "/info", description: "Get an info about the bot"},
])
bot.on('message', async msg => {
   const text = msg.text
   const chatID = msg.chat.id

   const gameOptions = {
      reply_markup: JSON.stringify({
         inline_keyboard: [
            [{text: "KNOPKA", callback_data: 'CALL BACK KNOPKI'}, {text: "KNOPKA", callback_data: 'CALL BACK KNOPKI'} ],
            [{text: "KNOPKA", callback_data: 'CALL BACK KNOPKI'}]
         ]
      })
   }

   await bot.sendMessage(chatID, text, gameOptions)
   // await bot.sendSticker()
   console.log(msg)
   
})

bot.on('callback_query', msg => {
   console.log(msg)
})



