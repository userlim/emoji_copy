import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Music Symbols ♪ ♫ ♬ 🎵 Copy and Paste | 50+ Music Notes',
  description: 'Copy and paste 50+ music symbols including musical notes ♪ ♫ ♬, instruments 🎸 🎹, and audio symbols. Perfect for music projects, documents, and social media.',
  keywords: ['music symbol', 'musical note', 'music emoji', 'instrument symbol', 'audio symbol', 'sheet music', 'clef symbol'],
};

const musicalNotes = ['♩', '♪', '♫', '♬', '♭', '♮', '♯', '𝄞', '𝄡', '𝄢'];

const noteValues = ['𝅗𝅥', '𝅘𝅥', '𝅘𝅥𝅮', '𝅘𝅥𝅯', '𝅘𝅥𝅰'];

const musicRests = ['𝄀', '𝄁', '𝄂', '𝄃', '𝄄', '𝄅', '𝄆', '𝄇'];

const instrumentEmoji = ['🎵', '🎶', '🎼', '🎹', '🎸', '🎺', '🎻', '🎷', '🥁', '🪘', '🎤', '🎧', '🎙', '📻', '📯'];

const soundSymbols = ['🔔', '🔕', '🔊', '🔉', '🔈', '🔇', '📢', '📣'];

const mediaControls = ['⏮', '⏭', '⏯', '⏸', '⏹', '⏺'];

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <CategoryNav current="/music" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-purple-600 mb-4">Music Symbols & Instruments</h1>
          <p className="text-xl text-[var(--text-muted)]">Copy 50+ music symbols including musical notes ♪ ♫, staff notation ♯ ♭, instruments 🎸 🎹, and audio controls. Perfect for music projects, documents, and social media.</p>
        </header>

        {/* Musical Notes Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">♩ ♪ ♫ Musical Notes</h2>
            <span className="text-sm bg-[rgba(var(--accent-rgb),0.12)] text-[var(--accent)] px-3 py-1 rounded-full">{musicalNotes.length} symbols</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Musical note symbols and staff notation including accidentals and clefs</p>
          <CopyGrid items={musicalNotes} />
        </section>

        {/* Note Values Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">𝅗𝅥 𝅘𝅥 Note Values</h2>
            <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">{noteValues.length} symbols</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Different musical note values from whole notes to sixteenth notes</p>
          <CopyGrid items={noteValues} />
        </section>

        {/* Music Rests Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">𝄀 𝄁 𝄂 Rests</h2>
            <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{musicRests.length} symbols</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Rest symbols representing silence in musical notation</p>
          <CopyGrid items={musicRests} />
        </section>

        {/* Instrument Emoji Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">🎸 🎹 🎺 Instruments</h2>
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{instrumentEmoji.length} symbols</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Musical instrument emoji for all major instrument types</p>
          <CopyGrid items={instrumentEmoji} />
        </section>

        {/* Sound & Audio Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">🔊 🔉 🔈 Sound & Volume</h2>
            <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">{soundSymbols.length} symbols</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Speaker and sound level indicators for audio representation</p>
          <CopyGrid items={soundSymbols} />
        </section>

        {/* Media Controls Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">⏮ ⏯ ⏹ Media Controls</h2>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{mediaControls.length} symbols</span>
          </div>
          <p className="text-[var(--text-muted)] mb-6">Playback control symbols for media players and interfaces</p>
          <CopyGrid items={mediaControls} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">About Music Symbols</h2>
          <div className="text-[var(--text-muted)] space-y-4">
            <p>
              Music symbols are specialized Unicode characters used in musical notation, composition, and audio applications. Our collection of 50+ music symbols covers musical notes ♪ ♫, staff notation symbols ♯ ♭ ♮, instrument emoji, sound controls, and media playback buttons.
            </p>
            <p>
              Whether you need single musical notes ♩ for simple notation, double notes ♪ ♫ ♬ for flowing melodies, accidental symbols ♯ ♭ for pitch changes, instrument emoji for music projects, or sound volume indicators 🔊 🔉 for audio applications, you'll find exactly what you need. All symbols are instantly copyable with a single click.
            </p>
            <p>
              Music symbols have been standardized in Unicode and are supported across most modern devices, browsers, and applications. Use them in documents, presentations, social media posts, music websites, and anywhere else you need to represent musical concepts or audio features.
            </p>
            <p>
              Our music library includes musical notes, staff notation, note values, rests, instrument emoji, sound indicators, and media controls. Each category is organized by musical function for easy browsing and selection.
            </p>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Tips for Using Music Symbols</h2>
          <ul className="text-[var(--text-muted)] space-y-3">
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">♪</span>
              <span><strong>Copy with one click:</strong> Click any music symbol to instantly copy it to your clipboard</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">♪</span>
              <span><strong>Musical notation:</strong> Use ♩ ♪ ♫ to represent different note values in documents</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">♪</span>
              <span><strong>Pitch indication:</strong> Add ♯ for sharp, ♭ for flat, and ♮ for natural notes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">♪</span>
              <span><strong>Instrument representation:</strong> Use instrument emoji 🎸 🎹 for music-related content</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">♪</span>
              <span><strong>Works everywhere:</strong> Music symbols display across most devices and applications</span>
            </li>
          </ul>
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
                name: 'What are music symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Music symbols are Unicode characters used to represent musical notation and audio concepts. They include musical notes ♪ ♫, staff notation ♯ ♭ ♮, instrument emoji 🎸 🎹, and sound controls 🔊. All symbols work in any text editor or application.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I copy music symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply click on any music symbol on this page to copy it to your clipboard. You can then paste it anywhere—in documents, emails, social media posts, or websites. No special software is needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between ♪ and ♫?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '♪ represents a single eighth note, while ♫ shows two eighth notes beamed together. Both are commonly used to indicate music or melody, with ♫ suggesting a flowing sequence of notes.',
                },
              },
              {
                '@type': 'Question',
                name: 'What symbols represent sharp and flat notes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '♯ is the sharp symbol indicating a note should be raised by a semitone, ♭ is the flat symbol indicating a note should be lowered by a semitone, and ♮ is the natural symbol returning a note to its original pitch.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do music symbols work on all devices?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most music symbols are standardized Unicode characters supported on modern devices, browsers, and applications. Some specialized notation symbols may have limited support, but basic notes and instrument emoji work across all platforms.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
