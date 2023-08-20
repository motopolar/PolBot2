let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('│✔️│🌴 Ahora este chat no está baneado.')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
handler.register = true
export default handler
