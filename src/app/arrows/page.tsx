import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Arrow Symbols Copy and Paste ← → ↑ ↓ ➤ | 250+ Arrows',
  description: 'Copy and paste 250+ arrow symbols ← → ↑ ↓ ↔ ↕ ➤ ➜ ⇐ ⇒ ⬅ ➡ and more. All arrow characters in one page — click to copy.',
  keywords: ['arrow symbol copy paste', 'arrow emoji', 'right arrow symbol', 'left arrow', 'up arrow', 'down arrow', 'double arrow'],
};

const basicArrows = ['←', '→', '↑', '↓', '↔', '↕', '↖', '↗', '↘', '↙', '↚', '↛', '↜', '↝', '↞', '↟', '↠', '↡', '↢', '↣', '↤', '↥', '↦', '↧', '↨'];

const returnHookArrows = ['↩', '↪', '↫', '↬', '↭', '↮', '↯', '↰', '↱', '↲', '↳', '↴', '↵', '↶', '↷', '↸', '↹', '↺', '↻'];

const harpoonArrows = ['↼', '↽', '↾', '↿', '⇀', '⇁', '⇂', '⇃'];

const doubleArrows = ['⇄', '⇅', '⇆', '⇇', '⇈', '⇉', '⇊', '⇋', '⇌', '⇍', '⇎', '⇏', '⇐', '⇑', '⇒', '⇓', '⇔', '⇕', '⇖', '⇗', '⇘', '⇙', '⇚', '⇛', '⇜', '⇝', '⇞', '⇟', '⇠', '⇡', '⇢', '⇣', '⇤', '⇥'];

const whiteOutlineArrows = ['⇦', '⇧', '⇨', '⇩', '⇪', '⇫', '⇬', '⇭', '⇮', '⇯', '⇰', '⇱', '⇲', '⇳', '⇴', '⇵', '⇶', '⇷', '⇸', '⇹', '⇺', '⇻', '⇼', '⇽', '⇾', '⇿'];

const heavyDingbatArrows = ['➔', '➘', '➙', '➚', '➛', '➜', '➝', '➞', '➟', '➠', '➡', '➢', '➣', '➤', '➥', '➦', '➧', '➨', '➩', '➪', '➫', '➬', '➭', '➮', '➯', '➱', '➲', '➳', '➴', '➵', '➶', '➷', '➸', '➹', '➺', '➻', '➼', '➽', '➾'];

const supplementalArrows = ['⟰', '⟱', '⟲', '⟳', '⟴', '⟵', '⟶', '⟷', '⟸', '⟹', '⟺', '⟻', '⟼', '⟽', '⟾', '⟿'];

const miscellaneousArrows = ['⤀', '⤁', '⤂', '⤃', '⤄', '⤅', '⤆', '⤇', '⤈', '⤉', '⤊', '⤋', '⤌', '⤍', '⤎', '⤏', '⤐', '⤑', '⤒', '⤓', '⤔', '⤕', '⤖', '⤗', '⤘', '⤙', '⤚', '⤛', '⤜', '⤝', '⤞', '⤟', '⤠', '⤡', '⤢', '⤣', '⤤', '⤥', '⤦', '⤧', '⤨', '⤩', '⤪', '⤫', '⤬', '⤭', '⤮', '⤯', '⤰', '⤱', '⤲', '⤳', '⤴', '⤵', '⤶', '⤷', '⤸', '⤹', '⤺', '⤻', '⤼', '⤽', '⤾', '⤿', '⥀', '⥁', '⥂', '⥃', '⥄', '⥅', '⥆', '⥇', '⥈', '⥉', '⥊', '⥋', '⥌', '⥍', '⥎', '⥏', '⥐', '⥑', '⥒', '⥓', '⥔', '⥕', '⥖', '⥗', '⥘', '⥙', '⥚', '⥛', '⥜', '⥝', '⥞', '⥟', '⥠', '⥡', '⥢', '⥣', '⥤', '⥥', '⥦', '⥧', '⥨', '⥩', '⥪', '⥫', '⥬', '⥭', '⥮', '⥯', '⥰', '⥱', '⥲', '⥳', '⥴', '⥵', '⥶', '⥷', '⥸', '⥹', '⥺', '⥻', '⥼', '⥽', '⥾', '⥿'];

const boldEmojiArrows = ['⬅', '⬆', '⬇', '⬈', '⬉', '⬊', '⬋', '⬌', '⬍', '⬎', '⬏', '⬐', '⬑', '⬰', '⬱', '⬲', '⬳', '⬴', '⬵', '⬶', '⬷', '⬸', '⬹', '⬺', '⬻', '⬼', '⬽', '⬾', '⬿', '⭀', '⭁', '⭂', '⭃', '⭄', '⭅', '⭆', '⭇', '⭈', '⭉', '⭊', '⭋', '⭌'];

const triangleArrows = ['▶', '◀', '▲', '▼', '►', '◄', '▸', '◂', '▴', '▾', '△', '▽', '◁', '▷', '◃', '▹'];

const emojiArrows = ['⮕', '⮐', '⮑', '⮒', '⮓', '⭠', '⭡', '⭢', '⭣', '⭤', '⭥', '⭦', '⭧', '⭨', '⭩', '⮂', '⮃', '⮄', '⮅', '⮆', '⮇'];

export default function ArrowsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <CategoryNav current="/arrows" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Arrow Symbols & Characters</h1>
          <p className="text-xl text-gray-300">Copy 250+ arrow symbols in every direction. From basic arrows ← → ↑ ↓ to complex double arrows ⇒ ⇐ and decorative variants. Perfect for documents, messages, and design projects.</p>
        </header>

        {/* Basic Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">← → ↑ ↓ Basic Arrows</h2>
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{basicArrows.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Standard directional arrows: left, right, up, down, and diagonals</p>
          <CopyGrid items={basicArrows} />
        </section>

        {/* Return & Hook Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">↩ ↪ Return & Hook Arrows</h2>
            <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">{returnHookArrows.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Curved arrows perfect for indicating returns, replies, and loops</p>
          <CopyGrid items={returnHookArrows} />
        </section>

        {/* Harpoon Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">↼ ↽ Harpoon Arrows</h2>
            <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{harpoonArrows.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Specialized harpoon-style arrows with partial heads</p>
          <CopyGrid items={harpoonArrows} />
        </section>

        {/* Double & Paired Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⇐ ⇒ ⇔ Double & Paired Arrows</h2>
            <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{doubleArrows.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Double-line arrows for emphasis and special meanings</p>
          <CopyGrid items={doubleArrows} />
        </section>

        {/* White/Outline Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⇦ ⇨ White & Outline Arrows</h2>
            <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">{whiteOutlineArrows.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Outlined and hollow arrow variants for unique styling</p>
          <CopyGrid items={whiteOutlineArrows} />
        </section>

        {/* Heavy/Dingbat Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">➤ ➜ ➡ Heavy & Dingbat Arrows</h2>
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">{heavyDingbatArrows.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Bold, thick arrows for prominent directional indicators</p>
          <CopyGrid items={heavyDingbatArrows} />
        </section>

        {/* Supplemental Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⟵ ⟶ ⟷ Supplemental Arrows</h2>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{supplementalArrows.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Extended arrow symbols from Unicode's supplemental planes</p>
          <CopyGrid items={supplementalArrows} />
        </section>

        {/* Miscellaneous Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⤀ ⤁ ⤂ Miscellaneous Arrows</h2>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">{miscellaneousArrows.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Advanced and specialized arrow characters for complex documents</p>
          <CopyGrid items={miscellaneousArrows} />
        </section>

        {/* Bold/Emoji Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⬅ ⬆ ⬇ Bold & Emoji Arrows</h2>
            <span className="text-sm bg-teal-100 text-teal-700 px-3 py-1 rounded-full">{boldEmojiArrows.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Solid, bold arrows perfect for UI design and social media</p>
          <CopyGrid items={boldEmojiArrows} />
        </section>

        {/* Triangle Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">▶ ◀ ▲ ▼ Triangle Arrows</h2>
            <span className="text-sm bg-violet-100 text-violet-700 px-3 py-1 rounded-full">{triangleArrows.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Geometric triangle-based arrow characters</p>
          <CopyGrid items={triangleArrows} />
        </section>

        {/* Emoji Arrows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⮕ ⭠ ⭡ Emoji Arrows</h2>
            <span className="text-sm bg-fuchsia-100 text-fuchsia-700 px-3 py-1 rounded-full">{emojiArrows.length} symbols</span>
          </div>
          <p className="text-gray-400 mb-6">Modern emoji-style arrows with smooth, rounded designs</p>
          <CopyGrid items={emojiArrows} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">About Arrow Symbols</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Arrow symbols are essential Unicode characters used across writing, design, documentation, and digital communication. Our collection of 250+ arrow symbols covers every direction and style imaginable, from basic directional arrows to complex mathematical and technical arrows.
            </p>
            <p>
              Whether you need simple arrows ← → ↑ ↓ for documents, decorative arrows ⟹ ⟸ for creative projects, or specialized arrows for mathematical notation, you'll find exactly what you're looking for. All arrows are instantly copyable with a single click—no special software required.
            </p>
            <p>
              Arrow symbols have been standardized in Unicode since the earliest versions and are supported across all modern devices, browsers, and applications. Use them in emails, social media posts, website content, presentations, and anywhere else you need directional indicators or decorative elements.
            </p>
            <p>
              Our arrow library includes basic directional arrows, double-line arrows for emphasis, curved return arrows, harpoon variants, supplemental arrows, and modern emoji-style designs. Each category is organized by style and direction for easy browsing and selection.
            </p>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Tips for Using Arrow Symbols</h2>
          <ul className="text-gray-300 space-y-3">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Copy with one click:</strong> Click any arrow symbol to instantly copy it to your clipboard</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Works everywhere:</strong> Arrow symbols work in emails, documents, social media, and websites</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Choose by direction:</strong> Find left arrows, right arrows, up arrows, down arrows, and diagonals</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Mix styles:</strong> Combine basic arrows with decorative variants for unique designs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Consistent display:</strong> Unlike graphics, arrow symbols display identically on all devices</span>
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
                name: 'What are arrow symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Arrow symbols are Unicode characters that represent directions and movement. They include basic arrows like ← → ↑ ↓, decorative variants, and specialized mathematical arrows. All arrows work in any text editor or application.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I copy arrow symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply click on any arrow symbol on this page to copy it to your clipboard. You can then paste it anywhere—in emails, documents, social media posts, or websites. No special software is needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between basic and decorative arrows?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Basic arrows (← → ↑ ↓) are simple directional indicators. Decorative arrows include double-line arrows (⇒), curved arrows (↩), harpoon styles (↼), and emoji variants (⬅). Each style serves different purposes.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do arrow symbols work on all devices?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Arrow symbols are standardized Unicode characters supported on all modern devices, browsers, and applications including Windows, Mac, Linux, iPhone, and Android. They display consistently across platforms.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use arrow symbols in my social media posts?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely! Arrow symbols work perfectly in social media posts on Facebook, Twitter, Instagram, LinkedIn, and other platforms. Simply copy your desired arrow and paste it into your post or comment.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
