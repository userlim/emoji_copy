import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Special Symbols Copy and Paste ♠ ♣ ♥ ♦ § ¶ | 100+ Symbols',
  description: 'Copy and paste 100+ special symbols including card suits ♠ ♣ ♥ ♦, zodiac signs, chess pieces ♔ ♕, gender symbols ♀ ♂, religious symbols ✝, and warning signs ⚠.',
  keywords: ['symbol', 'special character', 'card suit', 'zodiac', 'chess symbol', 'gender symbol', 'religious symbol', 'warning sign'],
};

const cardSuits = ['♠', '♣', '♥', '♦', '♤', '♧', '♡', '♢'];

const zodiacSigns = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎'];

const chessPieces = ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟'];

const genderSymbols = ['♀', '♂', '⚧', '⚢', '⚣', '⚤', '⚥', '⚦', '⚧', '⚨', '⚩'];

const religionSymbols = ['✝', '☦', '☪', '☸', '✡', '🕉', '☯', '✟', '✠', '♱', '♰', '☨', '☩', '卍', '卐'];

const warningSymbols = ['⚠', '☠', '☢', '☣', '⛔', '🚫', '❌', '⭕', '‼', '⁉'];

const miscSymbols = ['☮', '☯', '♻', '♿', '⚡', '⚰', '⚱', '⚗', '⚙', '⚛', '⚜', '☘', '🔱', '⚓', '🏴', '🏳', '🏁'];

export default function SymbolsPage() {
  return (
    <div className="min-h-screen">
      <CategoryNav current="/symbols" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-violet-600 mb-4">Special Symbols & Signs</h1>
          <p className="text-xl text-gray-700">Copy 100+ special symbols including card suits ♠ ♣ ♥ ♦, zodiac signs, chess pieces ♔ ♕, gender symbols ♀ ♂, religious symbols ✝, warning signs ⚠, and more. Perfect for documents, designs, and specialized content.</p>
        </header>

        {/* Card Suits Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">♠ ♣ ♥ ♦ Card Suits</h2>
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">{cardSuits.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Playing card suit symbols in filled and outlined variants</p>
          <CopyGrid items={cardSuits} />
        </section>

        {/* Zodiac Signs Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">♈ ♉ ♊ Zodiac Signs</h2>
            <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">{zodiacSigns.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">All twelve zodiac constellation symbols plus Ophiuchus</p>
          <CopyGrid items={zodiacSigns} />
        </section>

        {/* Chess Pieces Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">♔ ♕ ♖ Chess Pieces</h2>
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{chessPieces.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">White and black chess piece symbols for all six piece types</p>
          <CopyGrid items={chessPieces} />
        </section>

        {/* Gender Symbols Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">♀ ♂ ⚧ Gender Symbols</h2>
            <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">{genderSymbols.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Gender and sexuality symbols for inclusive representation</p>
          <CopyGrid items={genderSymbols} />
        </section>

        {/* Religious Symbols Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">✝ ☦ ☪ Religious Symbols</h2>
            <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{religionSymbols.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Sacred and religious symbols from various world faiths and traditions</p>
          <CopyGrid items={religionSymbols} />
        </section>

        {/* Warning & Alert Symbols Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">⚠ ☠ ☢ Warning Signs</h2>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{warningSymbols.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Warning, hazard, and alert symbols for caution and danger indication</p>
          <CopyGrid items={warningSymbols} />
        </section>

        {/* Miscellaneous Symbols Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">☮ ♻ ⚡ Miscellaneous Symbols</h2>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">{miscSymbols.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Special purpose symbols including peace, recycling, electricity, and more</p>
          <CopyGrid items={miscSymbols} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-gradient-to-r from-violet-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Special Symbols</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Special symbols are specialized Unicode characters representing concepts, objects, and ideas from games, astronomy, religion, gender identity, warning systems, and more. Our collection of 100+ special symbols covers card suits ♠ ♣ ♥ ♦, zodiac signs ♈ through ♓, chess pieces ♔ ♕, gender symbols ♀ ♂, religious symbols from multiple faiths, warning signs, and miscellaneous specialized characters.
            </p>
            <p>
              Whether you need card suit symbols for playing card references, zodiac symbols for astrology content, chess pieces for game notation, gender symbols for inclusive representation, religious symbols for spiritual discussions, or warning symbols for safety information, you'll find exactly what you need. All symbols are instantly copyable with a single click.
            </p>
            <p>
              Special symbols have been standardized in Unicode and are supported across most modern devices, browsers, and applications. Use them in documents, presentations, websites, social media posts, games, educational materials, and anywhere else you need specialized symbolic representation.
            </p>
            <p>
              Our special symbols library includes card suits, zodiac constellations, chess pieces, gender and sexuality symbols, religious symbols from world religions, warning and hazard signs, and miscellaneous specialty symbols. Each category is organized by purpose and meaning for easy browsing and selection.
            </p>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="mt-12 bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Using Special Symbols</h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex gap-3">
              <span className="text-violet-600 font-bold">♠</span>
              <span><strong>Copy with one click:</strong> Click any special symbol to instantly copy it to your clipboard</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-600 font-bold">♠</span>
              <span><strong>Card references:</strong> Use card suit symbols ♠ ♣ ♥ ♦ for playing card notation and games</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-600 font-bold">♠</span>
              <span><strong>Chess notation:</strong> Represent chess pieces ♔ ♕ ♖ ♗ ♘ ♙ in game notation and analysis</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-600 font-bold">♠</span>
              <span><strong>Zodiac representation:</strong> Display zodiac signs ♈ ♉ ♊ for astrology and calendar applications</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-600 font-bold">♠</span>
              <span><strong>Works everywhere:</strong> Special symbols display across most devices and applications</span>
            </li>
          </ul>
        </section>
      </main>

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
                name: 'What are special symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Special symbols are Unicode characters representing games, astronomy, religion, gender identity, warnings, and other specialized concepts. They include card suits ♠ ♣ ♥ ♦, zodiac signs ♈ ♓, chess pieces ♔ ♕, gender symbols ♀ ♂, religious symbols ✝, and warning signs ⚠.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I copy special symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply click on any special symbol on this page to copy it to your clipboard. You can then paste it anywhere—in documents, emails, social media posts, or websites. No special software is needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the different card suit symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The four card suit symbols are ♠ (spades), ♥ (hearts), ♦ (diamonds), and ♣ (clubs). There are also outlined variants ♤ ♡ ♢ ♧ for different styling options in playing card references.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I represent zodiac signs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Each zodiac constellation has a dedicated symbol: ♈ Aries, ♉ Taurus, ♊ Gemini, ♋ Cancer, ♌ Leo, ♍ Virgo, ♎ Libra, ♏ Scorpio, ♐ Sagittarius, ♑ Capricorn, ♒ Aquarius, ♓ Pisces, plus ⛎ Ophiuchus.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do special symbols work on all devices?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most special symbols are standardized Unicode characters supported on modern devices, browsers, and applications. Some specialized symbols may have limited support on very old systems, but they display consistently across all current platforms.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
