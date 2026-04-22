import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Heart Symbols Copy and Paste ❤️ ♡ 💕 | 150+ Hearts',
  description: 'Copy heart emojis and text symbols. 150+ heart symbols including ❤️ 💕 ♡ 💖 and decorative love symbols.',
  keywords: 'heart emoji, heart symbols, love symbols, copy paste hearts, heart copy',
};

const heartEmojis = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❤️‍🔥', '❤️‍🩹', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '🫶', '💑', '💏', '💐', '🌹', '🥀', '💍', '💒'];

const textHearts = ['♡', '♥', '❥', '❦', '❧', 'ღ', '♥️', '❤', '❣', 'ɞ', 'ʚ', 'ෆ', 'ᥫ᭡', 'ꨄ', 'ꨄꨄ', '𖥸', '♡̸', '❤̈', 'ᰔ'];

const decorativeHearts = ['💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '❤‍🔥', '🫀', '🫶🏻', '🫶🏼', '🫶🏽', '🫶🏾', '🫶🏿', '💑', '💏', '💐', '🌹', '🥀'];

const heartCombos = [
  '♡♡♡',
  '❤️❤️❤️',
  '💕💕',
  '♥♡♥',
  '❤️‍🔥❤️‍🔥',
  '💗💗💗',
  '❤️💛💚💙💜',
  '💖💝💘💕',
  '🫶🫶🫶',
  '♡♡♡♡♡',
  '❤️‍🩹❤️‍🩹',
  '💓💓💓',
];

export default function HeartsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <CategoryNav current="/hearts" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-red-600 mb-4">Heart Symbols & Love Emojis</h1>
          <p className="text-xl text-[#8B95A1]">Copy 150+ heart symbols, love emojis, and decorative heart designs. Perfect for messages, social media, and creative projects.</p>
        </header>

        {/* Emoji Hearts Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">❤️ Emoji Hearts</h2>
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">29 symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Standard heart emojis with various colors and styles</p>
          <CopyGrid items={heartEmojis} />
        </section>

        {/* Text Hearts Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">♡ Text Hearts</h2>
            <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">19 symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Text-based heart symbols that work in all devices and platforms</p>
          <CopyGrid items={textHearts} />
        </section>

        {/* Decorative Hearts Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">💖 Decorative & Skin Tone Hearts</h2>
            <span className="text-sm bg-rose-100 text-rose-700 px-3 py-1 rounded-full">25 symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Fancy decorative hearts with varied styles and skin tone variations</p>
          <CopyGrid items={decorativeHearts} />
        </section>

        {/* Heart Combos Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">💕 Heart Combinations</h2>
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">12 combos</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Popular heart combinations ready to copy and paste</p>
          <CopyGrid items={heartCombos} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-white/[0.02] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">About Heart Symbols</h2>
          <div className="text-[#8B95A1] space-y-4">
            <p>
              Heart symbols are universal expressions of love, affection, and emotion. Whether you're writing a romantic message, expressing gratitude, or adding personality to your social media posts, our collection of 150+ heart emojis and text symbols has everything you need.
            </p>
            <p>
              From the classic red heart ❤️ to decorative options like the beating heart 💗 and heart with fire ❤️‍🔥, you'll find a heart symbol for every occasion. We also include text-based hearts like ♡ and ♥ that work across all platforms and devices.
            </p>
            <p>
              Our heart symbol combinations are especially popular for creating eye-catching text decorations. Copy and paste them directly into your messages, posts, and creative content. No special software needed!
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
                name: 'What are text heart symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Text heart symbols like ♡ and ♥ are Unicode characters that represent hearts and work across all platforms. They\'re different from emojis and display consistently everywhere.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I copy these heart symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! All heart symbols on this page can be copied with a single click. Just click on any symbol or combination to copy it to your clipboard.',
                },
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between heart emojis?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Heart emojis come in different colors (red, yellow, green, blue, purple, black, white), styles (beating, broken, with fire, with bandage), and represent different emotions and contexts.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
