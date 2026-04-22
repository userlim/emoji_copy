import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Star Symbols Copy and Paste ★ ⭐ ✨ | 100+ Stars',
  description: 'Copy star emojis and text symbols. 100+ star symbols including ★ ⭐ ✨ 💫 and decorative sparkle designs.',
  keywords: 'star emoji, star symbols, sparkle symbols, copy paste stars, star copy',
};

const emojiStars = ['⭐', '🌟', '✨', '💫', '🌠', '⭐', '🔯', '✡', '🌃', '🌌', '🎇', '🎆'];

const textStars = [
  '★',
  '☆',
  '✦',
  '✧',
  '✩',
  '✪',
  '✫',
  '✬',
  '✭',
  '✮',
  '✯',
  '✰',
  '⁂',
  '⁎',
  '⁑',
  '⁕',
  '✱',
  '✲',
  '✳',
  '✴',
  '✵',
  '✶',
  '✷',
  '✸',
  '✹',
  '⊛',
  '⊕',
  '⊗',
];

const sparklesDecorative = [
  '❇',
  '❈',
  '❉',
  '❊',
  '❋',
  '❄',
  '❅',
  '❆',
  '✺',
  '✻',
  '✼',
  '✽',
  '✾',
  '✿',
  '❀',
  '❁',
  '❂',
  '❃',
  '⛄',
  '❅',
  '❆',
  '❇️',
  '❈️',
];

const filledOutlinedStars = ['★', '☆', '✡', '✦', '✧', '⍟', '⊛', '❂', '✪', '✩', '✪', '✫', '✬', '✭', '✮', '✯'];

const starCombos = [
  '★★★',
  '☆☆☆',
  '⭐⭐⭐',
  '✨✨✨',
  '★☆★☆★',
  '✦✦✦',
  '⭐✨⭐',
  '✨💫✨',
  '🌟🌟🌟',
  '★✧★✧★',
  '✩✪✩✪',
  '⭐⭐⭐⭐⭐',
];

export default function StarsPage() {
  return (
    <div className="min-h-screen">
      <CategoryNav current="/stars" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-yellow-600 mb-4">Star Symbols & Sparkle Emojis</h1>
          <p className="text-xl text-gray-700">Copy 100+ star symbols, sparkle effects, and decorative star designs. Perfect for ratings, highlights, and creative text decorations.</p>
        </header>

        {/* Emoji Stars Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">⭐ Emoji Stars</h2>
            <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">12 symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Standard star and sparkle emojis with various styles</p>
          <CopyGrid items={emojiStars} />
        </section>

        {/* Text Stars Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">★ Text Stars</h2>
            <span className="text-sm bg-amber-100 text-amber-700 px-3 py-1 rounded-full">28 symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Text-based star symbols that work across all devices and platforms</p>
          <CopyGrid items={textStars} />
        </section>

        {/* Sparkles & Decorative Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">✨ Sparkles & Decorative</h2>
            <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">23 symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Decorative sparkle, snowflake, and ornamental star designs</p>
          <CopyGrid items={sparklesDecorative} />
        </section>

        {/* Filled & Outlined Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">✦ Filled & Outlined Stars</h2>
            <span className="text-sm bg-amber-100 text-amber-700 px-3 py-1 rounded-full">16 symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Various filled and outlined star designs with different styles</p>
          <CopyGrid items={filledOutlinedStars} />
        </section>

        {/* Star Combos Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">⭐ Star Combinations</h2>
            <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">12 combos</span>
          </div>
          <p className="text-gray-600 mb-6">Popular star combinations ready to copy and paste</p>
          <CopyGrid items={starCombos} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Star Symbols</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Star symbols are versatile symbols used for ratings, highlighting important content, and adding visual appeal to text. Whether you need a simple text star ★ or a sparkling emoji ✨, our collection of 100+ star symbols covers every style and use case.
            </p>
            <p>
              From filled stars ★ to outlined stars ☆, and from classic decorative stars ✦ to sparkling effects ✨ and snowflakes ❄, you'll find the perfect star symbol for your needs. We include both emoji versions and Unicode text symbols that work everywhere.
            </p>
            <p>
              Star symbols are commonly used for product ratings, highlighting sections, creating borders and decorations, and adding visual emphasis to messages and posts. Our pre-made star combinations like ★★★ and ⭐⭐⭐⭐⭐ make it easy to create 5-star ratings or decorative elements.
            </p>
            <p>
              All symbols can be copied with a single click and pasted directly into your text, social media posts, documents, and creative projects. No special software or technical knowledge required!
            </p>
          </div>
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
                name: 'What is the difference between filled and outlined stars?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Filled stars (★) are completely solid, while outlined stars (☆) have an empty interior. Both are commonly used for ratings and decorations.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use star symbols in online forms?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Text stars like ★ and ☆ work in virtually all online forms and platforms. Emoji stars like ⭐ and ✨ work in most modern applications.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are sparkle symbols used for?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sparkle symbols like ✨ and decorative stars like ✦ are used for emphasis, decoration, highlighting important content, and creating visual appeal in text-based communication.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
