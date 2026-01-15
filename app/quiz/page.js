'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import phrases from '@/data/phrases.json';
import { HomeIcon, ArrowPathIcon, SparklesIcon } from '@heroicons/react/24/solid';

const TOTAL_QUESTIONS = 3;

export default function QuizPage() {
    const [gameStatus, setGameStatus] = useState('loading'); // loading, playing, finished
    const [questions, setQuestions] = useState([]);
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        startNewGame();
    }, []);

    const startNewGame = () => {
        const newQuestions = generateQuestions(TOTAL_QUESTIONS);
        setQuestions(newQuestions);
        setCurrentQIndex(0);
        setScore(0);
        setSelectedOption(null);
        setShowResult(false);
        setGameStatus('playing');
    };

    const generateQuestions = (count) => {
        const generated = [];
        const usedPhraseIds = new Set();

        for (let i = 0; i < count; i++) {
            // Try to pick a unique phrase
            let phrase;
            let attempts = 0;
            do {
                const idx = Math.floor(Math.random() * phrases.length);
                phrase = phrases[idx];
                attempts++;
            } while (usedPhraseIds.has(phrase.id) && attempts < 10);

            usedPhraseIds.add(phrase.id);

            // Randomly choose type: 0 = Cloze (Blank), 1 = Meaning (Translation)
            const type = Math.random() < 0.5 ? 'cloze' : 'meaning';

            if (type === 'cloze') {
                generated.push(createClozeQuestion(phrase));
            } else {
                generated.push(createMeaningQuestion(phrase));
            }
        }
        return generated;
    };

    const createClozeQuestion = (phrase) => {
        // Pick a target word from the phrase's word list that actually exists in the Japanese text
        const validWords = phrase.words.filter(w => phrase.japanese.includes(w.word));

        if (validWords.length === 0) {
            // Fallback to meaning question if no valid words found
            return createMeaningQuestion(phrase);
        }

        const targetWord = validWords[Math.floor(Math.random() * validWords.length)];
        const questionText = phrase.japanese.replace(targetWord.word, ' (   ) ');

        // Generate distractors (other Japanese words)
        const distractors = [];
        while (distractors.length < 3) {
            const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            if (randomPhrase.words && randomPhrase.words.length > 0) {
                const randomWord = randomPhrase.words[Math.floor(Math.random() * randomPhrase.words.length)];
                if (randomWord.word !== targetWord.word && !distractors.includes(randomWord.word)) {
                    distractors.push(randomWord.word);
                }
            }
        }

        const options = shuffle([targetWord.word, ...distractors]);

        return {
            type: 'cloze',
            questionText: questionText,
            hint: phrase.korean,
            correctAnswer: targetWord.word,
            options: options,
            originalPhrase: phrase
        };
    };

    const createMeaningQuestion = (phrase) => {
        // Pick a target word
        const validWords = phrase.words;
        if (!validWords || validWords.length === 0) {
            // Should not happen with good data, but safety check
            return createClozeQuestion(phrases[0]);
        }

        const targetWord = validWords[Math.floor(Math.random() * validWords.length)];

        // Generate distractors (other meanings)
        const distractors = [];
        while (distractors.length < 3) {
            const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            if (randomPhrase.words && randomPhrase.words.length > 0) {
                const randomWord = randomPhrase.words[Math.floor(Math.random() * randomPhrase.words.length)];
                if (randomWord.meaning !== targetWord.meaning && !distractors.includes(randomWord.meaning)) {
                    distractors.push(randomWord.meaning);
                }
            }
        }

        const options = shuffle([targetWord.meaning, ...distractors]);

        return {
            type: 'meaning',
            questionText: targetWord.word,
            hint: `다음 단어의 뜻은? (문맥: ${phrase.japanese.substring(0, 20)}...)`,
            correctAnswer: targetWord.meaning,
            options: options,
            originalPhrase: phrase
        };
    };

    const shuffle = (array) => {
        const newArr = [...array];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    };

    const handleOptionClick = (option) => {
        if (showResult) return;

        const currentQ = questions[currentQIndex];
        const isCorrect = option === currentQ.correctAnswer;

        setSelectedOption(isCorrect ? 'correct' : option); // Store clicked option text if wrong
        if (isCorrect) setScore(prev => prev + 1);

        setShowResult(true);
    };

    const nextStep = () => {
        if (currentQIndex < questions.length - 1) {
            setCurrentQIndex(prev => prev + 1);
            setSelectedOption(null);
            setShowResult(false);
        } else {
            setGameStatus('finished');
        }
    };

    if (gameStatus === 'loading') return <div className="loading" style={{ color: 'white' }}>로딩 중...</div>;

    if (gameStatus === 'finished') {
        return (
            <main className="quiz-container finished">
                <div className="result-card">
                    <SparklesIcon className="result-icon" />
                    <h1>퀴즈 완료!</h1>
                    <p className="final-score">총 {score} / {TOTAL_QUESTIONS} 개 맞추셨습니다!</p>
                    <div className="action-buttons">
                        <button className="restart-btn" onClick={startNewGame}>
                            <ArrowPathIcon style={{ width: '20px' }} /> 다시 도전
                        </button>
                        <Link href="/" className="home-btn-large">
                            🏠 홈으로
                        </Link>
                    </div>
                </div>
                <style jsx>{`
                    .quiz-container { padding: 2rem; max-width: 600px; margin: 0 auto; text-align: center; }
                    .result-card { 
                        background: var(--bg-glass); 
                        padding: 3rem; 
                        border-radius: 20px; 
                        border: 1px solid var(--border-glass);
                        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                        color: white; 
                    }
                    .result-icon { width: 64px; height: 64px; color: #f59e0b; margin-bottom: 1rem; }
                    .final-score { font-size: 1.5rem; margin: 1rem 0 2rem; color: var(--color-text-sub); }
                    .action-buttons { display: flex; gap: 1rem; justify-content: center; }
                    .restart-btn, .home-btn-large {
                        padding: 12px 24px; border-radius: 12px; border: none; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px; text-decoration: none;
                    }
                    .restart-btn { background: var(--color-primary); color: white; }
                    .home-btn-large { background: rgba(255,255,255,0.1); color: white; }
                    .home-btn-large:hover { background: rgba(255,255,255,0.2); }
                 `}</style>
            </main>
        )
    }

    const currentQ = questions[currentQIndex];

    return (
        <main className="quiz-container">
            <header className="quiz-header">
                <Link href="/" className="home-btn">
                    <HomeIcon style={{ width: '24px', height: '24px' }} />
                </Link>
                <div className="progress-bar">
                    <div className="friends" style={{ width: `${((currentQIndex + 1) / TOTAL_QUESTIONS) * 100}%` }}></div>
                </div>
                <div className="score-board">
                    {currentQIndex + 1} / {TOTAL_QUESTIONS}
                </div>
            </header>

            <div className="question-card">
                <div className="question-type-badge">
                    {currentQ.type === 'cloze' ? '🧩 빈칸 채우기' : '🌏 단어 뜻 맞추기'}
                </div>

                <h2 className="question-text">
                    {currentQ.questionText}
                </h2>

                {currentQ.hint && (
                    <div className="question-hint">
                        💡 {currentQ.hint}
                    </div>
                )}
            </div>

            <div className="options-grid">
                {currentQ.options.map((option, idx) => {
                    let btnClass = 'option-btn';
                    if (showResult) {
                        if (option === currentQ.correctAnswer) btnClass += ' correct';
                        else if (selectedOption === option) btnClass += ' wrong';
                        else btnClass += ' disabled';
                    }

                    return (
                        <button
                            key={idx}
                            className={btnClass}
                            onClick={() => handleOptionClick(option)}
                            disabled={showResult}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>

            {showResult && (
                <div className="result-area fade-in">
                    <button className="next-btn" onClick={nextStep}>
                        {currentQIndex < TOTAL_QUESTIONS - 1 ? '다음 문제 →' : '결과 보기 →'}
                    </button>
                    {currentQ.type === 'cloze' && (
                        <p className="explanation">정답: {currentQ.correctAnswer}</p>
                    )}
                </div>
            )}

            <style jsx>{`
                .quiz-container {
                    padding: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                    font-family: var(--font-sans);
                }
                .quiz-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    gap: 1rem;
                }
                .progress-bar {
                    flex: 1;
                    height: 8px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 4px;
                    overflow: hidden;
                }
                .friends {
                    height: 100%;
                    background: var(--color-primary);
                    transition: width 0.3s ease;
                }
                .home-btn { color: var(--color-text-muted); }
                .home-btn:hover { color: white; }
                .score-board { font-weight: bold; color: var(--color-text-sub); }
                
                .question-card {
                    background: var(--bg-glass);
                    padding: 2rem;
                    border-radius: 20px;
                    border: 1px solid var(--border-glass);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    text-align: center;
                    margin-bottom: 2rem;
                    position: relative;
                }
                .question-type-badge {
                    display: inline-block;
                    background: rgba(59, 130, 246, 0.2);
                    color: #60a5fa;
                    padding: 4px 12px;
                    border-radius: 12px;
                    font-size: 0.8rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }
                .question-text {
                    font-size: 1.4rem;
                    color: var(--color-text-main);
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                    word-break: keep-all;
                }
                .question-hint {
                    background: rgba(255,255,255,0.05);
                    padding: 1rem;
                    border-radius: 12px;
                    color: var(--color-text-sub);
                    font-size: 0.95rem;
                }
                
                .options-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                .option-btn {
                    padding: 1.2rem;
                    border: 1px solid var(--border-glass);
                    border-radius: 16px;
                    background: var(--bg-glass);
                    font-size: 1rem;
                    color: var(--color-text-main);
                    cursor: pointer;
                    transition: all 0.2s;
                    text-align: left;
                }
                .option-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(255,255,255,0.2);
                }
                .option-btn.correct { background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; }
                .option-btn.wrong { background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid #ef4444; }
                .option-btn.disabled { opacity: 0.5; cursor: default; }

                .result-area {
                    margin-top: 2rem;
                    text-align: center;
                }
                .next-btn {
                    padding: 12px 32px;
                    background: var(--color-primary);
                    color: white;
                    border: none;
                    border-radius: 30px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
                }
                .explanation {
                    color: var(--color-text-sub);
                    margin-top: 1rem;
                }
                .fade-in { animation: fadeIn 0.3s ease-in; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            `}</style>
        </main>
    );
}
