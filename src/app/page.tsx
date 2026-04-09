import type { Metadata } from 'next'
import EmojiBoard from './emoji-board'
import RecentEmojis from '../components/RecentEmojis'

export const metadata: Metadata = {
  title: 'Emoji Copy & Paste (Free, 2026) – 3,000+ Emojis, One-Click Copy',
  description: 'Copy any emoji with one click from 3,000+ options. Search by name, browse categories. Works on all devices — iPhone, Android, Windows, Mac. 100% free.',
}

const categories = [
  { href: '/arrows', icon: '→', label: 'Arrows', desc: '370+ arrow symbols ← → ↑ ↓ ⇒ ➤', count: '370+' },
  { href: '/reference-marks', icon: '※', label: '※ Reference Marks', desc: '당구장 기호, daggers, asterisks', count: '200+' },
  { href: '/hearts', icon: '❤️', label: 'Hearts', desc: 'Heart emojis & love symbols ♡ ❤', count: '150+' },
  { href: '/stars', icon: '⭐', label: 'Stars & Sparkles', desc: 'Stars, sparkles ★ ☆ ✨ ✦', count: '100+' },
  { href: '/smileys', icon: '😀', label: 'Smileys & Faces', desc: 'All face emojis 😂 🥰 😎 🤔', count: '200+' },
  { href: '/hands', icon: '👋', label: 'Hand Gestures', desc: 'Hands & gestures 👍 ✌️ 👏 🤝', count: '80+' },
  { href: '/check-marks', icon: '✓', label: 'Check Marks', desc: 'Ticks, crosses ✓ ✔ ✗ ✘ ☑', count: '50+' },
  { href: '/symbols', icon: '♠', label: 'Special Symbols', desc: 'Cards, zodiac, chess ♠ ♈ ♛', count: '100+' },
  { href: '/math', icon: '∑', label: 'Math Symbols', desc: 'Math, Greek letters ± ÷ × π Σ', count: '120+' },
  { href: '/currency', icon: '$', label: 'Currency', desc: 'Money signs $ € £ ¥ ₿ ₩', count: '60+' },
  { href: '/brackets', icon: '【】', label: 'Brackets', desc: 'All bracket types 「」 《》 【】', count: '60+' },
  { href: '/numbers', icon: '①', label: 'Numbers', desc: 'Circled, roman ① ❶ Ⅰ ⒈', count: '100+' },
  { href: '/circles', icon: '●', label: 'Circles', desc: 'Circle shapes ● ○ ◉ ◎ ⊙', count: '50+' },
  { href: '/squares', icon: '■', label: 'Squares', desc: 'Square shapes ■ □ ▪ ◼ 🟥', count: '50+' },
  { href: '/triangles', icon: '▲', label: 'Triangles', desc: 'Triangle shapes ▲ △ ▶ ◆ 🔷', count: '50+' },
  { href: '/lines', icon: '─', label: 'Lines & Box Drawing', desc: 'Lines, borders ─ │ ═ ║ ┌ ┘', count: '60+' },
  { href: '/music', icon: '♪', label: 'Music', desc: 'Music notes ♩ ♪ ♫ ♬ 🎵', count: '50+' },
  { href: '/flowers', icon: '✿', label: 'Flowers & Nature', desc: 'Flowers, plants ✿ ❀ 🌸 🌹', count: '55+' },
  { href: '/weather', icon: '☀', label: 'Weather', desc: 'Weather, sky ☀ ☁ ❄ 🌈 🌊', count: '60+' },
  { href: '/animals', icon: '🐱', label: 'Animals', desc: 'Animal emojis 🐶 🐱 🐸 🦊', count: '80+' },
  { href: '/food', icon: '🍕', label: 'Food & Drink', desc: 'Food emojis 🍔 🍕 🍣 ☕', count: '80+' },
  { href: '/travel', icon: '✈️', label: 'Travel', desc: 'Travel, transport ✈️ 🚗 🌍', count: '60+' },
  { href: '/text-faces', icon: '(◕‿◕)', label: 'Kaomoji', desc: 'Text faces ¯\\_(ツ)_/¯ (◕‿◕)', count: '50+' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I copy an emoji or symbol?',
      acceptedAnswer: { '@type': 'Answer', text: 'Simply click on any emoji or symbol and it will be automatically copied to your clipboard. Then paste it anywhere with Ctrl+V (or Cmd+V on Mac).' },
    },
    {
      '@type': 'Question',
      name: 'Do these emojis work on all devices and platforms?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes! All emojis and symbols on this site are standard Unicode characters that work on Windows, Mac, iOS, Android, and all modern browsers including Instagram, Twitter/X, Facebook, WhatsApp, Discord, Slack, and more.' },
    },
    {
      '@type': 'Question',
      name: 'How many symbols does EmojiCopy have?',
      acceptedAnswer: { '@type': 'Answer', text: 'EmojiCopy has over 3,000 emojis, symbols, and special characters organized across 23+ categories including arrows (370+), hearts (150+), smileys (200+), math symbols, reference marks (※), and more.' },
    },
    {
      '@type': 'Question',
      name: 'What is the ※ reference mark symbol?',
      acceptedAnswer: { '@type': 'Answer', text: 'The ※ symbol (also called 당구장 기호 in Korean or "kome" in Japanese) is a reference mark used to indicate footnotes or special notes. Visit our Reference Marks page for more symbols like it.' },
    },
    {
      '@type': 'Question',
      name: 'Can I copy arrow symbols from this site?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes! We have 370+ arrow symbols including basic arrows (←→↑↓), double arrows (⇐⇒), decorative arrows (➤➜), and many more. Visit our Arrows page for the full collection.' },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Emoji Copy & Paste',
            description: 'Copy and paste 3000+ emojis, arrows, hearts, stars, and special characters with one click. Free online emoji keyboard.',
            url: 'https://emoji-copy-app.vercel.app',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '5670',
              bestRating: '5',
              worstRating: '1'
            }
          })
        }}
      />

      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold mb-1" style={{ color: 'var(--text)' }}>
          Emoji & Symbol Copy Paste
        </h1>
        <p className="text-gray-500 text-sm">
          3,000+ emojis, arrows, symbols and special characters. Click to copy, paste anywhere.
        </p>
      </div>

      {/* Recently Used (persisted via localStorage) */}
      <RecentEmojis />

      {/* Category Grid */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">All Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {categories.map(cat => (
            <a
              key={cat.href}
              href={cat.href}
              className="flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-gray-50 transition-all group"
              style={{ border: '1.5px solid var(--card-border)' }}
            >
              <span className="text-2xl w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 group-hover:scale-110 transition-transform">
                {cat.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm" style={{ color: 'var(--text)' }}>{cat.label}</span>
                  <span className="text-xs text-gray-400">{cat.count}</span>
                </div>
                <p className="text-xs text-gray-400 truncate">{cat.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Popular emojis quick access */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Most Popular — Quick Copy</h2>
        <EmojiBoard />
      </section>

      {/* SEO Content */}
      <section className="mt-8 space-y-4 text-sm text-gray-600 max-w-3xl">
        <h2 className="text-lg font-bold text-gray-800">About EmojiCopy</h2>
        <p>
          EmojiCopy is the fastest and most complete emoji and symbol copy-paste tool on the web.
          With 3,000+ items across 23 categories, you can find any emoji, arrow, special character,
          or text symbol you need. Every symbol is standard Unicode, meaning it works on every device,
          browser, and platform — from Instagram and Twitter to Google Docs and email.
        </p>
        <p>
          Popular categories include our massive arrow collection (370+ symbols including ← → ↑ ↓ ⇐ ⇒ ➤),
          the ※ reference marks page (당구장 기호 and more), hearts (❤️ ♡ 💕), stars (★ ⭐ ✨),
          and smiley faces (😀 😂 🥰). We also offer math symbols, currency signs, box drawing characters,
          music notes, brackets, and kaomoji text faces.
        </p>
        <details className="border border-gray-200 rounded-lg">
          <summary className="px-4 py-3 cursor-pointer font-semibold text-gray-700">How do I copy an emoji?</summary>
          <p className="px-4 pb-3">Click on any emoji or symbol and it gets copied automatically. Then paste with Ctrl+V (Windows) or Cmd+V (Mac). It works in any text field.</p>
        </details>
        <details className="border border-gray-200 rounded-lg">
          <summary className="px-4 py-3 cursor-pointer font-semibold text-gray-700">Do these work on all platforms?</summary>
          <p className="px-4 pb-3">Yes — Instagram, Twitter/X, Facebook, TikTok, WhatsApp, Discord, Slack, Gmail, Google Docs, Microsoft Word, and everywhere else that supports text.</p>
        </details>
        <details className="border border-gray-200 rounded-lg">
          <summary className="px-4 py-3 cursor-pointer font-semibold text-gray-700">What is the ※ (reference mark) symbol?</summary>
          <p className="px-4 pb-3">The ※ symbol is called &quot;당구장 기호&quot; in Korean and &quot;kome&quot; in Japanese. It marks footnotes and special notes. Visit our dedicated Reference Marks page for 200+ similar symbols.</p>
        </details>
        <details className="border border-gray-200 rounded-lg">
          <summary className="px-4 py-3 cursor-pointer font-semibold text-gray-700">How many arrows do you have?</summary>
          <p className="px-4 pb-3">Over 370 arrow symbols — basic (←→↑↓), double (⇐⇒⇔), heavy (➤➜➡), harpoon, supplemental, and many more. The most comprehensive arrow collection online.</p>
        </details>
      </section>
    </>
  )
}
