import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: "Math Symbols Copy and Paste ± ÷ × ∑ ∞ | Mathematical Symbols",
  description: "Copy and paste mathematical symbols including algebra, calculus, set theory, logic, Greek letters, fractions, and more. Perfect for scientific writing and equations.",
  keywords: "math symbols, mathematical notation, algebra, calculus, Greek letters, infinity, plus minus",
  openGraph: {
    title: "Math Symbols Copy and Paste ± ÷ × ∑ ∞",
    description: "Copy and paste mathematical symbols easily.",
    type: "website",
  },
};

const mathSymbols = {
  "Basic": ["+", "−", "×", "÷", "=", "≠", "≈", "≡", "≢", "<", ">", "≤", "≥", "≪", "≫", "±", "∓", "∞"],
  "Algebra": ["√", "∛", "∜", "∫", "∬", "∭", "∮", "∯", "∰", "∂", "∆", "∇", "∑", "∏", "∐"],
  "Set Theory": ["∈", "∉", "∋", "∌", "⊂", "⊃", "⊄", "⊅", "⊆", "⊇", "⊈", "⊉", "∪", "∩", "∅", "⊕", "⊗", "⊖"],
  "Logic": ["∧", "∨", "¬", "⊻", "⊼", "⊽", "∀", "∃", "∄", "⊢", "⊣", "⊤", "⊥", "⊦", "⊧", "⊨", "⊩"],
  "Greek": ["π", "θ", "φ", "ω", "α", "β", "γ", "δ", "ε", "ζ", "η", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "ρ", "σ", "τ", "υ", "χ", "ψ", "Π", "Σ", "Φ", "Ω", "Γ", "Δ", "Θ", "Λ"],
  "Fractions": ["½", "⅓", "⅔", "¼", "¾", "⅕", "⅖", "⅗", "⅘", "⅙", "⅚", "⅛", "⅜", "⅝", "⅞"],
  "Superscript": ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹", "⁺", "⁻", "⁼", "⁽", "⁾", "ⁿ"],
  "Subscript": ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉", "₊", "₋", "₌", "₍", "₎"],
};

export default function MathPage() {
  return (
    <main className="min-h-screen py-12">
      <CategoryNav current="/math" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Mathematical Symbols</h1>
          <p className="text-xl text-gray-700">Copy and paste mathematical symbols for algebra, calculus, set theory, logic, and more. Perfect for scientific writing, equations, and technical documents.</p>
        </div>

        <div className="space-y-12">
          {Object.entries(mathSymbols).map(([category, symbols]) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
              <CopyGrid items={symbols} />
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use math symbols in Microsoft Word?</h3>
              <p className="text-gray-700">Yes, all these mathematical symbols can be pasted directly into Word documents. Some may require specific fonts for proper display, but most are universally supported.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are these symbols better than using LaTeX?</h3>
              <p className="text-gray-700">These Unicode symbols are great for simple equations and documents. For complex mathematical typesetting, LaTeX is still the professional standard, but Unicode symbols work well for quick notation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between × and *?</h3>
              <p className="text-gray-700">× is the proper multiplication symbol for mathematical notation. The asterisk (*) is typically used in programming and spreadsheets. For formal mathematics, use ×.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use Greek letters in email?</h3>
              <p className="text-gray-700">Yes, Greek letters are standard Unicode characters and work in all email clients and applications. They may display slightly differently depending on the font, but are universally supported.</p>
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
                "name": "Can I use math symbols in Microsoft Word?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all these mathematical symbols can be pasted directly into Word documents. Some may require specific fonts for proper display, but most are universally supported."
                }
              },
              {
                "@type": "Question",
                "name": "Are these symbols better than using LaTeX?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "These Unicode symbols are great for simple equations and documents. For complex mathematical typesetting, LaTeX is still the professional standard, but Unicode symbols work well for quick notation."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between × and *?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "× is the proper multiplication symbol for mathematical notation. The asterisk is typically used in programming and spreadsheets. For formal mathematics, use ×."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use Greek letters in email?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Greek letters are standard Unicode characters and work in all email clients and applications."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
