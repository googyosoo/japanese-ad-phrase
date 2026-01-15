import './globals.css';

export const metadata = {
    title: '日本語広告コピー文句 | Japanese Ad Phrases',
    description: '100개의 아름다운 일본 광고 카피문구와 함께 일본어를 배워보세요.',
    manifest: '/manifest.json',
    themeColor: '#ffffff',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: '日本語문구',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <head>
                <link rel="apple-touch-icon" href="/icons/icon-192.png" />
            </head>
            <body>
                <header className="header">
                    <h1>日本語広告コピー文句</h1>
                    <p>일본 광고의 아름다운 표현 100선</p>
                </header>
                {children}
            </body>
        </html>
    );
}
