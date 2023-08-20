import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
    if (usedPrefix == 'a' || usedPrefix == 'A') return;

    if (m.sender == '5216631621048') {
        try {
            let pp = imagen5;
            let img =  './lib/img/Menu.jpg';
            let d = new Date(new Date + 3600000);
            let locale = 'es';
            let week = d.toLocaleDateString(locale, { weekday: 'long' });
            let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
            let _uptime = process.uptime() * 1000;
            let uptime = clockString(_uptime);
            let user = global.db.data.users[m.sender];
            let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
            let more = String.fromCharCode(8206);
            let readMore = more.repeat(850);
            let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
            var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document'];
            var document = doc[Math.floor(Math.random() * doc.length)];
            let str = `⟥⟝⟢⟨ *PolBot* ⟩⟣⟞⟤
➟ *𝗛ᴏʟᴀ,➟${taguser}*
➟ *ᴏᴡɴᴇʀ:Pol*
➟ *ғᴇᴄʜᴀ:➟${date}*
➟ *ᴛɪᴇᴍᴘᴏ:➟${uptime}* 
➟ *ᴜsᴜᴀʀɪᴏs:➟${rtotalreg}*
➟ *ᴄᴜᴇɴᴛᴀs ᴏғᴄ:* *https://atom.bio/ofc_yovani_hades*
⬒ ─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─ ⬒

⬒ ─⟢⟨ *CHATGPT* ⟩⟣─ ⬒
➟ *.ia chatgpt*
➟ *.bot pergunta*
⬒ ─⟢⟨PolBot✍⟩⟣─ ⬒

⬒ ─⟢⟨ *Menus* ⟩⟣─ ⬒
➟ *.descargas*
➟ *.grupos*
➟ *.info*
➟ *.menustickers*
➟ *.propietario*
➟ *.enable comandos para el owner*
➟ *.instalarbot miku*
➟ *.ip servidor de minecraft*
➟ *.Miku*
➟ *.perfil*
➟ *.redes*
⬒─⟢⟨PolBot⟩⟣─⬒`.trim();

            if (m.isGroup) {
                // ... (código de envío de mensaje a grupo)
            } else {
                // ... (código de envío de mensaje a usuario)
            }
        } catch {
            conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
        }
    } else {
        conn.reply(m.chat, 'No eres Pol');
    }
};

handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.fail = null;

export default handler;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}
