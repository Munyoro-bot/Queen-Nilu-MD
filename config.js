/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 263785192250
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = '' // QueenNilu;;;QipXlTRC#-O13whr5w84PrxmsP1AS8fZOMMA_LmQA5kHYUhg97vY

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://mabantity1_user:fDXdPtSXiYFNFXjAiJJn1f2TyqSRRspP@dpg-ckhit5i12bvs73einls0-a.oregon-postgres.render.com/mabantity1'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '263785192250'

global.OWNER_NAME = 'ₜₐₖᵤₙDₐ Cₕₐᵣₗₑₛ ₖₐₙⱼᵤₘₐ ₘᵤₙYₒᵣₒ'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'KING TAKX'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@takx_mb 🤹‍♂️' //sticker

global.FOOTER = '𝙸 𝙻𝙴𝙰𝚁𝙽 𝙰𝚃 𝙹𝙾𝙽𝙰𝚂 𝙷𝙸𝙶𝙷 𝚂𝙲𝙷𝙾𝙾𝙻'

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ǫᴜᴇᴇɴ ɴɪʟᴜ  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'false' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IxTYudb4GvSAuvzRKE5ULH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

