let handler = async m => m.reply(`
kan di menu ada cek aja lah 😐🤖
`.trim()) // Tambah sendiri kalo mau

handler.customPrefix = /^(.linkgrup|linkgrup|.linkgc|linkgc|gclink|.gclink)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false
module.exports = handler