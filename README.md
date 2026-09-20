# Telegram Form — GitHub Pages Testing Version

Flow: Telegram user → personal link → index → form 1 → form 2 → dashboard → Telegram Bot.

## WARNING
This prototype intentionally puts the Telegram Bot Token in `script.js`. Anyone who can inspect the GitHub Pages site can obtain it. Use only for private testing. Revoke/regenerate the token before production.

## Setup
1. Create a bot with @BotFather using `/newbot`.
2. Copy its token.
3. Put the token in `script.js` as `BOT_TOKEN`.
4. Send a message to your bot.
5. Get your test Chat ID using Telegram's `getUpdates` API, or use the Chat ID you already know.
6. Upload the project to GitHub.
7. Enable GitHub Pages from Settings → Pages → Deploy from branch → `main` → `/root`.

## Testing link
`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/?chat=YOUR_CHAT_ID`

Example:
`https://example.github.io/telegram-form/?chat=123456789`

The `chat` value is carried through every page. Form 1 collects First Name + Mobile. Form 2 collects Email + Message. Submit sends the combined data to that Chat ID through the Telegram Bot API, then opens the dashboard.

No Vercel, Cloudflare, or Supabase is required for this testing version.

## Production
Do not deploy this version for real users. Move the Bot API call and token to a backend/serverless function and use a random link token mapped server-side to the Telegram Chat ID.
