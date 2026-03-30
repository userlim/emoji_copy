import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emoji Copy & Paste - Arrows, Symbols & All Emojis - Free',
  description: 'Copy and paste emojis, arrows, symbols and special characters with one click. The most complete free emoji library with arrows, hearts, smileys, hands, and 1000+ more.',
  keywords: ['emoji copy paste', 'arrow symbols copy paste', 'emoji keyboard', 'copy emoji', 'text symbols', 'special characters', 'unicode symbols', 'arrow emoji', 'heart emoji'],
  metadataBase: new URL('https://emoji-copy-app.vercel.app'),
  openGraph: {
    title: 'Emoji Copy & Paste - Arrows, Symbols & All Emojis',
    description: 'One-click copy & paste for 1000+ emojis, arrows, and symbols. Free, fast, no app needed.',
    type: 'website',
    siteName: 'Emoji Copy',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P08T3SZDQH" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-P08T3SZDQH');`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-xl font-bold" style={{ color: 'var(--accent)' }}>
              EmojiCopy
            </a>
            <span className="text-sm text-gray-400">Click to copy!</span>
          </div>
        </header>
        <main className="flex-1 max-w-6xl mx-auto px-4 py-6 w-full">
          {children}
        </main>
        <footer className="border-t border-gray-200 py-4 text-center text-sm text-gray-400">
          &copy; 2026 EmojiCopy. All emojis are Unicode standard.
        </footer>
      </body>
    </html>
  )
}
