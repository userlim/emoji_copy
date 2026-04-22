import { Metadata } from 'next'
import CopyGrid from '@/components/CopyGrid'
import CategoryNav from '@/components/CategoryNav'

export const metadata: Metadata = {
  title: 'Food & Drink Emoji Copy and Paste 🍕 🍔 🍣 | 150+ Food',
  description: 'Copy and paste 150+ food and drink emojis including fruits, vegetables, fast food, desserts, and beverages. Perfect for food lovers and messaging.',
  keywords: 'food emoji, drink emoji, fruit emoji, restaurant emoji, dessert emoji, copy paste',
}

export default function FoodPage() {
  const fruitEmojis = '🍎 🍐 🍊 🍋 🍋‍🟩 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝'.split(' ')

  const vegetableEmojis = '🍅 🥑 🍆 🥦 🫑 🌶 🫒 🥬 🥒 🧄 🧅 🥔 🍠 🥕 🌽 🫘'.split(' ')

  const fastFoodEmojis = '🍕 🍔 🍟 🌭 🍿 🧂 🥚 🍳 🥞 🧇 🥓 🥩 🍗 🍖 🌮 🌯 🥙 🧆 🥗 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍩 🍪 🌰 🥜 🫘 🍯'.split(' ')

  const drinkEmojis = '☕ 🍵 🧋 🥤 🍺 🍻 🥂 🍷 🍸 🍹 🧃 🥛 🫗 🍼 🧊 🥃 🍶 🫖 🧉'.split(' ')

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <CategoryNav current="/food" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-100">
          Food & Drink Emoji Copy and Paste
        </h1>
        <p className="text-center text-[#8B95A1] mb-12">
          Discover and copy 150+ food and drink emojis for every meal and occasion
        </p>

        <div className="space-y-12">
          {/* Fruits Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">🍎 Fruits</h2>
            <CopyGrid items={fruitEmojis} />
          </section>

          {/* Vegetables Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">🥦 Vegetables</h2>
            <CopyGrid items={vegetableEmojis} />
          </section>

          {/* Fast Food Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">🍕 Fast Food & Meals</h2>
            <CopyGrid items={fastFoodEmojis} />
          </section>

          {/* Drinks Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">☕ Drinks & Beverages</h2>
            <CopyGrid items={drinkEmojis} />
          </section>
        </div>

        {/* SEO Content */}
        <section className="mt-16 bg-white/[0.03] rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Food and Drink Emoji Copy and Paste Guide</h2>
          <div className="prose prose-sm max-w-none text-[#8B95A1] space-y-4">
            <p>
              Food and drink emojis are essential for expressing your culinary interests and dining experiences. Whether you're sharing a pizza 🍕, coffee ☕, or sushi 🍣, we have the perfect emoji for every food situation.
            </p>
            <p>
              Our comprehensive collection includes over 150 food and drink emojis organized into categories: fruits, vegetables, fast food and meals, and beverages. From fresh produce to delicious desserts, you'll find exactly what you need.
            </p>
            <p>
              Perfect for restaurant reviews, food blogs, social media posts, and messaging with friends. All emojis are fully compatible with iOS, Android, Windows, Mac, and web platforms.
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
                  name: 'How do I copy food emojis?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simply click on any food emoji you want to copy. It will be copied to your clipboard and you can paste it anywhere.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are food and drink emojis available on all platforms?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, all food and drink emojis are compatible with iOS, Android, Windows, Mac, and web platforms.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I use food emojis on social media?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely! Food emojis work great on all social media platforms including Instagram, Facebook, Twitter, TikTok, and more.',
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
