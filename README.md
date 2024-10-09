# Telegram Channel Messenger

A web-based tool that allows you to send messages to a Telegram channel or chat, with support for inline buttons. This tool is built using HTML, JavaScript, and Tailwind CSS, and is deployed using Vercel's serverless functions.


## Features

- Send messages to a Telegram channel or chat using the Telegram Bot API.
- Add inline buttons (with customizable text and URLs).
- Built with responsive design using Tailwind CSS.


## Important Notice
To send messages to a Telegram **channel**, you must:
1. **Create a Telegram bot** using [BotFather](https://t.me/botfather) and obtain the bot token.
2. **Add the bot as an admin** to the channel you want to send messages to. Without admin privileges, the bot will not be able to send messages to the channel.


## Live Demo

[Click here to access the live tool](https://telegram-channel-messenger.vercel.app/)


## Prerequisites

To use this tool, you will need:

1. A **Telegram bot token**. You can create a bot and get the token using [BotFather](https://t.me/botfather) on Telegram.
2. A **chat ID** or **channel ID** where the bot is allowed to send messages (ensure the bot is an admin for channels).


## Getting Started

Follow these steps to run this tool locally or deploy it to a platform like Vercel.

### 1. Clone the Repository

```
git clone https://github.com/yourusername/telegram-messaging-tool.git
cd telegram-channel-messenger
```

### 2. Install Dependencies

```
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add your Telegram bot token:

```
BOT_TOKEN=your-telegram-bot-token
```

### 4. Run the Application Locally

```
npm run dev
```

### 5. Deploy to Vercel

If you want to deploy the tool to Vercel:

#### Install the Vercel CLI:

```
npm install -g vercel
```

#### Deploy your project to Vercel:

```
vercel deploy
```

## Usage

Once the tool is live, follow these steps to send a message to your Telegram channel or chat:

1. Message: Enter the text you want to send in the "Message" field.
2. Chat ID: Enter the chat or channel ID. If you're sending to a channel, use the channel username (e.g., @yourchannelusername).
3. Add Inline Buttons: Click the "Add More Buttons" button to add one or more inline buttons. You can enter the button text and URL.
4. Send the Message: Click the "Send Message" button to send the message to the specified chat/channel.

### Clearing Fields and Removing Buttons

- To remove an inline button, click the "Remove" button next to each inline button.
- To clear all form fields and reset the buttons, click the "Clear All Fields" button.


## File Structure

```graphql
├── public/
│   └── index.html                # Main HTML file for the tool
├── api/
│   └── sendMessage.js            # Serverless function that sends the message to Telegram
├── .env                          # Environment variables (contains BOT_TOKEN)
├── package.json                  # Project dependencies and scripts
└── README.md                     # Documentation (this file)
```



## API Reference

The tool sends messages to Telegram using the Telegram Bot API's sendMessage method.

### API Endpoint

```
POST /api/sendMessage
```

### Request Payload

```json
{
  "message": "Your message text",
  "chat_id": "@your_channel_username",
  "buttons": [
    {
      "text": "Button Text",
      "url": "https://example.com"
    }
  ]
}
```


## Contributing
Feel free to fork this repository, open issues, and submit pull requests to improve the tool.



## License
This project is licensed under the MIT License.