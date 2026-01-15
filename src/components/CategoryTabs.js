'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function CategoryTabs({ categories, activeTab, onTabChange }) {
    return (
        <div className="category-tabs" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '2rem',
            flexWrap: 'wrap'
        }}>
            <button
                className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => onTabChange('all')}
            >
                전체
            </button>
            {categories.slice(1).map(cat => (
                <button
                    key={cat}
                    className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
                    onClick={() => onTabChange(cat)}
                >
                    {cat}
                </button>
            ))}
            <button
                className={`tab-btn favorites ${activeTab === 'favorites' ? 'active' : ''}`}
                onClick={() => onTabChange('favorites')}
                style={{
                    color: activeTab === 'favorites' ? '#1e293b' : '#f59e0b',
                    borderColor: '#f59e0b',
                    background: activeTab === 'favorites' ? '#f59e0b' : 'rgba(245, 158, 11, 0.1)'
                }}
            >
                <StarIcon style={{ width: '16px', height: '16px', marginRight: '4px' }} />
                즐겨찾기
            </button>
            <Link href="/quiz" className="tab-btn quiz-link" style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                color: '#ef4444',
                borderColor: '#ef4444',
                background: 'rgba(239, 68, 68, 0.1)'
            }}>
                🎮 퀴즈 모드
            </Link>

            <style jsx>{`
                .tab-btn {
                    padding: 8px 16px;
                    border-radius: 20px;
                    border: 1px solid var(--border-glass);
                    background: rgba(255, 255, 255, 0.05);
                    cursor: pointer;
                    font-family: var(--font-sans, sans-serif);
                    font-size: 0.95rem;
                    transition: all 0.2s ease;
                    color: var(--color-text-sub);
                    display: flex;
                    align-items: center;
                }
                .tab-btn:hover {
                    transform: translateY(-2px);
                    background: rgba(255, 255, 255, 0.1);
                }
                .tab-btn.active {
                    background: var(--color-primary);
                    color: white;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
                }
                .tab-btn.favorites.active {
                    background: #f59e0b !important;
                    color: #0f172a !important;
                    box-shadow: 0 0 10px rgba(245, 158, 11, 0.4);
                }
                .tab-btn.quiz-link:hover {
                     background: rgba(239, 68, 68, 0.2) !important;
                }
            `}</style>
        </div>
    );
}
