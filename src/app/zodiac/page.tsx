import { Metadata } from 'next'
import CopyGrid from '@/components/CopyGrid'
import CategoryNav from '@/components/CategoryNav'

export const metadata: Metadata = {
  title: 'Zodiac Symbols Copy and Paste ♈ ♉ ♊ ♋ ♌ ♍',
  description: 'Copy and paste zodiac symbols, astrological signs, moon phases, and celestial symbols. Perfect for astrology, horoscopes, and spiritual content.',
  keywords: 'zodiac symbols, astrology, horoscope, zodiac signs, moon phases, celestial symbols, copy paste',
}

export default function ZodiacPage() {
  const symbolEmojis = '♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🔮 🪬 🧿 ☀️ 🌙 ⭐ 🌟 ✨'.split(' ')

  const zodiacSigns = [
    { symbol: '♈', name: 'Aries', dates: 'March 21 - April 19' },
    { symbol: '♉', name: 'Taurus', dates: 'April 20 - May 20' },
    { symbol: '♊', name: 'Gemini', dates: 'May 21 - June 20' },
    { symbol: '♋', name: 'Cancer', dates: 'June 21 - July 22' },
    { symbol: '♌', name: 'Leo', dates: 'July 23 - August 22' },
    { symbol: '♍', name: 'Virgo', dates: 'August 23 - September 22' },
    { symbol: '♎', name: 'Libra', dates: 'September 23 - October 22' },
    { symbol: '♏', name: 'Scorpio', dates: 'October 23 - November 21' },
    { symbol: '♐', name: 'Sagittarius', dates: 'November 22 - December 21' },
    { symbol: '♑', name: 'Capricorn', dates: 'December 22 - January 19' },
    { symbol: '♒', name: 'Aquarius', dates: 'January 20 - February 18' },
    { symbol: '♓', name: 'Pisces', dates: 'February 19 - March 20' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 py-8">
      <CategoryNav current="/zodiac" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          Zodiac Symbols Copy and Paste
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Discover and copy zodiac symbols, moon phases, and celestial symbols for astrology and spiritual content
        </p>

        <div className="space-y-12">
          {/* Symbols Grid Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">✨ Zodiac & Celestial Symbols</h2>
            <CopyGrid items={symbolEmojis} />
          </section>

          {/* Zodiac Signs with Dates */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">♈ Zodiac Signs & Dates</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
              {zodiacSigns.map((sign) => (
                <div key={sign.name} className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <div className="text-3xl mb-1">{sign.symbol}</div>
                  <div className="text-sm font-bold text-gray-900">{sign.name}</div>
                  <div className="text-xs text-gray-500">{sign.dates}</div>
                </div>
              ))}
            </div>
            <CopyGrid items={zodiacSigns.map(s => s.symbol)} />
          </section>
        </div>

        {/* SEO Content */}
        <section className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Zodiac Symbols Copy and Paste Guide</h2>
          <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
            <p>
              Zodiac symbols are powerful representations of the astrological signs used for horoscopes, personality profiles, and spiritual exploration. From Aries ♈ to Pisces ♓, each symbol represents unique characteristics and celestial influences.
            </p>
            <p>
              Our collection includes all twelve zodiac signs, moon phases, and related celestial symbols perfect for astrology content, tarot readings, and spiritual discussions. Each sign is paired with its accurate date range to help you find your astrological sign.
            </p>
            <p>
              Perfect for social media posts, blogs, personal astrology journal entries, and spiritual discussions. All symbols are Unicode characters compatible with all platforms and devices.
            </p>
          </div>
        </section>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How do I find my zodiac sign?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your zodiac sign is determined by your birth date. Find your birth date in the list of zodiac signs and dates to discover your astrological sign.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I copy zodiac symbols?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simply click on any zodiac symbol you want to copy. It will be copied to your clipboard and you can paste it in messages, social media, or astrology content.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are zodiac symbols compatible with all platforms?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, zodiac symbols are Unicode characters and work on all platforms including iOS, Android, Windows, Mac, and web applications.',
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </main>
  )
}
