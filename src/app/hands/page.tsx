import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: "Hand Emoji Copy and Paste 👍 ✌️ 👋 | All Hand Gestures",
  description: "Copy and paste hand emojis and gestures. Browse through waving, pointing, fingers, thumbs, and clapping hand symbols. Perfect for messaging and social media.",
  keywords: "hand emoji, gesture emoji, waving hand, pointing finger, thumbs up, copy paste",
  openGraph: {
    title: "Hand Emoji Copy and Paste 👍 ✌️ 👋",
    description: "Copy and paste hand emojis and gestures easily.",
    type: "website",
  },
};

const handEmojis = {
  "Waving & Open": ["👋", "🤚", "🖐", "✋", "🖖", "🫱", "🫲", "🫳", "🫴", "🫷", "🫸"],
  "Fingers": ["👌", "🤌", "🤏", "✌️", "🤞", "🫰", "🤟", "🤘", "🤙", "🖕"],
  "Pointing": ["👈", "👉", "👆", "👇", "☝️", "🫵", "👈🏻", "👈🏼", "👈🏽", "👈🏾", "👈🏿", "👉🏻", "👉🏼", "👉🏽", "👉🏾", "👉🏿"],
  "Thumbs & Fists": ["👍", "👎", "✊", "👊", "🤛", "🤜", "👍🏻", "👍🏼", "👍🏽", "👍🏾", "👍🏿"],
  "Clapping & Hands": ["👏", "🙌", "🫶", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪"],
};

export default function HandsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <CategoryNav current="/hands" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-100 mb-4">Hand Emoji & Gestures</h1>
          <p className="text-xl text-[#8B95A1]">Copy and paste hand gestures, fingers, pointing, and more. Easy to use - just click any emoji to copy it to your clipboard.</p>
        </div>

        <div className="space-y-12">
          {Object.entries(handEmojis).map(([category, emojis]) => (
            <div key={category} className="bg-white/[0.03] rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">{category}</h2>
              <CopyGrid items={emojis} />
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white/[0.03] rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">How do I copy a hand emoji?</h3>
              <p className="text-[#8B95A1]">Simply click on any hand emoji in the grid above. It will be automatically copied to your clipboard.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Can I use hand emojis in all apps?</h3>
              <p className="text-[#8B95A1]">Yes, hand emojis are widely supported across messaging apps, social media, email, and most platforms. Skin tone variations may display differently depending on the device.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">What's the difference between hand gestures?</h3>
              <p className="text-[#8B95A1]">Hand emojis are grouped by gesture type: waving hands for greetings, pointing fingers for directions, thumbs for approval, and clapping for appreciation.</p>
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
                "name": "How do I copy a hand emoji?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simply click on any hand emoji in the grid. It will be automatically copied to your clipboard."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use hand emojis in all apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, hand emojis are widely supported across messaging apps, social media, email, and most platforms."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between hand gestures?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hand emojis are grouped by gesture type: waving hands for greetings, pointing fingers for directions, thumbs for approval, and clapping for appreciation."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
