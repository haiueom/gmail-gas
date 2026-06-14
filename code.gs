const TELEGRAM_BOT_TOKEN = 'your telegram bot token';
const TELEGRAM_CHAT_ID = 'your telegram id';

function forwardGmailToTelegram() {
  // Search for unread emails in the inbox
  const threads = GmailApp.search('is:unread in:inbox');

  for (let i = 0; i < threads.length; i++) {
    const messages = threads[i].getMessages();

    for (let j = 0; j < messages.length; j++) {
      const message = messages[j];

      if (message.isUnread()) {
        const subject = message.getSubject();
        const sender = message.getFrom();
        // Get plain text body and limit length to avoid Telegram's 4096 char limit
        const snippet = message.getPlainBody().substring(0, 800);

        // Format the Telegram message
        const text = `📧 ${sender}\n${subject}\n\n${snippet}`;

        // Send to Telegram
        sendToTelegram(text);

        // Mark as read so it isn't forwarded again
        message.markRead();
      }
    }
  }
}

function sendToTelegram(text) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: text,
    link_preview_options: {
      is_disabled: true
    }
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };

  try {
    UrlFetchApp.fetch(url, options);
  } catch (e) {
    Logger.log('Error sending to Telegram: ' + e.toString());
  }
}
