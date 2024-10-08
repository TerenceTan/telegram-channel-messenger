// /api/sendMessage.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { message, chat_id, buttons } = req.body;

  // Ensure that your bot token is set securely in environment variables
  const botToken = process.env.BOT_TOKEN;

  // Validate required fields
  if (!message || !chat_id) {
    return res.status(400).json({ ok: false, description: 'Message and chat_id are required.' });
  }

  try {
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

    if (!data.ok) {
      // Handle Telegram API error
      return res.status(500).json({ ok: false, description: data.description });
    }

    // Return success response to the front-end
    return res.status(200).json({ ok: true, description: 'Message sent successfully!' });
  } catch (error) {
    // Catch any unexpected errors
    return res.status(500).json({ ok: false, description: `Error: ${error.message}` });
  }
};
