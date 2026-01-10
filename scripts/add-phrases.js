const fs = require('fs');

// 원본 파일 읽기
const rawText = fs.readFileSync('./일본어 광고 카피문구.txt', 'utf8');
const lines = rawText.split('\n').filter(l => l.trim());

// 기존 10개 데이터 유지
const existingData = JSON.parse(fs.readFileSync('./data/phrases.json', 'utf8'));

// 11-100번 문구 파싱 및 추가
for (let i = 10; i < lines.length && i < 100; i++) {
    const line = lines[i];
    const match = line.match(/^\d+\.\s*(.+)/);
    if (match) {
        const japanese = match[1].trim();
        existingData.push({
            id: i + 1,
            japanese: japanese,
            korean: `[${i + 1}번 문구 - 번역 준비 중]`,
            english: `[Phrase ${i + 1} - Translation pending]`,
            words: [
                { word: "人生", reading: "じんせい", meaning: "인생 / life" },
                { word: "心", reading: "こころ", meaning: "마음 / heart" },
                { word: "言葉", reading: "ことば", meaning: "말 / words" },
                { word: "世界", reading: "せかい", meaning: "세계 / world" },
                { word: "未来", reading: "みらい", meaning: "미래 / future" }
            ]
        });
    }
}

fs.writeFileSync('./data/phrases.json', JSON.stringify(existingData, null, 2), 'utf8');
console.log(`Total phrases: ${existingData.length}`);
