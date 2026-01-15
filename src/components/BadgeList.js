'use client';

import { motion } from 'framer-motion';

export default function BadgeList({ badges }) {
    if (!badges || badges.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-container"
            style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '1rem',
                padding: '10px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                border: '1px solid var(--border-glass)'
            }}
        >
            {badges.map((badge, idx) => (
                <div key={idx} className="badge-item" title={badge.description} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 8px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-glass)',
                    fontSize: '0.8rem',
                    color: 'var(--color-text-sub)'
                }}>
                    <span style={{ fontSize: '1.2rem' }}>{badge.icon}</span>
                    <span>{badge.name}</span>
                </div>
            ))}
        </motion.div>
    );
}
