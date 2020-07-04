var Jimp = require('jimp');
const readline = require('readline');
const fs = require('fs');

const TYPE = process.argv.slice(2)[0] ? process.argv.slice(2)[0] : 'attendee';
const NAMEBADGE_FILE = `./assets/${TYPE}.png`;


let rl = readline.createInterface({
   input: fs.createReadStream('names.txt')
});

rl.on('line', (line) => {
   const fileName = line.replace(/\s+/g, '-').toLowerCase();

   Jimp.read(NAMEBADGE_FILE)
   .then(img => Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => [img, font]))
   .then(data => {
      const img = data[0];
      const font = data[1];

      return img.print(font, 112, 138, {
         text: line.toUpperCase(),
         alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
         alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
         }, 270, 140)
   })
   .then(img => img.write(`./out/${fileName}.png`))
   .catch(err => {
      console.error(err);
   });  
});

