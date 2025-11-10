const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const inputPath = path.join(__dirname, '../public/brand/templata-logo.png');
  const outputPath = path.join(__dirname, '../public/favicon.ico');

  await sharp(inputPath)
    .resize(32, 32)
    .toFile(outputPath.replace('.ico', '-temp.png'));

  fs.renameSync(outputPath.replace('.ico', '-temp.png'), outputPath);

  console.log('✅ Generated favicon.ico from templata-logo.png');
}

generateFavicon().catch(console.error);
