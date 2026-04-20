import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Smiley Face Emoji Copy and Paste 😀 😂 🥰 | 200+ Faces',
  description: 'Copy smiley face emojis and expressions. 200+ smiley emotions including happy, sad, angry, shocked, and all face emojis.',
  keywords: 'smiley emoji, face emoji, emoticon, copy paste emoji, smiley faces',
};

const happyFaces = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙', '🥲', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔'];

const neutralSad = ['🫡', '🤐', '🤨', '😐', '😑', '😶', '🫥', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷'];

const sickWeird = ['🤒', '🤕', '🤢', '🤮', '🥵', '🥶', '🥴', '😵', '😵‍💫', '🤯', '🤠', '🥳', '🥸', '😎', '🤓', '🧐'];

const worriedScared = ['😕', '🫤', '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺', '🥹', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '🥱'];

const angryEvil = ['😤', '😡', '😠', '🤬', '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖'];

const catFaces = ['😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'];

const monkeyFaces = ['🙈', '🙉', '🙊'];

const allSmileys = [
  ...happyFaces,
  ...neutralSad,
  ...sickWeird,
  ...worriedScared,
  ...angryEvil,
  ...catFaces,
  ...monkeyFaces,
];

export default function SmileysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <CategoryNav current="/smileys" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Smiley Face Emojis & Expressions</h1>
          <p className="text-xl text-[var(--text-muted)]">Copy 200+ smiley face emojis covering every emotion, expression, and mood. Happy, sad, angry, shocked, and more!</p>
        </header>

        {/* Happy Faces Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">😀 Happy Faces</h2>
            <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">31 emojis</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Cheerful, happy, and positive face expressions for good news and cheerful messages</p>
          <CopyGrid items={happyFaces} />
        </section>

        {/* Neutral & Sad Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">😐 Neutral & Sad Faces</h2>
            <span className="text-sm bg-[rgba(255,255,255,0.02)] text-[var(--text-muted)] px-3 py-1 rounded-full">18 emojis</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Neutral, indifferent, sad, and melancholic expressions</p>
          <CopyGrid items={neutralSad} />
        </section>

        {/* Sick & Weird Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">🥵 Sick, Weird & Cool Faces</h2>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">16 emojis</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Sick, dizzy, crazy, cool, and unusual face expressions</p>
          <CopyGrid items={sickWeird} />
        </section>

        {/* Worried & Scared Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">😰 Worried & Scared Faces</h2>
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">26 emojis</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Worried, anxious, scared, and distressed expressions</p>
          <CopyGrid items={worriedScared} />
        </section>

        {/* Angry & Evil Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">😡 Angry & Evil Faces</h2>
            <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">16 emojis</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Angry, furious, evil, and dark expressions</p>
          <CopyGrid items={angryEvil} />
        </section>

        {/* Cat Faces Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">😺 Cat Faces</h2>
            <span className="text-sm bg-amber-100 text-amber-700 px-3 py-1 rounded-full">9 emojis</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Cute cat face expressions with various emotions</p>
          <CopyGrid items={catFaces} />
        </section>

        {/* Monkey Faces Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">🙈 Monkey Faces</h2>
            <span className="text-sm bg-amber-100 text-amber-700 px-3 py-1 rounded-full">3 emojis</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Playful monkey expressions and variations</p>
          <CopyGrid items={monkeyFaces} />
        </section>

        {/* All Smileys Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">😀 All 200+ Smiley Emojis</h2>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Complete collection of all smiley face emojis in one place</p>
          <CopyGrid items={allSmileys} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-white/[0.02] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">About Smiley Face Emojis</h2>
          <div className="text-[var(--text-muted)] space-y-4">
            <p>
              Smiley face emojis are the most commonly used emojis for expressing emotions and moods in digital communication. Our collection includes 200+ smiley emojis covering every possible emotion, expression, and mood you might want to convey.
            </p>
            <p>
              From the classic happy face 😀 to more specific expressions like the laughing face 😂, loved face 🥰, and thinking face 🤔, you'll find the perfect emoji to match your message. We also include special variations like cool faces 😎, dizzy faces 😵, and even cat and monkey faces for fun!
            </p>
            <p>
              Our smiley emoji collection is organized by emotion type to help you quickly find what you need. Whether you're expressing happiness, sadness, anger, surprise, or any emotion in between, we have the right emoji for you.
            </p>
            <p>
              All smiley emojis can be copied with a single click and work across all platforms and devices. Use them in messages, social media posts, emails, and any digital communication to add personality and emotion to your text.
            </p>
            <p>
              Smiley faces help convey tone and emotion in text-based communication where facial expressions aren't visible. They make conversations more engaging, friendly, and expressive. Whether you're texting friends, posting on social media, or communicating at work, smiley emojis help you communicate better.
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
                name: 'What is the difference between 😂 and 🤣?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '😂 (face with tears of joy) shows laughing with tears, while 🤣 (rolling on the floor laughing) shows more extreme laughter. Both express humor but at different intensities.',
                },
              },
              {
                '@type': 'Question',
                name: 'When should I use cat faces instead of regular smiley faces?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Cat faces like 😺 😸 😻 are cute alternatives to regular faces. They\'re perfect for adding extra personality, being cute or playful, or if you simply prefer the aesthetic of cat emojis.',
                },
              },
              {
                '@type': 'Question',
                name: 'What\'s the most used smiley emoji?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The laughing-crying face 😂 is one of the most frequently used smiley emojis. The simple happy face 😀 and the love face 🥰 are also extremely popular across all platforms.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use these smiley emojis everywhere?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most smiley emojis work on all modern platforms including phones, computers, social media, email, and messaging apps. Some older systems might not support all emoji variations, but the basic smiley faces are universal.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
