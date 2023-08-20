import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['526631621048', 'Polar', true]
];
global.suittag =['5216631621048'];
global.mods = []
global.prems = ['5216631621048'];
global.reportes_solicitudes = ['5216631621048'];

global.openai_key = 'sk-0';

global.openai_org_id = 'org-3';

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['BrunoSobrino_2']; // ['GataDios']
global.itsrose = ['4b146102c4d500809da9d1ff'];

global.APIs = {
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',

},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
};
global.packname = 'PolBot'
global.author = 'Polar'
global.vs = '1.10.90'
global.version = vs
global.gt = 'PolBot'
global.hadesbot = gt
global.yt = 'https://youtu.be/aPu9wQi-z8U'
global.youtube = yt
global.ig = 'https://www.instagram'
global.hadesig = ig
global.md = 'https://github.com/OFC-YOVANI/HATSUNE-MIKU-ULTRA.git'
global.botxdf = md
global.nn = 'https://chat.whatsapp.com/KlAYxPxLAkSGOyZxeXXZkt'
global.nngrupo = nn
global.nnn = 'https://chat.whatsapp.com/DDm7HC6e5MF9qcdLqB22RQ'
global.nnngrupo = nnn
global.paypal = 'https://pay'
global.donar = paypal
global.rg = 'Ay Caray. No he encontrado nada.'
global.resultado = rg
global.ag = '⚠️'
global.advertencia = ag
global.iig = 'Info! ✨'
global.informacion = iig
global.fg = 'Estoy teniendo problemas :('
global.fallo = fg
global.mg = 'Mal, mal. Has usado el comando incorrectamente.'
global.mal = mg
global.eeg = 'Ya he enviado el reporte a mis creadores.'
global.envio = eeg
global.eg = '¡He encontrado el resultado!'
global.exito = eg

global.wm = 'PolBot\nPolBot'
global.igfg = 'PolBot'
global.wait = 'Dame un momento...\n▰▰▰▰══════'

global.imagen1 = fs.readFileSync('./lib/img/descargas.jpg')
global.imagen2 = fs.readFileSync('./lib/img/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./lib/img/bot.jpg')
global.imagen4 = fs.readFileSync('./lib/img/grupo.jpg')
global.imagen5 = fs.readFileSync('./lib/img/Menu.jpg')
global.imagen6 = fs.readFileSync('./lib/img/ifo.jpg')
global.imagen7 = fs.readFileSync('./lib/img/minecraft.jpg')
global.mods = [] 

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
