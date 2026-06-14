# gmail-gas
Forward Gmail inbox to Telegram using Google app script 

## How to setup

### 1. Create a Telegram Bot

1. Open Telegram and search for @BotFather.
2. Send the command `/newbot` and follow the prompts to name your bot and give it a username.
3. BotFather will give you an HTTP API Token (e.g., 123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ).

### 2. Get Your Chat ID

1. Send a message (e.g., "Hello") to your newly created bot in Telegram.
2. Open your web browser and go to: [https://api.telegram.org/bot](https://api.telegram.org/bot)<YOUR_BOT_TOKEN>/getUpdates (replace <YOUR_BOT_TOKEN> with the token from Step 1).
3. Look for the "chat":{"id":...} field in the JSON response. That number (e.g., 987654321) is your Chat ID. Save it.

### 3. Create the Google Apps Script

1. Go to script.google.com and click New Project.
2. Delete any existing code in the editor and replace with `code.gs`
3. Replace `YOUR_BOT_TOKEN_HERE` and `YOUR_CHAT_ID_HERE` with your actual credentials.
4. Save the project (click the floppy disk icon).

### 4. Authorize the Script

1. In the Apps Script editor, select the `forwardGmailToTelegram` function from the dropdown at the top.
2. Click the Run button.
3. Google will prompt you to review permissions.
4. Click Review permissions, choose your account, click Advanced, and then click Go to [Project Name] (unsafe).
5. Allow the script to read your emails and connect to external services.

### 5.Set Up Automation (Triggers):

1. In the Apps Script sidebar on the left, click on the Triggers icon (it looks like an alarm clock).
2. Click + Add Trigger in the bottom right corner.
3. Configure the trigger as follows:
    - Choose which function to run: `forwardGmailToTelegramSelect`
    - Event source: Time-driven
    - Select type of time based trigger: Minutes timer
    - Select minute interval: Every minute (or every 5 minutes, depending on your preference).
4. Click Save.

