'use client';

import { useState, useEffect } from 'react';
import PhraseCard from '@/src/components/PhraseCard';
import phrases from '@/data/phrases.json';
import { StarIcon } from '@heroicons/react/24/solid';

const categories = ['전체', '인생', '사랑', '일/성장', '사회', '감성'];

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('전체'); // '전체', 'Life', 'Love', etc. or 'Favorites'
    const [searchCategory, setSearchCategory] = useState('전체'); // Dropdown in search bar
    const [favorites, setFavorites] = useState({});
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'favorites', or specific category

    useEffect(() => {
        // Load favorites for initial filtering checks
        const loadFavorites = () => {
            const stored = JSON.parse(localStorage.getItem('favorites') || '{}');
            setFavorites(stored);
        };
        loadFavorites();

        // Listen for storage changes to update favorites view in real-time
        window.addEventListener('storage', loadFavorites);
        // Custom event listener for updates within the same window
        const handleLocalUpdate = () => loadFavorites();
        window.addEventListener('favoritesUpdated', handleLocalUpdate);

        return () => {
            window.removeEventListener('storage', loadFavorites);
            window.removeEventListener('favoritesUpdated', handleLocalUpdate);
        };
    }, []);

    useEffect(() => {
        if (activeTab === 'favorites') {
            const stored = JSON.parse(localStorage.getItem('favorites') || '{}');
            setFavorites(stored);
        }
    }, [activeTab]);

    const filteredPhrases = phrases.filter(phrase => {
        // 1. Filter by Tab (Category or Favorites)
        if (activeTab === 'favorites') {
            if (!favorites[phrase.id]) return false;
        } else if (activeTab !== 'all') {
            if (phrase.category !== activeTab) return false;
        }

        // 2. Filter by Search Box (Category Dropdown + Text)
        // If searchCategory is '전체', ignore it. Otherwise must match
        if (searchCategory !== '전체' && phrase.category !== searchCategory) {
            return false;
        }

        // 3. Filter by Search Text
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
            {/* Category Tabs */}
            <div className="category-tabs" style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '2rem',
                flexWrap: 'wrap'
            }}>
                <button
                    className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    전체
                </button>
                {categories.slice(1).map(cat => (
                    <button
                        key={cat}
                        className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
                        onClick={() => setActiveTab(cat)}
                    >
                        {cat}
                    </button>
                ))}
                <button
                    className={`tab-btn favorites ${activeTab === 'favorites' ? 'active' : ''}`}
                    onClick={() => setActiveTab('favorites')}
                    style={{ color: activeTab === 'favorites' ? '#fff' : '#FFD700', borderColor: '#FFD700', background: activeTab === 'favorites' ? '#FFD700' : 'transparent' }}
                >
                    <StarIcon style={{ width: '16px', height: '16px', marginRight: '4px' }} />
                    즐겨찾기
                </button>
            </div>

            {/* Search Section */}
            <div className="search-section" style={{
                marginBottom: '2rem',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                gap: '10px'
            }}>
                <div className="search-container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'var(--bg-neumorphism)',
                    borderRadius: '16px',
                    padding: '4px 16px',
                    boxShadow: 'inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light)',
                    width: '100%',
                    maxWidth: '500px'
                }}>
                    <select
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            padding: '8px',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-serif)',
                            color: '#555',
                            outline: 'none',
                            cursor: 'pointer',
                            minWidth: '80px'
                        }}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    <div style={{ width: '1px', height: '24px', background: '#ccc', margin: '0 8px' }}></div>

                    <input
                        type="text"
                        placeholder="문구 검색..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            flex: 1,
                            padding: '12px 0',
                            fontSize: '1rem',
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            fontFamily: 'var(--font-serif)'
                        }}
                    />
                </div>
            </div>

            <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-gray-800)' }}>
                {activeTab === 'favorites' ? '내가 저장한 문구' : (activeTab === 'all' ? '전체 문구' : activeTab)}
                : {filteredPhrases.length}개
            </p>

            {activeTab === 'favorites' && filteredPhrases.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>
                    <p>아직 즐겨찾기한 문구가 없습니다.</p>
                    <p>마음에 들어요(별표)를 눌러 저장해보세요!</p>
                </div>
            )}

            <div className="phrase-grid">
                {filteredPhrases.map((phrase) => (
                    <PhraseCard key={phrase.id} phrase={phrase} />
                ))}
            </div>

            <style jsx>{`
                .tab-btn {
                    padding: 8px 16px;
                    border-radius: 20px;
                    border: 1px solid transparent;
                    background: var(--bg-neumorphism);
                    box-shadow: 5px 5px 10px var(--shadow-dark), -5px -5px 10px var(--shadow-light);
                    cursor: pointer;
                    font-family: var(--font-sans);
                    font-size: 0.95rem;
                    transition: all 0.2s ease;
                    color: var(--color-gray-800);
                }
                .tab-btn:hover {
                    transform: translateY(-2px);
                }
                .tab-btn.active {
                    background: var(--color-gray-800);
                    color: white;
                    box-shadow: inset 3px 3px 6px rgba(0,0,0,0.3);
                }
                .tab-btn.favorites.active {
                    background: #FFD700;
                    color: white;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                }
            `}</style>
        </main>
    );
}
