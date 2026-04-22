import { Metadata } from 'next'
import CopyGrid from '@/components/CopyGrid'
import CategoryNav from '@/components/CategoryNav'

export const metadata: Metadata = {
  title: 'Greek Letters Copy and Paste α β γ δ Ω Σ Π',
  description: 'Copy and paste Greek letters including uppercase, lowercase, and variants. Perfect for mathematics, science, sororities, and academic writing.',
  keywords: 'greek letters, greek alphabet, alpha beta gamma, math symbols, copy paste',
}

export default function GreekPage() {
  const uppercaseLetters = 'Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω'.split(' ')

  const lowercaseLetters = 'α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ ς τ υ φ χ ψ ω'.split(' ')

  const variantLetters = 'ϐ ϑ ϒ ϓ ϔ ϕ ϖ ϗ Ϙ ϙ Ϛ ϛ Ϝ ϝ Ϟ ϟ Ϡ ϡ Ϣ ϣ Ϥ ϥ Ϧ ϧ Ϩ ϩ Ϫ ϫ Ϭ ϭ Ϯ ϯ ϰ ϱ ϲ ϳ ϴ ϵ'.split(' ')

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-8">
      <CategoryNav current="/greek" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-100">
          Greek Letters Copy and Paste
        </h1>
        <p className="text-center text-[#8B95A1] mb-12">
          Discover and copy Greek alphabet letters for math, science, and academic writing
        </p>

        <div className="space-y-12">
          {/* Uppercase Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">Α Β Γ Uppercase Letters</h2>
            <CopyGrid items={uppercaseLetters} />
          </section>

          {/* Lowercase Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">α β γ Lowercase Letters</h2>
            <CopyGrid items={lowercaseLetters} />
          </section>

          {/* Variants Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">ϐ ϑ ϕ Letter Variants</h2>
            <CopyGrid items={variantLetters} />
          </section>
        </div>

        {/* SEO Content */}
        <section className="mt-16 bg-white/[0.03] rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Greek Letters Copy and Paste Guide</h2>
          <div className="prose prose-sm max-w-none text-[#8B95A1] space-y-4">
            <p>
              Greek letters are essential symbols used in mathematics, science, engineering, and academia. From alpha (α) to omega (ω), these characters are fundamental in equations, formulas, and scientific notation.
            </p>
            <p>
              Our comprehensive collection includes the complete Greek alphabet in uppercase and lowercase, plus letter variants used in specialized mathematical and scientific contexts. Whether you need basic letters like α, β, γ or specialized variants, you'll find them here.
            </p>
            <p>
              Perfect for academic papers, scientific writing, mathematical equations, and educational materials. All Greek letters are compatible with word processors, mathematical typesetting software, and web platforms.
            </p>
          </div>
        </section>

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
                  name: 'What are Greek letters used for?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Greek letters are used in mathematics, science, engineering, and academia for equations, formulas, and scientific notation. They are also used in fraternity and sorority names.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I copy Greek letters?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simply click on any Greek letter you want to copy. It will be copied to your clipboard and you can paste it in your academic papers, equations, or wherever you need.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are Greek letters compatible with all applications?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Greek letters are Unicode characters and are compatible with all modern word processors, mathematical software, and web platforms.',
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </main>
  )
}
