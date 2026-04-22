import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Triangle Symbols ▲ △ ▶ ◀ Copy and Paste | 50+ Triangles',
  description: 'Copy and paste 50+ triangle symbols ▲ △ ▶ ◀ ▼ ▽ 🔺 🔻 and more. All triangle characters in one page — click to copy.',
  keywords: ['triangle symbol', 'triangle emoji', 'arrow triangle', 'filled triangle', 'empty triangle', 'play button', 'direction indicator'],
};

const upTriangles = ['▲', '△', '▴', '▵', '🔺', '🔼'];

const downTriangles = ['▼', '▽', '▾', '▿', '🔻', '🔽'];

const rightTriangles = ['▶', '▷', '▸', '▹', '►', '▻'];

const leftTriangles = ['◀', '◁', '◂', '◃', '◄', '◅'];

const diamondTriangles = ['◆', '◇', '◈', '◊', '💎'];

const hexagons = ['⬥', '⬦', '⬧', '⬨', '⬩', '⬪', '⬫', '⬬', '⬭'];

const playPauseArrows = ['⏩', '⏪', '⏫', '⏬'];

const supplementalShapes = ['⟐', '⟡', '⟢', '⟣', '⟤', '⟥', '⧰', '⧱'];

export default function TrianglesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <CategoryNav current="/triangles" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-yellow-600 mb-4">Triangle Symbols & Characters</h1>
          <p className="text-xl text-[#8B95A1]">Copy 50+ triangle symbols in every direction. From pointing up ▲ to pointing down ▼, left ◀ and right ▶. Perfect for play buttons, directional indicators, decorative elements, and design projects.</p>
        </header>

        {/* Up Triangles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">▲ △ ▴ Up Triangles</h2>
            <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">{upTriangles.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Triangle symbols pointing upward in filled and hollow variants</p>
          <CopyGrid items={upTriangles} />
        </section>

        {/* Down Triangles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">▼ ▽ ▾ Down Triangles</h2>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{downTriangles.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Triangle symbols pointing downward for collapsible menus and dropdowns</p>
          <CopyGrid items={downTriangles} />
        </section>

        {/* Right Triangles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">▶ ▷ ▸ Right Triangles</h2>
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">{rightTriangles.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Triangle symbols pointing right perfect for play buttons and forward navigation</p>
          <CopyGrid items={rightTriangles} />
        </section>

        {/* Left Triangles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">◀ ◁ ◂ Left Triangles</h2>
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{leftTriangles.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Triangle symbols pointing left for back navigation and previous buttons</p>
          <CopyGrid items={leftTriangles} />
        </section>

        {/* Diamond & Jewel Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">◆ ◇ 💎 Diamond Shapes</h2>
            <span className="text-sm bg-[rgba(var(--accent-rgb),0.12)] text-[var(--accent)] px-3 py-1 rounded-full">{diamondTriangles.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Diamond and rhombus shapes formed by opposing triangles</p>
          <CopyGrid items={diamondTriangles} />
        </section>

        {/* Hexagons Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⬥ ⬦ ⬧ Hexagons</h2>
            <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">{hexagons.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Hexagonal and geometric shapes built from triangular components</p>
          <CopyGrid items={hexagons} />
        </section>

        {/* Play & Pause Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⏩ ⏪ ⏫ Play & Navigation</h2>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">{playPauseArrows.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Media control symbols using triangle designs</p>
          <CopyGrid items={playPauseArrows} />
        </section>

        {/* Supplemental Shapes Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⟐ ⟡ ⧰ Supplemental Shapes</h2>
            <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{supplementalShapes.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Advanced geometric and mathematical triangle-based shapes</p>
          <CopyGrid items={supplementalShapes} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">About Triangle Symbols</h2>
          <div className="text-[#8B95A1] space-y-4">
            <p>
              Triangle symbols are versatile Unicode characters used in interfaces, design, documents, and mathematics. Our collection of 50+ triangle symbols covers every direction and style, from basic directional triangles pointing up ▲, down ▼, left ◀, and right ▶ to diamonds, hexagons, and specialized geometric shapes.
            </p>
            <p>
              Whether you need play button triangles for media controls, dropdown indicators ▼ for collapsible menus, filled triangles ▲ for visual emphasis, hollow triangles △ for outlines, or diamond shapes ◆ for decorative purposes, you'll find exactly what you need. All triangles are instantly copyable with a single click.
            </p>
            <p>
              Triangle symbols have been standardized in Unicode and are supported across all modern devices, browsers, and applications. Use them in user interfaces, documents, presentations, websites, social media posts, design projects, and anywhere else you need directional indicators or geometric shapes.
            </p>
            <p>
              Our triangle library includes upward triangles, downward triangles, right triangles, left triangles, diamonds, hexagons, and supplemental geometric shapes. Each category is organized by direction and style for easy browsing and selection.
            </p>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="mt-12 bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Tips for Using Triangle Symbols</h2>
          <ul className="text-[#8B95A1] space-y-3">
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">▲</span>
              <span><strong>Copy with one click:</strong> Click any triangle symbol to instantly copy it to your clipboard</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">▲</span>
              <span><strong>UI indicators:</strong> Use ▼ for dropdowns, ▶ for collapsed menus, and ◀ for back buttons</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">▲</span>
              <span><strong>Play buttons:</strong> ▶ is perfect for media players and call-to-action buttons</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">▲</span>
              <span><strong>Decorative use:</strong> Combine triangles and diamonds for unique border designs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-600 font-bold">▲</span>
              <span><strong>Works everywhere:</strong> Triangle symbols display consistently across all devices and applications</span>
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
                name: 'What are triangle symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Triangle symbols are Unicode characters that represent triangles pointing in different directions. They include upward triangles ▲, downward triangles ▼, left triangles ◀, right triangles ▶, and geometric shapes like diamonds ◆. All triangles work in any text editor or application.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I copy triangle symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply click on any triangle symbol on this page to copy it to your clipboard. You can then paste it anywhere—in emails, documents, social media posts, websites, or interfaces. No special software is needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'What triangle symbol should I use for a play button?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The right-pointing triangle ▶ is perfect for play buttons. You can use the filled version ▶ for a solid appearance or the outlined version ▷ for a more subtle look.',
                },
              },
              {
                '@type': 'Question',
                name: 'What\'s the best triangle symbol for dropdown menus?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The downward-pointing triangle ▼ is ideal for indicating collapsed or expandable dropdown menus. It clearly shows that clicking will reveal more options below.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do triangle symbols work on all devices?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Triangle symbols are standardized Unicode characters supported on all modern devices, browsers, and applications including Windows, Mac, Linux, iPhone, and Android. They display consistently across platforms.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
