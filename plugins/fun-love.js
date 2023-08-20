let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ MEDIDOR DE AMOR ❤️❤️*
*El amor de ${text} por ti es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler
