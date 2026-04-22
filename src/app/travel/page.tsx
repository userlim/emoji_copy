import { Metadata } from 'next'
import CopyGrid from '@/components/CopyGrid'
import CategoryNav from '@/components/CategoryNav'

export const metadata: Metadata = {
  title: 'Travel & Transport Emoji Copy and Paste ✈️ 🚗 🌍',
  description: 'Copy and paste 100+ travel and transport emojis including vehicles, places, landmarks, and flags. Perfect for travel planning and adventure posts.',
  keywords: 'travel emoji, vehicle emoji, airplane emoji, car emoji, landmark emoji, world emoji, copy paste',
}

export default function TravelPage() {
  const vehicleEmojis = '🚗 🚕 🚙 🏎 🚓 🚑 🚒 🚐 🛻 🚚 🚛 🚜 🏍 🛵 🚲 🛴 🛺 🚂 🚆 🚇 🚊 🚉 🚁 ⛵ 🚤 🛳 ⛴ 🛶 🚀 🛸 🛩 ✈️'.split(' ')

  const placeEmojis = '🌍 🌎 🌏 🗺 🧭 🏔 ⛰ 🌋 🗻 🏕 🏖 🏜 🏝 🏞 🏟 🏛 🏗 🧱 🪨 🪵 🛖 🏘 🏚 🏠 🏡 🏢 🏣 🏤 🏥 🏦 🏨 🏩 🏪 🏫 🏬 🏭 🏯 🏰 💒 🗼 🗽 ⛪ 🕌 🛕 🕍 ⛩ 🕋'.split(' ')

  const flagEmojis = '🏁 🚩 🎌 🏴 🏳 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️'.split(' ')

  return (
    <main className="min-h-screen py-8">
      <CategoryNav current="/travel" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          Travel & Transport Emoji Copy and Paste
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Discover and copy 100+ travel and transport emojis for your adventures
        </p>

        <div className="space-y-12">
          {/* Vehicles Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🚗 Vehicles & Transportation</h2>
            <CopyGrid items={vehicleEmojis} />
          </section>

          {/* Places Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🏛 Places & Landmarks</h2>
            <CopyGrid items={placeEmojis} />
          </section>

          {/* Flags Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🏁 Flags & Symbols</h2>
            <CopyGrid items={flagEmojis} />
          </section>
        </div>

        {/* SEO Content */}
        <section className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Travel and Transport Emoji Copy and Paste Guide</h2>
          <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
            <p>
              Travel and transport emojis are perfect for sharing your adventures, planning trips, and expressing your love for exploration. Whether you're flying ✈️, driving 🚗, or exploring the world 🌍, we have the emojis you need.
            </p>
            <p>
              Our collection includes over 100 travel and transport emojis organized into three categories: vehicles and transportation, places and landmarks, and flags. From cars and airplanes to famous buildings and natural wonders, you'll find everything for your travel posts.
            </p>
            <p>
              Perfect for travel blogs, vacation announcements, adventure planning, and social media posts. All emojis work seamlessly across iOS, Android, Windows, Mac, and web platforms.
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
                  name: 'How do I copy travel emojis?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simply click on any travel emoji you want to copy. It will be copied to your clipboard and you can paste it anywhere.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are travel emojis compatible with all platforms?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, all travel and transport emojis are compatible with iOS, Android, Windows, Mac, and web platforms.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I use travel emojis in my travel blog?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely! Travel emojis are perfect for travel blogs, social media posts, and vacation announcements.',
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
