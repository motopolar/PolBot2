import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `😀 Bueno, ¿y qué nombre le pongo?`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '🤔 ¿No te parece muy largo? /n😑 25 caracteres máximo.'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
export default handler
