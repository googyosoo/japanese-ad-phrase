
const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../data/phrases.json');
const imagesDir = path.join(__dirname, '../public/images');

const rawData = fs.readFileSync(dataFile, 'utf-8');
const phrases = JSON.parse(rawData);

const missing = [];

phrases.forEach(phrase => {
    const imagePath = path.join(imagesDir, `phrase-${phrase.id}.webp`);
    if (!fs.existsSync(imagePath)) {
        missing.push({
            id: phrase.id,
            prompt: phrase.english
        });
    }
});

fs.writeFileSync(path.join(__dirname, '../missing.json'), JSON.stringify(missing, null, 2));
