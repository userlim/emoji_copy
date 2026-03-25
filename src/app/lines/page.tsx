import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Line Symbols ─ │ ═ ║ Box Drawing Copy and Paste | 60+ Lines',
  description: 'Copy and paste 60+ line symbols including box drawing characters ─ │ ┌ ┐ ═ ║ and decorative dashes. Perfect for ASCII art, borders, and text decoration.',
  keywords: ['line symbol', 'box drawing', 'ASCII art', 'horizontal line', 'vertical line', 'border symbol', 'decorative dash'],
};

const basicLines = ['─', '│', '┌', '┐', '└', '┘', '├', '┤', '┬', '┴', '┼'];

const doubleLines = ['═', '║', '╔', '╗', '╚', '╝', '╠', '╣', '╦', '╩', '╬'];

const roundedLines = ['╒', '╓', '╕', '╖', '╘', '╙', '╛', '╜', '╞', '╟', '╡', '╢', '╤', '╥', '╧', '╨', '╪', '╫'];

const dashedLines = ['—', '–', '‐', '‑', '‒', '―', '⁃', '‣', '⎯', '⏤', '▬', '╌', '╍', '┄', '┅', '┈', '┉', '╴', '╵', '╶', '╷'];

const decorativeLines = ['⸻', '─ ─ ─', '━ ━ ━', '═══', '◈◈◈', '✦✦✦'];

const trigramLines = ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'];

export default function LinesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <CategoryNav current="/lines" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-slate-600 mb-4">Line Symbols & Box Drawing Characters</h1>
          <p className="text-xl text-gray-700">Copy 60+ line and box drawing symbols including horizontal lines ─, vertical lines │, corners ┌ ┐ └ ┘, and decorative dashes. Perfect for ASCII art, borders, dividers, and text decoration.</p>
        </header>

        {/* Basic Lines Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">─ │ ┌ Basic Box Drawing</h2>
            <span className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{basicLines.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Basic single-line box drawing characters for borders and grids</p>
          <CopyGrid items={basicLines} />
        </section>

        {/* Double Lines Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">═ ║ ╔ Double Lines</h2>
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{doubleLines.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Double-line box drawing for emphasized borders and divisions</p>
          <CopyGrid items={doubleLines} />
        </section>

        {/* Rounded Lines Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">╒ ╓ ╕ Rounded Corners</h2>
            <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">{roundedLines.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Box drawing with rounded corners and mixed line styles</p>
          <CopyGrid items={roundedLines} />
        </section>

        {/* Dashed Lines Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">— – ‐ Dashes & Dashes</h2>
            <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{dashedLines.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Dashed lines, hyphens, and punctuation dashes of varying lengths</p>
          <CopyGrid items={dashedLines} />
        </section>

        {/* Decorative Lines Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">⸻ ━━━ ═══ Decorative Dividers</h2>
            <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">{decorativeLines.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Ornamental lines and decorative dividers for text separation</p>
          <CopyGrid items={decorativeLines} />
        </section>

        {/* Trigram Lines Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">☰ ☱ ☲ I Ching Trigrams</h2>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{trigramLines.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">I Ching trigrams and philosophical line patterns</p>
          <CopyGrid items={trigramLines} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Line Symbols and Box Drawing</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Line symbols and box drawing characters are essential Unicode characters used for creating borders, decorative dividers, ASCII art, and text-based interfaces. Our collection of 60+ line symbols covers every style and purpose, from basic single lines ─ and │ to complex box drawing with corners ┌ ┐ └ ┘ and decorative dashes.
            </p>
            <p>
              Whether you need simple horizontal lines ─ for dividing content, vertical lines │ for column separators, box corners for ASCII art boxes, double lines ═ for emphasis, rounded corners ╒ for softer designs, or decorative dashes for ornamental purposes, you'll find exactly what you need. All lines are instantly copyable with a single click.
            </p>
            <p>
              Line symbols have been standardized in Unicode and are supported across all modern devices, browsers, and applications. Use them in documents, code, terminals, social media posts, ASCII art, text decorations, and anywhere else you need visual divisions or borders.
            </p>
            <p>
              Our line library includes basic single lines, double lines, rounded corners, mixed styles, dashed lines, decorative dividers, and I Ching trigrams. Each category is organized by style and function for easy browsing and selection.
            </p>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="mt-12 bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Using Line Symbols</h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex gap-3">
              <span className="text-slate-600 font-bold">─</span>
              <span><strong>Copy with one click:</strong> Click any line symbol to instantly copy it to your clipboard</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-600 font-bold">─</span>
              <span><strong>Create boxes:</strong> Combine corners ┌ ┐ └ ┘ with lines ─ and │ to create ASCII art boxes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-600 font-bold">─</span>
              <span><strong>Section dividers:</strong> Use ─────── or ═════ as content dividers in documents and messages</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-600 font-bold">─</span>
              <span><strong>Emphasis variation:</strong> Single lines ─ for light borders, double lines ═ for emphasis</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-600 font-bold">─</span>
              <span><strong>Works everywhere:</strong> Line symbols display consistently across all devices and applications</span>
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
                name: 'What are box drawing characters?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Box drawing characters are Unicode symbols used to create borders, boxes, and grids using only text. They include horizontal lines ─, vertical lines │, corners ┌ ┐ └ ┘, intersections ┼, and double-line variants ═ ║. These are perfect for ASCII art and text-based interfaces.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I copy line symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply click on any line symbol on this page to copy it to your clipboard. You can then paste it anywhere—in documents, code, terminals, emails, or messages. No special software is needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I create a box using line symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Combine corner characters with lines to create boxes. For example: ┌─────┐ on top, │ content │ in the middle, and └─────┘ on the bottom. Use double lines ╔═════╗ for emphasis or rounded corners ╒─────╕ for a softer look.',
                },
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between single and double lines?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Single lines (─ │ ┌) are lighter and more subtle, while double lines (═ ║ ╔) are bolder and more prominent. Use single lines for regular borders and double lines for emphasis or section separation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do line symbols work in all applications?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Line symbols are standardized Unicode characters supported on all modern devices, browsers, and applications including Windows, Mac, Linux, and mobile platforms. They display consistently across all systems.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
