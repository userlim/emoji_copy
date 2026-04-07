import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emoji Copy & Paste (Free, 2026) – 3000+ Emojis & Symbols',
  description: 'Copy & paste 3000+ emojis with one click. Free 2026 emoji keyboard with arrows, hearts, stars, symbols, and special characters. No app needed.',
  keywords: ['emoji copy paste', 'arrow symbols copy paste', 'emoji keyboard', 'copy emoji', 'text symbols', 'special characters', 'unicode symbols', 'arrow emoji', 'heart emoji'],
  metadataBase: new URL('https://emoji-copy-app.vercel.app'),
  openGraph: {
    title: 'Emoji Copy & Paste (Free, 2026) – 3000+ Emojis & Symbols',
    description: 'Copy & paste 3000+ emojis with one click. Free 2026 emoji keyboard with arrows, hearts, stars, symbols, and special characters. No app needed.',
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
        <meta name="google-site-verification" content="ETO59LUETFhBHTx7GMun0GscvJgzLq2iGWdeAmh3e10" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous"></script>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-P04TH8XJJ9');`}
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
          
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-gray-400 font-semibold">Related Free Tools:</span>
                <a href="https://meme-archive-self.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Meme Archive</a>
                <a href="https://timezone-converter-ashy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Timezone Converter</a>
                <a href="https://meettime-tawny.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">MeetTime</a>
                <a href="https://bmi-calculator-free.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">BMI Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">UtiliCalc</a>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 text-xs">
              Privacy Policy
            </a>
            <a href="/terms" className="text-blue-600 hover:text-blue-800 text-xs">
              Terms of Service
            </a>
          </div>
          &copy; 2026 EmojiCopy. All emojis are Unicode standard.
        </footer>
      </body>
    </html>
  )
}
