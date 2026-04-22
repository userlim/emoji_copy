import type { Metadata } from 'next'
import CopyGrid from '@/components/CopyGrid'
import CategoryNav from '@/components/CategoryNav'

export const metadata: Metadata = {
  title: '※ Reference Mark (당구장 기호) Copy and Paste | Special Symbols',
  description: '※ 당구장 기호 복사 붙여넣기. Copy reference marks, daggers, asterisks and special text symbols. ※ † ‡ § ¶ ♯ ♭ ♮ and more.',
  keywords: ['※ copy paste', '당구장 기호 복사', 'reference mark', 'dagger symbol', 'section sign', 'pilcrow', 'asterisk symbol', 'special text symbols'],
}

const referenceMarks = ['※', '⁂', '⁕', '⁑', '⁎', '⁏', '✱', '✲', '✳', '✴', '✵', '✶', '✷', '✸', '✹', '✺', '✻', '✼', '✽', '✾', '✿', '❀', '❁', '❂', '❃', '❇', '❈', '❉', '❊', '❋', '*', '⁕', '﹡', '＊', '✢', '✣', '✤', '✥', '⊛', '⊕', '⊗', '⊘', '⊙', '⊚', '⊜', '⊝']

const daggers = ['†', '‡', '⸿', '⸸', '⹋', '‣', '⁃', '◦', '∙', '⁌', '⁍']

const sectionSigns = ['§', '¶', '⸿', '♪', '♫', '♬', '♩', '♭', '♮', '♯']

const punctuation = ['·', '•', '‥', '…', '※', '‼', '⁇', '⁈', '⁉', '‽', '⸮', '¿', '¡', '«', '»', '‹', '›', '„', '\u201C', '\u201D', '\u2018', '\u2019', '‚', '′', '″', '‴', '⁗']

const copyrightLegal = ['©', '®', '™', '℠', '℗', '℃', '℉', '№', '℡', '℀', '℁', '℅', '℆', '⅍', '☊', '☋']

const dingbats = ['❖', '❥', '❦', '❧', '☙', '❡', '❢', '❣', '✦', '✧', '★', '☆', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '⊹', '❝', '❞', '〃', '〝', '〞', '〟']

const koreanCjk = ['※', '〒', '〠', '〶', '〷', '㊀', '㊁', '㊂', '㊃', '㊄', '㊅', '㊆', '㊇', '㊈', '㊉', '㉠', '㉡', '㉢', '㉣', '㉤', '㉥', '㉦', '㉧', '㉨', '㉩', '㉪', '㉫', '㉬', '㉭', '㈀', '㈁', '㈂', '㈃', '㈄', '㈅', '㈆', '㈇', '㈈', '㈉', '㈊', '㈋', '㈌', '㈍']

const enclosedNumbers = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩', '⑪', '⑫', '⑬', '⑭', '⑮', '⑯', '⑰', '⑱', '⑲', '⑳']

const enclosedUppercase = ['Ⓐ', 'Ⓑ', 'Ⓒ', 'Ⓓ', 'Ⓔ', 'Ⓕ', 'Ⓖ', 'Ⓗ', 'Ⓘ', 'Ⓙ', 'Ⓚ', 'Ⓛ', 'Ⓜ', 'Ⓝ', 'Ⓞ', 'Ⓟ', 'Ⓠ', 'Ⓡ', 'Ⓢ', 'Ⓣ', 'Ⓤ', 'Ⓥ', 'Ⓦ', 'Ⓧ', 'Ⓨ', 'Ⓩ']

const enclosedLowercase = ['ⓐ', 'ⓑ', 'ⓒ', 'ⓓ', 'ⓔ', 'ⓕ', 'ⓖ', 'ⓗ', 'ⓘ', 'ⓙ', 'ⓚ', 'ⓛ', 'ⓜ', 'ⓝ', 'ⓞ', 'ⓟ', 'ⓠ', 'ⓡ', 'ⓢ', 'ⓣ', 'ⓤ', 'ⓥ', 'ⓦ', 'ⓧ', 'ⓨ', 'ⓩ']

export default function ReferenceMarksPage() {
  return (
    <div className="min-h-screen">
      <CategoryNav current="/reference-marks" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-purple-600 mb-4">※ Reference Marks & Special Symbols</h1>
          <p className="text-xl text-gray-700">Copy 당구장 기호 (reference marks), daggers, asterisks, section signs, and special text symbols. Perfect for citations, footnotes, and decorative text.</p>
        </header>

        {/* Reference Marks & Asterisks Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">※ Reference Marks & Asterisks</h2>
            <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{referenceMarks.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Universal reference marks including the iconic ※ (당구장 기호) used in Korean and Japanese typography</p>
          <CopyGrid items={referenceMarks} />
        </section>

        {/* Daggers & Footnote Marks Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">† Daggers & Footnote Marks</h2>
            <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{daggers.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Dagger symbols (obelus) traditionally used for footnotes and annotations in documents</p>
          <CopyGrid items={daggers} />
        </section>

        {/* Section & Paragraph Signs Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">§ Section & Paragraph Signs</h2>
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{sectionSigns.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Section signs (pilcrow), paragraph marks, and musical notation symbols used in legal and academic documents</p>
          <CopyGrid items={sectionSigns} />
        </section>

        {/* Punctuation & Text Marks Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">· Punctuation & Text Marks</h2>
            <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">{punctuation.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Special punctuation marks, quotation variants, and typographic ornaments</p>
          <CopyGrid items={punctuation} />
        </section>

        {/* Copyright & Legal Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">© Copyright & Legal Marks</h2>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">{copyrightLegal.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Copyright, trademark, registered, and other legal/technical symbols</p>
          <CopyGrid items={copyrightLegal} />
        </section>

        {/* Dingbat / Ornament Marks Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">❖ Dingbat & Ornament Marks</h2>
            <span className="text-sm bg-rose-100 text-rose-700 px-3 py-1 rounded-full">{dingbats.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Decorative dingbat symbols, ornamental marks, and fancy text decorations</p>
          <CopyGrid items={dingbats} />
        </section>

        {/* Korean/CJK Reference Marks Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">㊀ Korean/CJK Reference Marks</h2>
            <span className="text-sm bg-amber-100 text-amber-700 px-3 py-1 rounded-full">{koreanCjk.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Specialized reference marks and enclosed characters used in Korean, Chinese, and Japanese typography</p>
          <CopyGrid items={koreanCjk} />
        </section>

        {/* Enclosed Numbers Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">① Enclosed Numbers (1-20)</h2>
            <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">{enclosedNumbers.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Numbers enclosed in circles, useful for lists, rankings, and numbered items</p>
          <CopyGrid items={enclosedNumbers} />
        </section>

        {/* Enclosed Uppercase Letters Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Ⓐ Enclosed Uppercase Letters</h2>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{enclosedUppercase.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Uppercase letters enclosed in circles for categorization and highlighting</p>
          <CopyGrid items={enclosedUppercase} />
        </section>

        {/* Enclosed Lowercase Letters Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">ⓐ Enclosed Lowercase Letters</h2>
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">{enclosedLowercase.length} symbols</span>
          </div>
          <p className="text-gray-600 mb-6">Lowercase letters enclosed in circles for modern and creative text decoration</p>
          <CopyGrid items={enclosedLowercase} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Reference Marks & Special Symbols</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Reference marks are essential typographic symbols used across various languages and writing systems. The most iconic is the※ symbol, known as "당구장 기호" in Korean, which translates to "billiard hall mark." Despite its name, this symbol is widely used in Korean, Japanese, and Chinese typography as a general reference mark, footnote indicator, or decorative element.
            </p>
            <p>
              Traditional reference marks like daggers (†, ‡) and section signs (§) have been used in Western typography for centuries to mark footnotes, endnotes, and special sections in academic and legal documents. These symbols help organize complex documents by directing readers to additional information or explanations.
            </p>
            <p>
              In Korean and East Asian languages, enclosed characters (㊀-㊉, ㉠-㉩) and CJK reference marks serve both practical and aesthetic purposes. They're used for highlighting, categorization, and creating visually distinct text in documents and digital media.
            </p>
            <p>
              The asterisk (*) and its variations are perhaps the most universally recognized reference marks, used across all languages and platforms. Dingbat symbols and decorative marks add visual interest to text, making them popular for creative writing, poetry, and social media content.
            </p>
            <p>
              Our comprehensive collection includes 200+ reference marks, daggers, asterisks, section signs, and special text symbols. Whether you need traditional footnote markers, modern decorative symbols, or specialized Korean/CJK characters, you'll find what you need. All symbols can be copied with a single click and work across all platforms and devices.
            </p>
          </div>
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
                name: '※ 기호란 무엇인가요? (What is the ※ symbol?)',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '※ 기호는 "당구장 기호" (billiard hall mark)로도 불리며, 한국, 일본, 중국 등의 동아시아 언어에서 널리 사용되는 참조 기호입니다. 각주, 주석, 또는 특별한 표시가 필요한 텍스트에 주로 사용됩니다. (The ※ symbol, known as "당구장 기호" in Korean, is a reference mark widely used in East Asian languages including Korean, Japanese, and Chinese for footnotes, annotations, and highlighting special text.)',
                },
              },
              {
                '@type': 'Question',
                name: '※ 기호 어떻게 입력하나요? (How do I type the ※ symbol?)',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '가장 쉬운 방법은 이 페이지에서 기호를 복사하여 붙여넣기 하는 것입니다. 또는 Windows에서 문자표(Character Map)를 사용하거나, 한글 입력기에서 특수 기호 메뉴를 통해 입력할 수 있습니다. (The easiest way is to copy the symbol from this page. Alternatively, you can use the Windows Character Map, or access special symbols through your input method editor.)',
                },
              },
              {
                '@type': 'Question',
                name: 'What are dagger symbols (†, ‡) used for?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Dagger symbols, also called obelus marks, are traditionally used in academic, legal, and scholarly documents to indicate footnotes, endnotes, and annotations. The single dagger (†) is used for the first reference, followed by the double dagger (‡) for subsequent references.',
                },
              },
              {
                '@type': 'Question',
                name: '§ 섹션 기호와 ¶ 필크로 기호의 차이는? (What\'s the difference between § and ¶?)',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '§는 섹션 기호로 법률 문서에서 특정 섹션을 참조할 때 사용되고, ¶는 필크로(pilcrow) 기호로 단락의 시작을 나타낼 때 사용됩니다. (§ is the section sign used to reference specific sections in legal documents, while ¶ is the pilcrow symbol used to mark paragraph breaks.)',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use these symbols in all documents and platforms?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! All the reference marks and special symbols on this page are standard Unicode characters that work across all modern platforms, devices, and applications including Word, Google Docs, social media, and web browsers. No special software is required.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
