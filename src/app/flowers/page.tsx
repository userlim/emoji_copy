import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Flower Symbols ✿ ❀ 🌸 🌹 Copy and Paste | 55+ Flowers',
  description: 'Copy and paste 55+ flower symbols including ✿ ❀ 🌸 🌺 🌻 🌼 🌷 🌹 and nature symbols. Perfect for decorative designs, nature projects, and creative content.',
  keywords: ['flower symbol', 'flower emoji', 'plant symbol', 'nature emoji', 'botanical symbol', 'rose emoji', 'decorative flower'],
};

const decorativeFlowers = ['✿', '❀', '❁', '❂', '❃', '✾', '✽', '❋', '❊', '❉', '❈', '❇'];

const emojiFlowers = ['🌸', '🌺', '🌻', '🌼', '🌷', '🌹', '🥀', '💐', '🏵'];

const leaves = ['🌾', '🌿', '🍀', '🍁', '🍂', '🍃', '🪷', '🪻'];

const plants = ['🌱', '🌲', '🌳', '🌴', '🌵', '🎄', '🎋', '🎍', '🪴'];

const flowerVariants = ['⚘', 'ꕤ', 'ꕥ', '✻', '✼', '✺', '✹', '✸', '✷', '✶', '✵'];

export default function FlowersPage() {
  return (
    <div className="min-h-screen">
      <CategoryNav current="/flowers" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">Flower Symbols & Nature Emoji</h1>
          <p className="text-xl text-gray-700">Copy 55+ flower and nature symbols including decorative flowers ✿ ❀, emoji flowers 🌸 🌹, leaves, plants, and botanical elements. Perfect for creative designs, nature projects, and decorative content.</p>
        </header>

        {/* Decorative Flowers Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">✿ ❀ ❁ Decorative Flowers</h2>
            <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">{decorativeFlowers.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Ornamental flower symbols perfect for borders and decorative designs</p>
          <CopyGrid items={decorativeFlowers} />
        </section>

        {/* Emoji Flowers Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">🌸 🌺 🌻 Colorful Flowers</h2>
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">{emojiFlowers.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Beautiful flower emoji in various colors and styles</p>
          <CopyGrid items={emojiFlowers} />
        </section>

        {/* Leaves Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">🍀 🍁 🍂 Leaves & Foliage</h2>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">{leaves.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Leaf and foliage symbols for botanical and nature themes</p>
          <CopyGrid items={leaves} />
        </section>

        {/* Plants Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">🌱 🌲 🌳 Trees & Plants</h2>
            <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">{plants.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Tree and plant emoji for nature-themed designs and content</p>
          <CopyGrid items={plants} />
        </section>

        {/* Flower Variants Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">✻ ✼ ✺ Flower Variants</h2>
            <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{flowerVariants.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Geometric and star-like flower variations</p>
          <CopyGrid items={flowerVariants} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-gradient-to-r from-pink-50 to-red-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Flower Symbols</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Flower symbols are beautiful Unicode characters used for decoration, botanical representation, and nature-themed design. Our collection of 55+ flower symbols covers decorative flowers ✿ ❀, vibrant emoji flowers 🌸 🌹, leaves, plants, and botanical elements.
            </p>
            <p>
              Whether you need ornamental flowers for borders and dividers, colorful emoji flowers for social media, leaf symbols for nature content, plant emoji for gardening projects, or geometric flower variants for decorative purposes, you'll find exactly what you need. All symbols are instantly copyable with a single click.
            </p>
            <p>
              Flower symbols have been standardized in Unicode and are supported across all modern devices, browsers, and applications. Use them in documents, presentations, websites, social media posts, emails, and anywhere else you need nature-inspired decorative elements.
            </p>
            <p>
              Our flower library includes decorative flowers, colorful emoji flowers, leaves, trees, plants, and geometric flower variants. Each category is organized by botanical type and visual style for easy browsing and selection.
            </p>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="mt-12 bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Using Flower Symbols</h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex gap-3">
              <span className="text-pink-600 font-bold">✿</span>
              <span><strong>Copy with one click:</strong> Click any flower symbol to instantly copy it to your clipboard</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-600 font-bold">✿</span>
              <span><strong>Decorative borders:</strong> Create flower borders using ✿✿✿✿✿ or mix different flowers for variety</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-600 font-bold">✿</span>
              <span><strong>Nature themes:</strong> Combine flowers 🌸 with leaves 🍀 for botanical designs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-600 font-bold">✿</span>
              <span><strong>Social media ready:</strong> Colorful emoji flowers work perfectly in posts and comments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-600 font-bold">✿</span>
              <span><strong>Works everywhere:</strong> Flower symbols display consistently across all devices and applications</span>
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
                name: 'What are flower symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Flower symbols are Unicode characters representing flowers and botanical elements. They include decorative flowers ✿ ❀, colorful emoji flowers 🌸 🌹, leaves 🍀, plants 🌱, and tree symbols 🌲. All symbols work in any text editor or application.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I copy flower symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply click on any flower symbol on this page to copy it to your clipboard. You can then paste it anywhere—in documents, emails, social media posts, or websites. No special software is needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between decorative and emoji flowers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Decorative flowers like ✿ ❀ are ornamental text symbols perfect for borders and designs. Emoji flowers like 🌸 🌹 are colorful visual representations of specific flowers. Both work well together for nature-themed content.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I create flower borders using these symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! You can create decorative borders by repeating flower symbols like ✿✿✿✿✿ or mixing different flowers and leaves. Experiment with different combinations to create unique decorative borders for your content.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do flower symbols work on all devices?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Flower symbols are standardized Unicode characters supported on all modern devices, browsers, and applications including Windows, Mac, Linux, iPhone, and Android. They display consistently across platforms.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
