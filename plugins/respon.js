let handler = async m => m.reply(`
            ⛔❗𝐊𝐀𝐌𝐔 𝐓𝐄𝐑𝐃𝐄𝐓𝐄𝐊𝐒𝐈 𝐌𝐄𝐍𝐆𝐈𝐑𝐈𝐌 𝐊𝐀𝐓𝐀- 𝐊𝐀𝐓𝐀 𝐘𝐀𝐍𝐆 𝐃𝐈𝐋𝐀𝐑𝐀𝐍𝐆 𝐃𝐈 𝐆𝐑𝐔𝐏 𝐈𝐍𝐈 , 𝐌𝐀𝐀𝐅 𝐋𝐈𝐌𝐈𝐓 𝐊𝐀𝐌𝐔 𝐒𝐀𝐘𝐀 𝐊𝐔𝐑𝐀𝐍𝐆𝐈 𝐒𝐄𝐁𝐀𝐍𝐘𝐀𝐊 *200* + 𝐏𝐀𝐉𝐀𝐊 𝐉𝐀𝐍𝐆𝐀𝐍 𝐔𝐋𝐀𝐍𝐆𝐈 𝐋𝐀𝐆𝐈 𝐘𝐀🤖
`.trim()) // Tambah sendiri kalo mau

handler.customPrefix = /^(setan|asw|tolol|anjing|ngentot|ngenthod|ngentd|ajg|ngeth|ngenthd|tlol|babi|kontol|kntl|khont|khonthol|kintil|khintil|khintl|puki|pukii|bangsat|bngst|bgst|bangshat|babi|bbi|ajng|bego|bgo|somplak|smplk|njing|lonte|lnte|ngewe|ngwe|entot|gay|ngetot|asu|pejuh|jembut|jembt|jembot|jmbt|kimak|fuck|bitch|nigga|coli|colmek|memek|mmek|mmk|nenen)$/i
handler.command = new RegExp

handler.limit = 200
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false
module.exports = handler