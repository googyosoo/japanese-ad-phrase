'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SpeakerWaveIcon, StarIcon as StarIconSolid, StopIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';

const imageThemes = {}; // Themes are managed on the parent or not needed here directly for now

function PhraseCard({ phrase }) {
    const [showTranslation, setShowTranslation] = useState(null);
    const [imgError, setImgError] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [showMemo, setShowMemo] = useState(false);
    const [memo, setMemo] = useState('');

    // Audio ref
    const audioRef = useRef(null);

    useEffect(() => {
        // Load favorites from localStorage
        const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
        if (favorites[phrase.id]) {
            setIsFavorite(true);
            setMemo(favorites[phrase.id].memo || '');
        }

        // Initialize Audio object
        audioRef.current = new Audio(`/audio/${phrase.id}.mp3`);
        audioRef.current.onended = () => setIsSpeaking(false);
        audioRef.current.onerror = () => {
            console.error(`Audio file not found for phrase ${phrase.id}`);
            setIsSpeaking(false);
        };

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [phrase.id]);

    const toggleFavorite = (e) => {
        e.stopPropagation();
        const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');

        if (isFavorite) {
            delete favorites[phrase.id];
            setIsFavorite(false);
            setShowMemo(false);
        } else {
            favorites[phrase.id] = {
                id: phrase.id,
                japanese: phrase.japanese,
                memo: memo,
                timestamp: Date.now()
            };
            setIsFavorite(true);
            setShowMemo(true);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    const saveMemo = (e) => {
        const newMemo = e.target.value;
        setMemo(newMemo);
        const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
        if (favorites[phrase.id]) {
            favorites[phrase.id].memo = newMemo;
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    };

    const speak = (e) => {
        e.stopPropagation();

        if (isSpeaking) {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
            setIsSpeaking(false);
        } else {
            if (audioRef.current) {
                audioRef.current.play().catch(e => {
                    console.error("Audio play failed", e);
                    setIsSpeaking(false);
                });
                setIsSpeaking(true);
            }
        }
    };

    const getImageSrc = () => {
        if (imgError) return null;
        return `/images/phrase-${phrase.id}.webp`;
    };

    const getBackupImage = () => {
        return `https://picsum.photos/seed/${phrase.id}/400/300`;
    };

    return (
        <div className="phrase-card flip-card">
            <div className="flip-card-inner">
                <div className="card-header" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px 0 12px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10
                }}>
                    <div className="badge" style={{
                        fontSize: '0.8rem',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(4px)',
                        color: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        #{phrase.id} {phrase.category}
                    </div>
                    <button onClick={toggleFavorite} className="favorite-btn" style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: isFavorite ? '#FFD700' : '#94a3b8',
                        padding: '4px'
                    }}>
                        {isFavorite ? (
                            <StarIconSolid style={{ width: '24px', height: '24px' }} />
                        ) : (
                            <StarIconOutline style={{ width: '24px', height: '24px' }} />
                        )}
                    </button>
                </div>

                <Link href={`/phrase/${phrase.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="card-image-container">
                        {!imgError ? (
                            <img
                                src={getImageSrc()}
                                alt={`Phrase ${phrase.id}`}
                                className="card-image"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <img
                                src={getBackupImage()}
                                alt={`Phrase ${phrase.id}`}
                                className="card-image"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        )}
                    </div>
                </Link>

                <p className="japanese-text" style={{ marginTop: '0.5rem' }}>{phrase.japanese}</p>

                <div className="action-row">
                    <div className="translation-buttons">
                        <button
                            className={`translation-btn ko ${showTranslation === 'ko' ? 'active' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowTranslation(showTranslation === 'ko' ? null : 'ko');
                            }}
                            title="한국어 번역"
                            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '36px', height: '36px' }}
                        >
                            한
                        </button>
                        <button
                            className={`translation-btn en ${showTranslation === 'en' ? 'active' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowTranslation(showTranslation === 'en' ? null : 'en');
                            }}
                            title="English Translation"
                            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '36px', height: '36px' }}
                        >
                            영
                        </button>
                    </div>

                    <button
                        className={`tts-btn ${isSpeaking ? 'playing' : ''}`}
                        onClick={speak}
                        title="듣기"
                    >
                        {isSpeaking ? (
                            <StopIcon style={{ width: '20px', height: '20px' }} />
                        ) : (
                            <SpeakerWaveIcon style={{ width: '20px', height: '20px' }} />
                        )}
                    </button>
                </div>

                {showTranslation === 'ko' && (
                    <div className="translation-text fade-in">
                        {phrase.korean}
                    </div>
                )}

                {showTranslation === 'en' && (
                    <div className="translation-text fade-in">
                        {phrase.english}
                    </div>
                )}

                {isFavorite && showMemo && (
                    <div className="memo-container fade-in" style={{ marginTop: '12px', width: '100%' }}>
                        <textarea
                            value={memo}
                            onChange={saveMemo}
                            placeholder="이 문구에 대한 생각을 적어보세요..."
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '8px',
                                border: '1px solid var(--border-glass)',
                                background: 'rgba(0,0,0,0.3)',
                                color: 'var(--color-text-main)',
                                fontSize: '0.9rem',
                                resize: 'vertical',
                                minHeight: '60px',
                                fontFamily: 'var(--font-sans)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}

                <Link href={`/phrase/${phrase.id}`} className="view-detail">
                    단어 설명 보기 →
                </Link>
            </div>
        </div>
    );
}

export default PhraseCard;
