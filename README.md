# Telegram Channel Messenger

A web-based tool that allows you to send messages to a Telegram channel or chat, with support for inline buttons. This tool is built using HTML, JavaScript, and Tailwind CSS, and is deployed using Vercel's serverless functions.

## Features

- Send messages to a Telegram channel or chat using the Telegram Bot API.
- Add inline buttons (with customizable text and URLs).
- Automatically prepends the `@` symbol to the chat ID if missing.
- Remove and clear inline buttons.
- Clear all form fields with a single button click.
- Built with responsive design using Tailwind CSS.

## Important Notice
To send messages to a Telegram **channel**, you must:
1. **Create a Telegram bot** using [BotFather](https://t.me/botfather) and obtain the bot token.
2. **Add the bot as an admin** to the channel you want to send messages to. Without admin privileges, the bot will not be able to send messages to the channel.

## Live Demo

[Click here to access the live tool](#) (replace with your Vercel deployment link)

## Prerequisites

To use this tool, you will need:

1. A **Telegram bot token**. You can create a bot and get the token using [BotFather](https://t.me/botfather) on Telegram.
2. A **chat ID** or **channel ID** where the bot is allowed to send messages (ensure the bot is an admin for channels).

## Getting Started

Follow these steps to run this tool locally or deploy it to a platform like Vercel.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/telegram-messaging-tool.git
cd telegram-messaging-tool

### 2. Install Dependencies

```bash
npm install

