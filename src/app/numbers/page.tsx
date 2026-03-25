import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: "Number Symbols Copy and Paste ① ② ❶ ❷ | Circled Numbers",
  description: "Copy and paste circled numbers, Roman numerals, superscript and subscript numbers. Perfect for lists, notation, and special formatting.",
  keywords: "circled numbers, Roman numerals, number symbols, superscript, subscript, copy paste",
  openGraph: {
    title: "Number Symbols Copy and Paste ① ② ❶ ❷",
    description: "Copy and paste circled numbers and special number symbols.",
    type: "website",
  },
};

const numberSymbols = {
  "Circled": ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"],
  "Negative Circled": ["❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽", "❾", "❿", "⓫", "⓬", "⓭", "⓮", "⓯", "⓰", "⓱", "⓲", "⓳", "⓴"],
  "Parenthesized": ["⑴", "⑵", "⑶", "⑷", "⑸", "⑹", "⑺", "⑻", "⑼", "⑽", "⑾", "⑿", "⒀", "⒁", "⒂", "⒃", "⒄", "⒅", "⒆", "⒇"],
  "Period": ["⒈", "⒉", "⒊", "⒋", "⒌", "⒍", "⒎", "⒏", "⒐", "⒑", "⒒", "⒓", "⒔", "⒕", "⒖", "⒗", "⒘", "⒙", "⒚", "⒛"],
  "Roman": ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ", "Ⅹ", "Ⅺ", "Ⅻ", "ⅰ", "ⅱ", "ⅲ", "ⅳ", "ⅴ", "ⅵ", "ⅶ", "ⅷ", "ⅸ", "ⅹ", "ⅺ", "ⅻ"],
  "Superscript": ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
  "Subscript": ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"],
  "Full-width": ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
};

export default function NumbersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <CategoryNav current="/numbers" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Number Symbols & Circled Numbers</h1>
          <p className="text-xl text-gray-700">Copy and paste circled numbers, Roman numerals, superscript, subscript, and special number formatting. Perfect for lists, equations, and technical notation.</p>
        </div>

        <div className="space-y-12">
          {Object.entries(numberSymbols).map(([category, symbols]) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category} Numbers</h2>
              <CopyGrid items={symbols} />
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are circled numbers used for?</h3>
              <p className="text-gray-700">Circled numbers (①②③) are commonly used for numbered lists, bullet points, and visual indexing. They're especially popular in East Asian typography and add visual interest to documents.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between circled and negative circled numbers?</h3>
              <p className="text-gray-700">Circled numbers (①) have the circle in the background with dark numbers. Negative circled numbers (❶) have dark circles with light numbers inside, creating a reversed or inverted appearance.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When should I use Roman numerals?</h3>
              <p className="text-gray-700">Roman numerals (Ⅰ Ⅱ Ⅲ) are traditionally used for outline numbering, chapter numbers in books, movie sequels, copyright dates, and formal documents. They add a classical or formal appearance.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are superscript and subscript numbers?</h3>
              <p className="text-gray-700">Superscript numbers (¹²³) appear above the baseline and are used for footnotes, exponents, and citations. Subscript numbers (₁₂₃) appear below and are used in chemistry formulas and mathematical notation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are full-width numbers?</h3>
              <p className="text-gray-700">Full-width numbers (０１２) are used in East Asian typography to match the width of full-width characters. They're commonly used in Japanese, Chinese, and Korean documents.</p>
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
                "name": "What are circled numbers used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Circled numbers are commonly used for numbered lists, bullet points, and visual indexing. They're especially popular in East Asian typography and add visual interest to documents."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between circled and negative circled numbers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Circled numbers have the circle in the background with dark numbers. Negative circled numbers have dark circles with light numbers inside, creating a reversed or inverted appearance."
                }
              },
              {
                "@type": "Question",
                "name": "When should I use Roman numerals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Roman numerals are traditionally used for outline numbering, chapter numbers in books, movie sequels, copyright dates, and formal documents."
                }
              },
              {
                "@type": "Question",
                "name": "What are superscript and subscript numbers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Superscript numbers appear above the baseline and are used for footnotes, exponents, and citations. Subscript numbers appear below and are used in chemistry formulas and mathematical notation."
                }
              },
              {
                "@type": "Question",
                "name": "What are full-width numbers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Full-width numbers are used in East Asian typography to match the width of full-width characters. They're commonly used in Japanese, Chinese, and Korean documents."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
