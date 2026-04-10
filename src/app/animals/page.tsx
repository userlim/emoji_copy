import { Metadata } from 'next'
import CopyGrid from '@/components/CopyGrid'
import CategoryNav from '@/components/CategoryNav'

export const metadata: Metadata = {
  title: 'Animal Emoji Copy and Paste 🐶 🐱 🦊 | 150+ Animals',
  description: 'Copy and paste 150+ animal emojis including pets, bugs, sea creatures, and more. Perfect for messages, social media, and creative projects.',
  keywords: 'animal emoji, cute emoji, pet emoji, sea creatures, bug emoji, copy paste',
}

export default function AnimalsPage() {
  const petEmojis = '🐶 🐱 🐭 🐹 🐰 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐸 🐵 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐞 🐜 🐢 🐍 🦎 🦂 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🦬 🐃 🐂 🐄 🫎 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐈‍⬛ 🪶 🐓 🦃 🦤 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦫 🦥 🐁 🐀 🐿 🦔'.split(' ')

  const bugEmojis = '🪱 🐛 🦋 🐌 🐞 🐜 🪲 🪳 🦟 🦗 🕷 🕸 🦂 🪰'.split(' ')

  const seaEmojis = '🐙 🦑 🦐 🦞 🦀 🪼 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐢 🦭 🦦'.split(' ')

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <CategoryNav current="/animals" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-100">
          Animal Emoji Copy and Paste
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Discover and copy 150+ animal emojis including pets, bugs, sea creatures, and more
        </p>

        <div className="space-y-12">
          {/* Pets Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">🐾 Pets & Land Animals</h2>
            <CopyGrid items={petEmojis} />
          </section>

          {/* Bugs Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">🪲 Bugs & Insects</h2>
            <CopyGrid items={bugEmojis} />
          </section>

          {/* Sea Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">🌊 Sea Creatures</h2>
            <CopyGrid items={seaEmojis} />
          </section>
        </div>

        {/* SEO Content */}
        <section className="mt-16 bg-white/[0.03] rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Animal Emoji Copy and Paste Guide</h2>
          <div className="prose prose-sm max-w-none text-gray-300 space-y-4">
            <p>
              Animal emojis are perfect for expressing your love for pets, wildlife, and nature. Whether you're texting about your cute dog 🐶, favorite cat 🐱, or a sea adventure 🐋, we've got all the animal emojis you need.
            </p>
            <p>
              Our collection includes over 150 animal emojis organized by category: pets and land animals, bugs and insects, and sea creatures. Simply click any emoji to copy it to your clipboard and paste it wherever you need.
            </p>
            <p>
              Perfect for social media posts, messages, creative projects, and more. All emojis are compatible with all major platforms including iOS, Android, Windows, and Mac.
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
                  name: 'How do I copy animal emojis?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simply click on any animal emoji you want to copy. It will be copied to your clipboard and you can paste it anywhere.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are these animal emojis compatible with all platforms?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, all animal emojis in our collection are compatible with iOS, Android, Windows, Mac, and web platforms.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How many animal emojis are available?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We offer over 150 animal emojis organized into categories including pets, bugs, insects, and sea creatures.',
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
