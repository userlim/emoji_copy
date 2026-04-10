import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Square Symbols ■ □ ▪ ▫ Copy and Paste | 50+ Squares',
  description: 'Copy and paste 50+ square symbols ■ □ ▪ ▫ ◼ ◻ ⬛ ⬜ 🔲 and more. All square characters in one page — click to copy.',
  keywords: ['square symbol', 'square emoji', 'box symbol', 'filled square', 'empty square', 'colored squares', 'checkbox'],
};

const filledSquares = ['■', '◼', '⬛', '🔲', '🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '🟫'];

const emptySquares = ['□', '◻', '⬜', '🔳'];

const smallSquares = ['▪', '▫', '⊞', '⊟'];

const patternedSquares = ['▣', '▤', '▥', '▦', '▧', '▨', '▩'];

const coloredSquares = ['🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '🟫'];

const decorativeSquares = ['⊠', '⊡', '❏', '❐', '❑', '❒'];

const specialSquares = ['⧫', '⧪', '⧮', '⧯', '⬟', '⬠', '⬡', '⏣', '⏥', '⏢'];

export default function SquaresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <CategoryNav current="/squares" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-green-600 mb-4">Square Symbols & Characters</h1>
          <p className="text-xl text-gray-300">Copy 50+ square symbols in every style. From solid filled squares ■ to hollow squares □, colored emoji squares, checkboxes, and patterned variants. Perfect for lists, interfaces, and decorative designs.</p>
        </header>

        {/* Filled Squares Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">■ ◼ ⬛ Filled Squares</h2>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">{filledSquares.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Solid filled square symbols in black and bright colors</p>
          <CopyGrid items={filledSquares} />
        </section>

        {/* Empty Squares Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">□ ◻ ⬜ Empty Squares</h2>
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{emptySquares.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Hollow and empty square variants perfect for checkboxes</p>
          <CopyGrid items={emptySquares} />
        </section>

        {/* Small Squares Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">▪ ▫ Small Squares</h2>
            <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">{smallSquares.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Compact square symbols for bullet points and small indicators</p>
          <CopyGrid items={smallSquares} />
        </section>

        {/* Patterned Squares Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">▤ ▥ ▦ Patterned Squares</h2>
            <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{patternedSquares.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Squares with horizontal, vertical, and cross-hatch patterns</p>
          <CopyGrid items={patternedSquares} />
        </section>

        {/* Colored Squares Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">🟥 🟧 🟨 Colored Emoji Squares</h2>
            <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">{coloredSquares.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Bright colored square emoji in red, orange, yellow, green, blue, and more</p>
          <CopyGrid items={coloredSquares} />
        </section>

        {/* Decorative Squares Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">❏ ❐ ❑ Decorative Squares</h2>
            <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">{decorativeSquares.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Ornamental square variants with lines and borders</p>
          <CopyGrid items={decorativeSquares} />
        </section>

        {/* Special Squares Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⧫ ⧪ ⬟ Special Squares</h2>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{specialSquares.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Geometric and specialized square-like characters</p>
          <CopyGrid items={specialSquares} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">About Square Symbols</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Square symbols are fundamental Unicode characters used in writing, design, interfaces, and mathematics. Our collection of 50+ square symbols covers every style and purpose, from basic solid squares ■ to hollow variants □, colored emoji squares, patterned squares, and special geometric characters.
            </p>
            <p>
              Whether you need simple checkboxes for lists, filled squares for visual indicators, colored squares for design, patterned squares for decorative purposes, or specialized shapes for technical documents, you'll find exactly what you need. All squares are instantly copyable with a single click.
            </p>
            <p>
              Square symbols have been standardized in Unicode and are supported across all modern devices, browsers, and applications. Use them in emails, documents, presentations, websites, social media posts, UI design, and anywhere else you need square indicators or decorative elements.
            </p>
            <p>
              Our square library includes filled squares, empty squares, small squares, patterned squares, colored emoji squares, decorative variants, and special geometric shapes. Each category is organized by style and function for easy browsing and selection.
            </p>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="mt-12 bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Tips for Using Square Symbols</h2>
          <ul className="text-gray-300 space-y-3">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">■</span>
              <span><strong>Copy with one click:</strong> Click any square symbol to instantly copy it to your clipboard</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">■</span>
              <span><strong>Perfect for checkboxes:</strong> Use □ for unchecked boxes and ☑ for checked boxes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">■</span>
              <span><strong>Visual organization:</strong> Create lists and hierarchies with colored squares</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">■</span>
              <span><strong>Design flexibility:</strong> Mix filled, empty, and patterned squares for unique layouts</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">■</span>
              <span><strong>Works everywhere:</strong> Square symbols display consistently across all devices and applications</span>
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
                name: 'What are square symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Square symbols are Unicode characters that represent squares in various styles. They include solid filled squares ■, hollow squares □, colored emoji squares 🟥, patterned squares, and decorative variants. All squares work in any text editor or application.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I copy square symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply click on any square symbol on this page to copy it to your clipboard. You can then paste it anywhere—in emails, documents, social media posts, or websites. No special software is needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between filled and empty squares?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Filled squares (■) are solid and completely colored in, while empty squares (□) are hollow outlines. Filled squares work better for emphasis and indicators, while empty squares work great for checkboxes and selection markers.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use square symbols for checkboxes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Empty square □ works perfectly as an unchecked checkbox. You can also use filled square ■ or colored squares to indicate completion or selection in your lists and forms.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do square symbols work on all devices?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Square symbols are standardized Unicode characters supported on all modern devices, browsers, and applications including Windows, Mac, Linux, iPhone, and Android. They display consistently across platforms.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
