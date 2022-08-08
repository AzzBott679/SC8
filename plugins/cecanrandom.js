let fetch = require('node-fetch')
let arr = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/cecan.txt')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = arr[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '','© Nih Jgn lupa subscribe Channel MBY?OFFICIAL https://youtube.com/channel/UCmUhiytK9WMYaOFgdOho_2g👍', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['cecanrandom']
handler.tags = ['asupan']
handler.limit = 5
handler.command = /^(cecanrandom)$/i

module.exports = handler
