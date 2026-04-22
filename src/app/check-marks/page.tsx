import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: "Check Mark Symbols Copy and Paste ✓ ✔ ✗ ✘ | Tick & Cross",
  description: "Copy and paste check marks, tick symbols, crosses, and validation symbols. Perfect for lists, forms, and documentation.",
  keywords: "check mark, tick symbol, cross, ✓, ✔, ✗, validation",
  openGraph: {
    title: "Check Mark Symbols Copy and Paste ✓ ✔ ✗ ✘",
    description: "Copy and paste check marks and tick symbols easily.",
    type: "website",
  },
};

const checkmarkSymbols = [
  "✓", "✔", "✕", "✖", "✗", "✘", "☑", "☐", "☒", "✅", "❌", "❎", "⍻", "⊘", "⊗", "⊖", "⊕", "○", "●", "◉", "◎", "◯", "☑️", "✔️", "☓", "✕", "⭕", "🔴", "🟢", "◻️", "◼️", "◽", "◾", "▪️", "▫️", "🔲", "🔳", "⬛", "⬜", "🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫"
];

export default function CheckMarksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
      <CategoryNav current="/check-marks" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-100 mb-4">Check Mark & Tick Symbols</h1>
          <p className="text-xl text-[#8B95A1]">Copy and paste check marks, tick symbols, crosses, and validation symbols. Use them in lists, forms, documents, and more.</p>
        </div>

        <div className="bg-white/[0.03] rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">All Check Mark Symbols</h2>
          <CopyGrid items={checkmarkSymbols} />
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white/[0.03] rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">What's the difference between ✓ and ✔?</h3>
              <p className="text-[#8B95A1]">Both are check mark symbols but have slightly different styles. ✓ is a lighter tick mark while ✔ is a heavier, more prominent check mark. Both serve the same purpose.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Which check mark should I use in documents?</h3>
              <p className="text-[#8B95A1]">For professional documents, ✓ or ✔ work well. For digital forms and applications, ✅ (emoji) is more visually appealing and widely supported.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Can I use check marks in spreadsheets?</h3>
              <p className="text-[#8B95A1]">Yes! All check mark symbols can be used in spreadsheets like Excel and Google Sheets for marking completed items or yes/no columns.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">What's the difference between check marks and crosses?</h3>
              <p className="text-[#8B95A1]">Check marks (✓, ✔, ✅) indicate approval or completion. Crosses (✗, ✘, ❌) indicate rejection, disapproval, or incomplete items.</p>
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
                "name": "What's the difference between ✓ and ✔?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both are check mark symbols but have slightly different styles. ✓ is a lighter tick mark while ✔ is a heavier, more prominent check mark. Both serve the same purpose."
                }
              },
              {
                "@type": "Question",
                "name": "Which check mark should I use in documents?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For professional documents, ✓ or ✔ work well. For digital forms and applications, ✅ is more visually appealing and widely supported."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use check marks in spreadsheets?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all check mark symbols can be used in spreadsheets like Excel and Google Sheets for marking completed items or yes/no columns."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between check marks and crosses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Check marks indicate approval or completion. Crosses indicate rejection, disapproval, or incomplete items."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
