import { Metadata } from 'next'
import CopyGrid from '@/components/CopyGrid'
import CategoryNav from '@/components/CategoryNav'

export const metadata: Metadata = {
  title: 'Kaomoji Text Faces Copy and Paste (◕‿◕) ¯\\_(ツ)_/¯',
  description: 'Copy and paste 80+ kaomoji text faces including happy, sad, angry, shrug, love, and action faces. Perfect for expressing emotions in text.',
  keywords: 'kaomoji, text faces, emoticons, ascii art, copy paste, text emoji',
}

export default function TextFacesPage() {
  const happyFaces = '(◕‿◕) (•‿•) (ʘ‿ʘ) (◠‿◠) (^_^) (*^_^*) (^o^) (≧◡≦) (✿◠‿◠) (─‿─) (◕ᴗ◕✿) (ᵔᴥᵔ) ʕ•ᴥ•ʔ ʕ ᵔᴥᵔ ʔ (づ｡◕‿‿◕｡)づ'.split(' ')

  const sadFaces = '(╥_╥) (T_T) (;_;) (TдT) (ಥ_ಥ) (ノ_<。) (μ_μ) (ノД`)・゜・。 。゚(゚´Д`゚)゚。 (இ﹏இ)'.split(' ')

  const angryFaces = '(ง •̀_•́)ง (╯°□°)╯︵ ┻━┻ ┬─┬ノ( º _ ºノ) (ノಠ益ಠ)ノ彡┻━┻ (ᗒᗣᗕ)՞ (≖_≖) ψ(｀∇´)ψ'.split(' ')

  const shrugFaces = '¯\\_(ツ)_/¯ ┐(´∀`)┌ ╮(╯_╰)╭ (⊙_⊙) (¬‿¬) (⌐■_■) ( ͡° ͜ʖ ͡°) (☞ ͡° ͜ʖ ͡°)☞ ಠ_ಠ'.split(' ')

  const loveFaces = '(♡°▽°♡) (◕‿◕)♡ (´,,•ω•,,)♡ (✧ω✧) (ᗒᗨᗕ) ♡(>ᴗ•) (*≧∀≦*) (灬ºωº灬)♡'.split(' ')

  const actionFaces = 'ᕕ( ᐛ )ᕗ ᕦ(ò_óˇ)ᕤ (ノ◕ヮ◕)ノ*:・゚✧ ⊂(◉‿◉)つ ε=ε=ε=┌(;*´Д`)ﾉ ヾ(⌐■_■)ノ♪ 〜(꒪꒳꒪)〜 ♪♪♪'.split(' ')

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <CategoryNav current="/text-faces" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-100">
          Kaomoji Text Faces Copy and Paste
        </h1>
        <p className="text-center text-[var(--text-muted)] mb-12">
          Discover and copy 80+ expressive kaomoji text faces for your messages
        </p>

        <div className="space-y-12">
          {/* Happy Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">😊 Happy & Cheerful Faces</h2>
            <CopyGrid items={happyFaces} columns="repeat(auto-fill, minmax(160px, 1fr))" />
          </section>

          {/* Sad Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">😢 Sad & Crying Faces</h2>
            <CopyGrid items={sadFaces} columns="repeat(auto-fill, minmax(160px, 1fr))" />
          </section>

          {/* Angry Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">😠 Angry & Upset Faces</h2>
            <CopyGrid items={angryFaces} columns="repeat(auto-fill, minmax(160px, 1fr))" />
          </section>

          {/* Shrug Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">🤷 Shrug & Confused Faces</h2>
            <CopyGrid items={shrugFaces} columns="repeat(auto-fill, minmax(160px, 1fr))" />
          </section>

          {/* Love Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">💕 Love & Affection Faces</h2>
            <CopyGrid items={loveFaces} columns="repeat(auto-fill, minmax(160px, 1fr))" />
          </section>

          {/* Action Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">🎉 Action & Celebration Faces</h2>
            <CopyGrid items={actionFaces} columns="repeat(auto-fill, minmax(160px, 1fr))" />
          </section>
        </div>

        {/* SEO Content */}
        <section className="mt-16 bg-white/[0.03] rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Kaomoji Text Faces Copy and Paste Guide</h2>
          <div className="prose prose-sm max-w-none text-[var(--text-muted)] space-y-4">
            <p>
              Kaomoji are Japanese text emoticons that express emotions and feelings using ASCII characters and Unicode symbols. They are perfect for adding personality and expression to your text messages when traditional emojis aren't available.
            </p>
            <p>
              Our collection includes 80+ kaomoji organized into categories: happy and cheerful faces, sad and crying faces, angry and upset faces, shrug and confused faces, love and affection faces, and action and celebration faces. From ¯\_(ツ)_/¯ to (◕‿◕), you'll find the perfect expression.
            </p>
            <p>
              Perfect for messaging, emails, forums, and social media. Kaomoji work on all platforms and devices, making them ideal for expressing yourself anywhere text is supported.
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
                  name: 'What are kaomoji?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Kaomoji are Japanese text emoticons that express emotions using ASCII characters and Unicode symbols. They are similar to emoticons but often more expressive.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I copy and use kaomoji?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simply click on any kaomoji you want to copy. It will be copied to your clipboard and you can paste it in messages, emails, forums, or anywhere you need.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are kaomoji compatible with all platforms?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, kaomoji are text-based and work on all platforms and devices wherever text is supported, including iOS, Android, Windows, Mac, and web.',
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
