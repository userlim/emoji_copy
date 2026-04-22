import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Circle Symbols ● ◉ ○ ◎ Copy and Paste | 60+ Circles',
  description: 'Copy and paste 60+ circle symbols ● ○ ◉ ◎ ◯ ⊙ ⚫ ⚪ 🔴 and more. All circle characters in one page — click to copy.',
  keywords: ['circle symbol', 'circle emoji', 'dot symbol', 'filled circle', 'empty circle', 'colored circle', 'bullet point'],
};

const filledCircles = ['●', '⚫', '🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🟤', '⬤'];

const emptyCircles = ['○', '◎', '◯', '⊙', '⚪', '🟤'];

const circleVariants = ['◉', '◌', '◍', '◐', '◑', '◒', '◓', '◔', '◕', '◖', '◗'];

const decorativeCircles = ['◦', '•', '∘', '°', '˚', '∙', '⋅', '⦁', '⦂', '⦾', '⦿'];

const coloredCircles = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🟤', '⭕', '💠', '🔘'];

const mathCircles = ['⊕', '⊖', '⊗', '⊘'];

const miscCircles = ['◌', '◍', '◎', '◉', '◐', '◑', '◒', '◓'];

export default function CirclesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <CategoryNav current="/circles" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-red-600 mb-4">Circle Symbols & Characters</h1>
          <p className="text-xl text-[#8B95A1]">Copy 60+ circle symbols in every style. From solid filled circles ● to hollow circles ○, colored emoji circles, and mathematical circle operators. Perfect for bullet points, decorative elements, and documents.</p>
        </header>

        {/* Filled Circles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">● ⚫ 🔴 Filled Circles</h2>
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">{filledCircles.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Solid filled circle symbols in black, red, and other colors</p>
          <CopyGrid items={filledCircles} />
        </section>

        {/* Empty Circles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">○ ◎ ◯ Empty Circles</h2>
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{emptyCircles.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Hollow and empty circle variants for contrast and design</p>
          <CopyGrid items={emptyCircles} />
        </section>

        {/* Circle Variants Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">◉ ◐ ◑ Circle Variants</h2>
            <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">{circleVariants.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Partial circles, segmented circles, and geometric variants</p>
          <CopyGrid items={circleVariants} />
        </section>

        {/* Decorative Circles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">◦ • ∘ Decorative Circles</h2>
            <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{decorativeCircles.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Small decorative dots and bullet points for lists and design</p>
          <CopyGrid items={decorativeCircles} />
        </section>

        {/* Colored Circles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">🔴 🟠 🟡 Colored Emoji Circles</h2>
            <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">{coloredCircles.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Bright colored circle emoji in red, orange, yellow, green, blue, and more</p>
          <CopyGrid items={coloredCircles} />
        </section>

        {/* Mathematical Circles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⊕ ⊖ ⊗ Mathematical Circles</h2>
            <span className="text-sm bg-[rgba(var(--accent-rgb),0.12)] text-[var(--accent)] px-3 py-1 rounded-full">{mathCircles.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Mathematical operator circles for equations and technical documents</p>
          <CopyGrid items={mathCircles} />
        </section>

        {/* Miscellaneous Circles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">◌ ◍ ◎ Miscellaneous Circles</h2>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{miscCircles.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Specialized circle characters and unique geometric variants</p>
          <CopyGrid items={miscCircles} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">About Circle Symbols</h2>
          <div className="text-[#8B95A1] space-y-4">
            <p>
              Circle symbols are fundamental Unicode characters used in writing, design, mathematics, and digital communication. Our collection of 60+ circle symbols covers every style and purpose, from basic solid circles ● to hollow variants ○, colorful emoji circles, and mathematical operators.
            </p>
            <p>
              Whether you need simple bullet points for lists, filled circles for visual indicators, colored emoji circles for social media, or mathematical circle operators for technical documents, you'll find exactly what you need. All circles are instantly copyable with a single click.
            </p>
            <p>
              Circle symbols have been standardized in Unicode and are supported across all modern devices, browsers, and applications. Use them in emails, documents, presentations, websites, social media posts, and anywhere else you need circular indicators or decorative elements.
            </p>
            <p>
              Our circle library includes filled circles, empty circles, partially filled circles, decorative dots, colored emoji circles, and mathematical operators. Each category is organized by style and function for easy browsing and selection.
            </p>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Tips for Using Circle Symbols</h2>
          <ul className="text-[#8B95A1] space-y-3">
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span><strong>Copy with one click:</strong> Click any circle symbol to instantly copy it to your clipboard</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span><strong>Perfect for bullet points:</strong> Use small circles as unique alternatives to standard bullets</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span><strong>Visual indicators:</strong> Filled circles work great as status indicators or progress markers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span><strong>Color variation:</strong> Choose from filled, empty, or colored circles for different effects</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span><strong>Works everywhere:</strong> Circle symbols display consistently across all devices and applications</span>
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
                name: 'What are circle symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Circle symbols are Unicode characters that represent circles in various styles. They include solid filled circles ●, hollow circles ○, colored emoji circles 🔴, and mathematical operators like ⊕. All circles work in any text editor or application.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I copy circle symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply click on any circle symbol on this page to copy it to your clipboard. You can then paste it anywhere—in emails, documents, social media posts, or websites. No special software is needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between filled and empty circles?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Filled circles (●) are solid and completely colored in, while empty circles (○) are hollow outlines. Filled circles work better for visual emphasis and indicators, while empty circles work for checkboxes and selection indicators.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use circle symbols as bullet points?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Circle symbols make excellent bullet points. Use ● for filled bullets, ○ for hollow bullets, or choose from colored circles like 🔴 for more visual variety in your lists.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do circle symbols work on all devices?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Circle symbols are standardized Unicode characters supported on all modern devices, browsers, and applications including Windows, Mac, Linux, iPhone, and Android. They display consistently across platforms.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
