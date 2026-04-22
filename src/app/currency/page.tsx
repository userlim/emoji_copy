import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: "Currency Symbols Copy and Paste $ € £ ¥ ₿ | Money Signs",
  description: "Copy and paste currency symbols from around the world. Includes dollar, euro, pound, yen, bitcoin, and many more international currency signs.",
  keywords: "currency symbols, money signs, dollar, euro, pound, yen, bitcoin, copy paste",
  openGraph: {
    title: "Currency Symbols Copy and Paste $ € £ ¥ ₿",
    description: "Copy and paste currency symbols from around the world.",
    type: "website",
  },
};

const currencySymbols = [
  "$", "€", "£", "¥", "₩", "¢", "₽", "₹", "₿", "₺", "₴", "₦", "₫", "₡", "₣", "₤", "₥", "₧", "₨", "₪", "₮", "₯", "₰", "₱", "₲", "₳", "₵", "₶", "₷", "₸", "₻", "₼", "₾", "₠", "₢", "元", "円", "圓", "﷼", "؋", "฿", "៛", "₭", "₮", "₦", "₨", "₩", "₪", "₫", "₭", "₮", "₯", "₰", "💰", "💵", "💴", "💶", "💷", "💸", "💳", "🪙", "🏧", "💲"
];

export default function CurrencyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 py-12">
      <CategoryNav current="/currency" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-100 mb-4">Currency Symbols & Money Signs</h1>
          <p className="text-xl text-[#8B95A1]">Copy and paste currency symbols from around the world. Find dollar signs, euros, pounds, yen, bitcoin, and international money symbols.</p>
        </div>

        <div className="bg-white/[0.03] rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">All Currency Symbols</h2>
          <CopyGrid items={currencySymbols} />
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white/[0.03] rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">What's the difference between $ and $?</h3>
              <p className="text-[#8B95A1]">These are the same symbol - the dollar sign. The slight visual variations depend on your font or device. Both represent US dollars and most other dollar currencies.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Which currency symbol should I use for which country?</h3>
              <p className="text-[#8B95A1]">The $ symbol is used for US dollars, Canadian dollars, and many other countries. € is for the Euro, £ for British pounds, ¥ for Japanese yen, and so on. Use the official symbol of the currency you're referencing.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Can I use currency symbols in social media?</h3>
              <p className="text-[#8B95A1]">Yes! Currency symbols work on all social media platforms, messaging apps, and most websites. They're great for posts about pricing, financial content, and business topics.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">What is the Bitcoin symbol?</h3>
              <p className="text-[#8B95A1]">The Bitcoin symbol is ₿. It's a standard Unicode character and represents Bitcoin (BTC). You can also see it displayed as 🪙 in emoji form.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Are all these symbols widely supported?</h3>
              <p className="text-[#8B95A1]">Most currency symbols are widely supported across devices and applications. Some less common ones may not display on older devices, but the major currencies ($, €, £, ¥, ₿) work everywhere.</p>
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
                "name": "What's the difference between $ and $?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "These are the same symbol - the dollar sign. The slight visual variations depend on your font or device. Both represent US dollars and most other dollar currencies."
                }
              },
              {
                "@type": "Question",
                "name": "Which currency symbol should I use for which country?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The $ symbol is used for US dollars and many other countries. € is for the Euro, £ for British pounds, ¥ for Japanese yen. Use the official symbol of the currency you're referencing."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use currency symbols in social media?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Currency symbols work on all social media platforms, messaging apps, and most websites."
                }
              },
              {
                "@type": "Question",
                "name": "What's the Bitcoin symbol?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Bitcoin symbol is ₿. It's a standard Unicode character and represents Bitcoin (BTC)."
                }
              },
              {
                "@type": "Question",
                "name": "Are all these symbols widely supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most currency symbols are widely supported across devices and applications. Major currencies like $, €, £, ¥, ₿ work everywhere."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
