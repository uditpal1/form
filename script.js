/* TESTING ONLY: the bot token is exposed in frontend code. Never use this in production. */
const BOT_TOKEN = "8303657634:AAEy-hwtUxIei4SSW5CGrlmueCvZGZ2WmYE";
function getChatId(){return new URLSearchParams(location.search).get('chat')}
async function sendToTelegram(chatId,text){if(!BOT_TOKEN||BOT_TOKEN.includes('PASTE_YOUR'))throw new Error('Add your test Bot Token in script.js first.');const r=await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:chatId,text,disable_web_page_preview:true})});const j=await r.json();if(!j.ok)throw new Error(j.description||'Telegram API error');return j}
function showError(m){const e=document.getElementById('error');if(e)e.textContent=m}
function escapeHtml(v){return String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;')}
