import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Emoji Copy & Paste (Free, 2026) – 3000+ Emojis & Symbols',
  description: 'Copy & paste 3000+ emojis with one click. Free 2026 emoji keyboard with arrows, hearts, stars, symbols, and special characters. No app needed.',
  keywords: 'emoji copy and paste, emoji keyboard, copy emoji, emoji list, heart emoji, smiley face emoji, emoji symbols, cute emoji, emoji meanings, funny emoji, emoji for instagram, text emoji, emoji art, new emoji 2026, emoji search',
  metadataBase: new URL('https://emoji-copy-app.vercel.app'),
  openGraph: {
    title: 'Emoji Copy & Paste (Free, 2026) – 3000+ Emojis & Symbols',
    description: 'Copy & paste 3000+ emojis with one click. Free 2026 emoji keyboard with arrows, hearts, stars, symbols, and special characters. No app needed.',
    url: 'https://emoji-copy-app.vercel.app',
    siteName: 'Emoji Copy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emoji Copy',
    description: 'Copy & paste 3000+ emojis with one click. Free 2026 emoji keyboard with arrows, hearts, stars, symbols, and special characters. No app needed.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: { icon: '/favicon.svg' },
  alternates: {
    canonical: 'https://emoji-copy-app.vercel.app',
    languages: {
      'en': 'https://emoji-copy-app.vercel.app',
      'x-default': 'https://emoji-copy-app.vercel.app',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta name="google-site-verification" content="ETO59LUETFhBHTx7GMun0GscvJgzLq2iGWdeAmh3e10" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous" strategy="afterInteractive" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-P04TH8XJJ9');`}
        </Script>
              {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://emoji-copy-app.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "Emoji Copy & Paste", "item": "https://emoji-copy-app.vercel.app"}]})
        }} />
        {/* Organization & WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "name": "Emoji Copy & Paste", "url": "https://emoji-copy-app.vercel.app", "publisher": {"@type": "Organization", "name": "UtiliCalc Tools", "url": "https://utilicalc.vercel.app", "logo": {"@type": "ImageObject", "url": "https://emoji-copy-app.vercel.app/favicon.svg"}}, "potentialAction": {"@type": "SearchAction", "target": "https://emoji-copy-app.vercel.app/?q={search_term_string}", "query-input": "required name=search_term_string"}})
        }} />
        {/* Preconnect & DNS-Prefetch Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Speakable Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", ".keyword-seo-section p"]}})
        }} />
</head>
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-[rgba(255,255,255,0.06)] bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-xl font-bold" style={{ color: 'var(--accent)' }}>
              EmojiCopy
            </a>
            <span className="text-sm text-[var(--text-muted)]">Click to copy!</span>
          </div>
        </header>
        <main className="flex-1 max-w-6xl mx-auto px-4 py-6 w-full">
          {children}
        </main>
        <footer className="border-t border-white/5 py-6 text-center text-sm text-[var(--text-secondary)] bg-black/20 backdrop-blur-sm">
          
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider">Related Free Tools:</span>
                <a href="https://meme-archive-self.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Meme Archive Browser</a>
                <a href="https://timezone-converter-ashy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">World Timezone Converter</a>
                <a href="https://meettime-tawny.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Meeting Time Zone Scheduler</a>
                <a href="https://bmi-calculator-free.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Free BMI Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">
              Terms of Service
            </a>
          </div>
          &copy; 2026 EmojiCopy. All emojis are Unicode standard.
        </footer>
      </body>
    </html>
  )
}
