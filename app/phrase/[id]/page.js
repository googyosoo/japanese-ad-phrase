'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid';
import phrases from '@/data/phrases.json';

// Themed keywords for Unsplash images
const imageThemes = {
    1: 'life-journey-path', 2: 'teacher-student', 3: 'destiny-hands', 4: 'memories-bubbles',
    5: 'joy-dancing', 6: 'mirror-reflection', 7: 'cheers-toast', 8: 'running-sunset',
    9: 'earth-space', 10: 'window-light', 11: 'crossroads-choice', 12: 'rain-umbrella',
    13: 'train-journey', 14: 'floating-memories', 15: 'celebration-confetti', 16: 'honest-self',
    17: 'hands-connection', 18: 'mountain-view', 19: 'cherry-blossom', 20: 'butterfly-transformation',
    21: 'identity-card', 22: 'unique-path', 23: 'adventure-life', 24: 'forgiveness-future',
    25: 'wandering-lost', 26: 'change-evolution', 27: 'restaurant-friends', 28: 'adult-journey',
    29: 'being-myself', 30: 'veteran-spirit', 31: 'earth-beautiful', 32: 'tasty-life',
    33: 'happy-life', 34: 'everyday-clothes', 35: 'exploration-detour', 36: 'letter-writing',
    37: 'coincidence-meeting', 38: 'window-sunlight', 39: 'beauty-diversity', 40: 'skin-care',
    41: 'hardworking-rest', 42: 'working-hands', 43: 'adult-happiness', 44: 'free-heart',
    45: 'being-me', 46: 'spring-faces', 47: 'summer-growth', 48: 'summer-love',
    49: 'friendship-strangers', 50: 'mother-child', 51: 'money-love', 52: 'praise-kindness',
    53: 'friendship-joy', 54: 'light-person', 55: 'trust-advice', 56: 'precious-friend',
    57: 'marriage-miracle', 58: 'love-together', 59: 'distance-love', 60: 'birth-celebration',
    61: 'baby-name', 62: 'dining-together', 63: 'rice-happiness', 64: 'memories-places',
    65: 'living-others', 66: 'beautiful-moment', 67: 'fall-in-love', 68: 'encouragement-words',
    69: 'new-era-youth', 70: 'determination-strength', 71: 'human-creativity', 72: 'break-rules',
    73: 'beauty-education', 74: 'no-borders', 75: 'pencil-dreams', 76: 'potential-power',
    77: 'break-limits', 78: 'wings-fly', 79: 'cannot-hint', 80: 'impossible-nothing',
    81: 'curiosity-drive', 82: 'live-now', 83: 'blue-running', 84: 'airplane-dreams',
    85: 'together-future', 86: 'fighting-life', 87: 'dream-finding', 88: 'first-job',
    89: 'never-give-up', 90: 'nervousness-proof', 91: 'exam-season', 92: 'cheer-yourself',
    93: 'next-me', 94: 'make-path', 95: 'future-voice', 96: 'curiosity-future',
    97: 'challenge-power', 98: 'choose-life', 99: 'hard-day', 100: 'summer-practice'
};

export default function PhrasePage({ params }) {
    const phrase = phrases.find(p => p.id === parseInt(params.id));
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [imgError, setImgError] = useState(false);

    if (!phrase) {
        return <div>문구를 찾을 수 없습니다.</div>;
    }

    useEffect(() => {
        window.speechSynthesis.getVoices();
    }, []);

    const speak = () => {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(phrase.japanese);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85;
        utterance.pitch = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const japaneseVoice = voices.find(voice =>
            voice.lang.includes('ja') || voice.lang.includes('JP')
        );
        if (japaneseVoice) {
            utterance.voice = japaneseVoice;
        }

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
    };

    const getBackupImage = () => {
        // Picsum Photos with seed for consistency
        return `https://picsum.photos/seed/${phrase.id}/800/600`;
    };

    return (
        <div className="detail-container">
            <Link href="/" className="back-button">
                ← 목록으로 돌아가기
            </Link>

            <div className="detail-card">
                <div className="detail-image">
                    {!imgError ? (
                        <img
                            src={`/images/phrase-${phrase.id}.webp`}
                            alt={`Phrase ${phrase.id}`}
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <img
                            src={getBackupImage()}
                            alt={`Phrase ${phrase.id}`}
                            style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
                        />
                    )}
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="card-number" style={{ position: 'static' }}>
                            {phrase.id}
                        </span>
                        <h1 style={{
                            fontSize: '1.8rem',
                            color: 'var(--color-gray-900)',
                            fontWeight: '700'
                        }}>
                            광고 문구 #{phrase.id}
                        </h1>
                    </div>

                    <button
                        className={`tts-btn ${isSpeaking ? 'speaking' : ''}`}
                        onClick={speak}
                        title="듣기"
                        style={{ width: '48px', height: '48px' }}
                    >
                        <SpeakerWaveIcon style={{ width: '24px', height: '24px' }} />
                    </button>
                </div>

                <div className="detail-japanese">
                    {phrase.japanese}
                </div>

                <div className="detail-translations">
                    <div className="translation-section">
                        <div className="translation-label">🇰🇷 한국어 번역</div>
                        <div className="translation-content">{phrase.korean}</div>
                    </div>

                    <div className="translation-section">
                        <div className="translation-label">🇺🇸 English Translation</div>
                        <div className="translation-content">{phrase.english}</div>
                    </div>
                </div>

                <div className="word-explanations">
                    <h2>📚 단어 및 표현 설명</h2>
                    <div className="word-list">
                        {phrase.words.map((word, index) => (
                            <div key={index} className="word-item">
                                <div className="word-japanese">{word.word}</div>
                                <div className="word-reading">読み方: {word.reading}</div>
                                <div className="word-meaning">{word.meaning}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{
                    marginTop: '32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '16px'
                }}>
                    {phrase.id > 1 && (
                        <Link
                            href={`/phrase/${phrase.id - 1}`}
                            style={{
                                padding: '12px 24px',
                                background: 'var(--bg-neumorphism)',
                                borderRadius: '12px',
                                boxShadow: '4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)',
                                color: 'var(--color-primary)',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}
                        >
                            ← 이전
                        </Link>
                    )}
                    <div style={{ flex: 1 }}></div>
                    {phrase.id < phrases.length && (
                        <Link
                            href={`/phrase/${phrase.id + 1}`}
                            style={{
                                padding: '12px 24px',
                                background: 'var(--bg-neumorphism)',
                                borderRadius: '12px',
                                boxShadow: '4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)',
                                color: 'var(--color-primary)',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}
                        >
                            다음 →
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
