import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: "Bracket Symbols Copy and Paste 【】「」『』 | All Brackets",
  description: "Copy and paste bracket symbols including round, square, curly, angle, CJK, and decorative brackets. Perfect for writing, coding, and design.",
  keywords: "bracket symbols, parentheses, square brackets, curly braces, angle brackets, copy paste",
  openGraph: {
    title: "Bracket Symbols Copy and Paste 【】「」『』",
    description: "Copy and paste all types of bracket symbols easily.",
    type: "website",
  },
};

const bracketSymbols = {
  "Round": ["(", ")", "⁽", "⁾", "₍", "₎", "⸨", "⸩"],
  "Square": ["[", "]", "「", "」", "『", "』"],
  "Curly": ["{", "}", "❴", "❵"],
  "Angle": ["<", ">", "‹", "›", "«", "»", "⟨", "⟩", "⟪", "⟫", "⸤", "⸥"],
  "CJK": ["【", "】", "〖", "〗", "〘", "〙", "〚", "〛", "〔", "〕", "〈", "〉", "《", "》", "「", "」", "『", "』"],
  "Full-width": ["（", "）", "［", "］", "｛", "｝", "＜", "＞"],
  "Decorative": ["⌈", "⌉", "⌊", "⌋", "⦃", "⦄", "⦅", "⦆", "⦇", "⦈", "⦉", "⦊", "⦋", "⦌", "⦍", "⦎", "⦏", "⦐"],
};

export default function BracketsPage() {
  return (
    <main className="min-h-screen py-12">
      <CategoryNav current="/brackets" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Bracket Symbols</h1>
          <p className="text-xl text-gray-700">Copy and paste bracket symbols including round, square, curly, angle, CJK, and decorative brackets. Perfect for writing, coding, design, and international text.</p>
        </div>

        <div className="space-y-12">
          {Object.entries(bracketSymbols).map(([category, symbols]) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category} Brackets</h2>
              <CopyGrid items={symbols} />
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between brackets and parentheses?</h3>
              <p className="text-gray-700">Parentheses ( ) are round brackets used for additional information or grouping. Square brackets [ ] are used for clarification or omitted text. Curly braces { } are mainly used in programming. Angle brackets &lt; &gt; are used in programming and markup languages.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When should I use CJK brackets?</h3>
              <p className="text-gray-700">CJK brackets (【】「」『』) are primarily used in Chinese, Japanese, and Korean text. They follow the typography conventions of these languages and should be used when writing in these languages.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are full-width brackets used for?</h3>
              <p className="text-gray-700">Full-width brackets are used in East Asian typography to match the width of full-width characters. They're commonly used in Japanese, Chinese, and Korean text.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use decorative brackets in documents?</h3>
              <p className="text-gray-700">Decorative brackets are great for adding visual interest to documents, poetry, or design work. They work in most applications but may need special fonts for older systems.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to use matching closing brackets?</h3>
              <p className="text-gray-700">Yes, for proper formatting and grammar, you should always use matching opening and closing brackets. For example, if you open with (, close with ).</p>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What's the difference between brackets and parentheses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Parentheses ( ) are round brackets used for additional information or grouping. Square brackets [ ] are used for clarification or omitted text. Curly braces { } are mainly used in programming. Angle brackets &lt; &gt; are used in programming and markup languages."
                }
              },
              {
                "@type": "Question",
                "name": "When should I use CJK brackets?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CJK brackets are primarily used in Chinese, Japanese, and Korean text. They follow the typography conventions of these languages and should be used when writing in these languages."
                }
              },
              {
                "@type": "Question",
                "name": "What are full-width brackets used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Full-width brackets are used in East Asian typography to match the width of full-width characters. They're commonly used in Japanese, Chinese, and Korean text."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use decorative brackets in documents?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Decorative brackets are great for adding visual interest to documents, poetry, or design work."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to use matching closing brackets?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, for proper formatting and grammar, you should always use matching opening and closing brackets."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
