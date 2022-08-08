let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/indonesia'), 'Nih Jgn lupa subscribe Channel MBY•OFFICIAL https://youtube.com/channel/UCmUhiytK9WMYaOFgdOho_2g', wm, 'NEXT', '.cecanindo', m)
}

handler.help = ['cecanindo']
handler.tags = ['asupan']
handler.command = /^(cecanindo)$/i
handler.limit = 3
module.exports = handler

