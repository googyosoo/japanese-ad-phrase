'use client';

import { useState, useEffect } from 'react';
import PhraseCard from '@/src/components/PhraseCard';
import CategoryTabs from '@/src/components/CategoryTabs';
import SearchBar from '@/src/components/SearchBar';
import BadgeList from '@/src/components/BadgeList';
import phrases from '@/data/phrases.json';
import { XMarkIcon, FireIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const categories = ['전체', '인생', '사랑', '일/성장', '사회', '감성'];

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [searchCategory, setSearchCategory] = useState('전체');
    const [favorites, setFavorites] = useState({});
    const [activeTab, setActiveTab] = useState('all');
    const [dailyQuote, setDailyQuote] = useState(null);

    // Gamification State
    const [streak, setStreak] = useState(0);
    const [badges, setBadges] = useState([]);

    useEffect(() => {
        // 1. Load Favorites
        const loadFavorites = () => {
            const stored = JSON.parse(localStorage.getItem('favorites') || '{}');
            setFavorites(stored);
        };
        loadFavorites();

        window.addEventListener('storage', loadFavorites);
        const handleLocalUpdate = () => loadFavorites();
        window.addEventListener('favoritesUpdated', handleLocalUpdate);

        // 2. Check Daily Quote
        const checkDailyQuote = () => {
            const lastDate = localStorage.getItem('lastDailyQuoteDate');
            const today = new Date().toDateString();

            if (lastDate !== today) {
                const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
                setDailyQuote(randomPhrase);
                localStorage.setItem('lastDailyQuoteDate', today);
            }
        };
        checkDailyQuote();

        // 3. Check Streak & Badges
        checkGamification();

        return () => {
            window.removeEventListener('storage', loadFavorites);
            window.removeEventListener('favoritesUpdated', handleLocalUpdate);
        };
    }, []);

    const checkGamification = () => {
        const today = new Date().toDateString();
        const lastVisit = localStorage.getItem('lastVisitDate');
        let currentStreak = parseInt(localStorage.getItem('currentStreak') || '0', 10);

        if (lastVisit !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (lastVisit === yesterday.toDateString()) {
                currentStreak += 1;
            } else {
                currentStreak = 1; // Reset or Start new
            }

            localStorage.setItem('lastVisitDate', today);
            localStorage.setItem('currentStreak', currentStreak.toString());

            // Celebration for streak
            if (currentStreak > 1) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }
        setStreak(currentStreak);

        // Simple Badges logic
        const newBadges = [];
        if (currentStreak >= 1) newBadges.push({ name: '시작이 반', icon: '🌱', description: '첫 발걸음을 뗐습니다!' });
        if (currentStreak >= 3) newBadges.push({ name: '작심삼일 탈출', icon: '🔥', description: '3일 연속 방문 달성!' });
        if (currentStreak >= 7) newBadges.push({ name: '일본어 습관', icon: '🏆', description: '일주일 연속 방문!' });

        // Check local storage for quiz score badge (mock logic for now if we don't store quiz history globally yet)
        setBadges(newBadges);
    };

    useEffect(() => {
        if (activeTab === 'favorites') {
            const stored = JSON.parse(localStorage.getItem('favorites') || '{}');
            setFavorites(stored);
        }
    }, [activeTab]);

    const filteredPhrases = phrases.filter(phrase => {
        if (activeTab === 'favorites') {
            if (!favorites[phrase.id]) return false;
        } else if (activeTab !== 'all') {
            if (phrase.category !== activeTab) return false;
        }

        if (searchCategory !== '전체' && phrase.category !== searchCategory) {
            return false;
        }

        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            return (
                phrase.japanese.includes(searchTerm) ||
                phrase.korean.includes(searchTerm) ||
                phrase.english.toLowerCase().includes(searchLower)
            );
        }

        return true;
    });

    return (
        <main className="main-container">
            {/* Header / Gamification Status */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem', gap: '15px' }}>
                <div className="streak-badge" style={{
                    background: 'var(--bg-glass)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: '1px solid var(--border-glass)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-accent)',
                    fontWeight: 'bold'
                }}>
                    <FireIcon style={{ width: '20px', height: '20px' }} />
                    <span>{streak}일 연속 학습 중!</span>
                </div>
            </div>

            <BadgeList badges={badges} />

            <CategoryTabs
                categories={categories}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            <SearchBar
                categories={categories}
                searchCategory={searchCategory}
                onCategoryChange={setSearchCategory}
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
            />

            <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-sub)' }}>
                {activeTab === 'favorites' ? '내가 저장한 문구' : (activeTab === 'all' ? '전체 문구' : activeTab)}
                : {filteredPhrases.length}개
            </p>

            <AnimatePresence mode="popLayout">
                {activeTab === 'favorites' && filteredPhrases.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' }}
                    >
                        <p>아직 즐겨찾기한 문구가 없습니다.</p>
                        <p>마음에 들어요(별표)를 눌러 저장해보세요!</p>
                    </motion.div>
                )}

                <motion.div
                    layout
                    className="phrase-grid"
                >
                    <AnimatePresence>
                        {filteredPhrases.map((phrase) => (
                            <motion.div
                                layout
                                key={phrase.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <PhraseCard phrase={phrase} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>

            {dailyQuote && (
                <div className="modal-overlay" onClick={() => setDailyQuote(null)}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="daily-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header">
                            <h2>✨ 오늘의 영감</h2>
                            <button onClick={() => setDailyQuote(null)} className="close-btn">
                                <XMarkIcon style={{ width: '24px', height: '24px' }} />
                            </button>
                        </div>
                        <div className="modal-content">
                            <PhraseCard phrase={dailyQuote} />
                        </div>
                    </motion.div>
                </div>
            )}

            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    backdrop-filter: blur(8px);
                }
                .daily-modal {
                    background: #1e293b; 
                    /* Slightly opaque solid for modal to prevent too much bleed from background */
                    padding: 2rem;
                    border-radius: 20px;
                    max-width: 90%;
                    width: 500px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                    border: 1px solid var(--border-glass);
                }
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }
                .modal-header h2 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: var(--color-primary);
                }
                .close-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--color-text-sub);
                    padding: 4px;
                }
                .close-btn:hover {
                    color: white;
                }
            `}</style>
        </main>
    );
}
