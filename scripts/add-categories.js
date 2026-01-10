const fs = require('fs');
const path = require('path');

const phrasesPath = path.join(__dirname, '../data/phrases.json');
const phrases = JSON.parse(fs.readFileSync(phrasesPath, 'utf8'));

// Keywords for categorization
const categories = {
    '사랑': ['love', '恋', '愛', '好き', 'marriage', 'heart', 'kiss', 'together', 'couple', 'date', 'wedding', '사랑', '연애', '결혼', '좋아'],
    '일/성장': ['work', 'job', 'growth', 'strive', 'dream', 'future', 'effort', 'study', 'exam', 'challenge', 'fight', 'money', 'business', '일', '성장', '꿈', '노력', '공부', '합격', '도전'],
    '사회': ['world', 'society', 'era', 'people', 'connection', 'peace', 'war', 'news', 'bias', 'gender', 'rule', '사회', '시대', '세계', '사람', '편견', '규칙'],
    '감성': ['tear', 'cry', 'sad', 'beautiful', 'sky', 'rain', 'flower', 'wind', 'star', 'memory', 'season', 'spring', 'summer', 'autumn', 'winter', '감성', '눈물', '아름다', '하늘', '비', '꽃', '계절', '추억'],
    '인생': [] // Default category
};

function determineCategory(phrase) {
    const text = (phrase.japanese + ' ' + phrase.korean + ' ' + phrase.english).toLowerCase();

    // Check specific specific categories first (priority)
    for (const keyword of categories['사랑']) {
        if (text.includes(keyword)) return '사랑';
    }

    for (const keyword of categories['일/성장']) {
        if (text.includes(keyword)) return '일/성장';
    }

    for (const keyword of categories['사회']) {
        if (text.includes(keyword)) return '사회';
    }

    for (const keyword of categories['감성']) {
        if (text.includes(keyword)) return '감성';
    }

    return '인생';
}

const updatedPhrases = phrases.map(phrase => {
    // If category already exists manually, keep it (though currently none exist)
    if (phrase.category) return phrase;

    return {
        ...phrase,
        category: determineCategory(phrase)
    };
});

fs.writeFileSync(phrasesPath, JSON.stringify(updatedPhrases, null, 2), 'utf8');
console.log('Successfully updated categories for ' + updatedPhrases.length + ' phrases.');

// Log distribution
const distribution = updatedPhrases.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
}, {});
console.log('Category Distribution:', distribution);
