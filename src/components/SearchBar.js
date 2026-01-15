'use client';

export default function SearchBar({ categories, searchCategory, onCategoryChange, searchTerm, onSearchTermChange }) {
    return (
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
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                borderRadius: '16px',
                padding: '4px 16px',
                width: '100%',
                maxWidth: '500px'
            }}>
                <select
                    value={searchCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    style={{
                        border: 'none',
                        background: 'transparent',
                        padding: '8px',
                        fontSize: '1rem',
                        fontFamily: 'var(--font-serif, serif)',
                        color: 'var(--color-text-sub)',
                        outline: 'none',
                        cursor: 'pointer',
                        minWidth: '80px'
                    }}
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat} style={{ background: '#1e293b' }}>{cat}</option>
                    ))}
                </select>

                <div style={{ width: '1px', height: '24px', background: 'var(--border-glass)', margin: '0 8px' }}></div>

                <input
                    type="text"
                    placeholder="문구 검색..."
                    value={searchTerm}
                    onChange={(e) => onSearchTermChange(e.target.value)}
                    style={{
                        flex: 1,
                        padding: '12px 0',
                        fontSize: '1rem',
                        border: 'none',
                        background: 'transparent',
                        outline: 'none',
                        fontFamily: 'var(--font-serif, serif)',
                        color: 'var(--color-text-main)'
                    }}
                />
            </div>
        </div>
    );
}
