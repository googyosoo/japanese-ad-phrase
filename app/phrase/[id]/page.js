'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SpeakerWaveIcon, ArrowDownTrayIcon, XMarkIcon, StopIcon } from '@heroicons/react/24/solid';
import phrases from '@/data/phrases.json';
import html2canvas from 'html2canvas';

// Themed keywords for Unsplash images (omitted for brevity as they are unchanged)
// We can actually just rely on the same ID-based logic if we have pre-generated images

export default function PhrasePage({ params }) {
    const phrase = phrases.find(p => p.id === parseInt(params.id));
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [imgError, setImgError] = useState(false);
    const audioRef = useRef(null);

    // Initialize Audio
    useEffect(() => {
        if (phrase) {
            audioRef.current = new Audio(`/audio/${phrase.id}.mp3`);
            audioRef.current.onended = () => setIsSpeaking(false);
            audioRef.current.onerror = () => {
                console.error(`Audio file not found for phrase ${phrase.id}`);
                setIsSpeaking(false);
            };
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [phrase]);

    if (!phrase) {
        return <div>문구를 찾을 수 없습니다.</div>;
    }

    const cardRef = useRef(null);

    const speak = () => {
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

    const handleDownload = async () => {
        if (cardRef.current) {
            try {
                const canvas = await html2canvas(cardRef.current, {
                    scale: 2,
                    backgroundColor: null,
                    useCORS: true
                });

                const image = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = image;
                link.download = `phrase-${phrase.id}.png`;
                link.click();
            } catch (err) {
                console.error("Image generation failed:", err);
                alert("이미지 저장에 실패했습니다.");
            }
        }
    };

    const getBackupImage = () => {
        return `https://picsum.photos/seed/${phrase.id}/800/600`;
    };

    return (
        <div className="detail-container">
            <Link href="/" className="back-button">
                ← 목록으로 돌아가기
            </Link>

            <div className="detail-card" ref={cardRef}>
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
                            color: 'var(--color-text-main)',
                            fontWeight: '700'
                        }}>
                            광고 문구 #{phrase.id}
                        </h1>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                            onClick={handleDownload}
                            className="action-btn"
                            title="카드 이미지 저장"
                            style={{
                                width: '48px', height: '48px',
                                borderRadius: '50%', border: 'none',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border-glass)',
                                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--color-text-sub)'
                            }}
                        >
                            <ArrowDownTrayIcon style={{ width: '24px', height: '24px' }} />
                        </button>

                        <button
                            className={`tts-btn ${isSpeaking ? 'playing' : ''}`}
                            onClick={speak}
                            title={isSpeaking ? "멈춤" : "듣기"}
                            style={{ width: '48px', height: '48px' }}
                        >
                            {isSpeaking ? (
                                <StopIcon style={{ width: '24px', height: '24px' }} />
                            ) : (
                                <SpeakerWaveIcon style={{ width: '24px', height: '24px' }} />
                            )}
                        </button>
                    </div>
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
                    <h2 style={{ fontSize: '1.4rem', color: 'var(--color-text-main)', marginBottom: '16px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '8px' }}>
                        📚 단어 및 표현 설명
                    </h2>
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
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border-glass)',
                                borderRadius: '12px',
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
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border-glass)',
                                borderRadius: '12px',
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
