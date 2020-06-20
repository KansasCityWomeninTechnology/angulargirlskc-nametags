var Jimp = require('jimp');
const readline = require('readline');
const fs = require('fs');

let rl = readline.createInterface({
   input: fs.createReadStream('names.txt')
});

rl.on('line', (line) => {
   const fileName = line.replace(/\s+/g, '-').toLowerCase();

   Jimp.read('./assets/attendee.png')
   .then(img => Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(font => [img, font]))
   .then(data => {
      const img = data[0];
      const font = data[1];

      return img.print(font, 212, 270, {
         text: line.toUpperCase(),
         alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
         alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
         }, 600, 300)
   })
   .then(img => img.write(`./out/${fileName}.png`))
   .catch(err => {
      console.error(err);
   });  
});

