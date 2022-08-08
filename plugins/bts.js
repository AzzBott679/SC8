let fetch = require('node-fetch')
let bts = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/batues.txt')
    .then(res => res.text())
    .then(txt => bts = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = bts[Math.floor(Math.random() * bts.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '© nih BTSnya jangan lupa subscribe channel https://m.youtube.com/channel/UC0rPHvwr0sJtaccF8Mm1Xng 👍', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['bts']
handler.tags = ['internet']
handler.limit = 5
handler.command = /^(bts)$/i

module.exports = handler
