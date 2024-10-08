// /api/sendMessage.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { message, chat_id, buttons } = req.body;

  // Ensure that your bot token is set securely in environment variables
  const botToken = process.env.BOT_TOKEN;

  // Call Telegram sendMessage API
  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id,
      text: message,
      reply_markup: {
        inline_keyboard: [buttons], // Add buttons to inline_keyboard
      },
    }),
  });

  const data = await telegramResponse.json();
  res.status(200).json(data);
};
