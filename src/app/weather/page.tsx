import { Metadata } from 'next';
import CopyGrid from '@/components/CopyGrid';
import CategoryNav from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: 'Weather Symbols ☀ ☁ ☔ ⛅ Copy and Paste | 60+ Weather',
  description: 'Copy and paste 60+ weather symbols including ☀ ☁ ☔ 🌤 🌧 ⛈ 🌈 and sky elements. Perfect for weather apps, documents, and weather-related content.',
  keywords: ['weather symbol', 'weather emoji', 'sun symbol', 'cloud symbol', 'rain symbol', 'weather icon', 'climate emoji'],
};

const sunSymbols = ['☀', '☼', '🌤', '☀️', '🌞', '⭐', '🌟', '✨'];

const cloudSymbols = ['☁', '🌥', '☁️', '🌦', '🌧', '⛅', '⛆', '⛇', '⛈', '🌩'];

const rainSymbols = ['☔', '💧', '💦', '🌧', '⛈'];

const snowSymbols = ['❄', '❅', '❆', '☃', '☃️', '⛄', '🌨', '❄️'];

const windSymbols = ['🌬', '💨', '🌪'];

const moonStars = ['☽', '☾', '🌙', '🌛', '🌜', '🌝', '🌞', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];

const waterElements = ['🌊', '💧', '💦', '☔', '🌈', '🧊'];

const specialWeather = ['☄', '★', '☇', '☈', '🌡', '🔥'];

export default function WeatherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <CategoryNav current="/weather" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-cyan-600 mb-4">Weather Symbols & Sky Elements</h1>
          <p className="text-xl text-[#8B95A1]">Copy 60+ weather symbols including sun ☀, clouds ☁, rain ☔, snow ❄, moon phases, rainbows 🌈, and atmospheric effects. Perfect for weather apps, forecasts, and climate content.</p>
        </header>

        {/* Sun Symbols Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">☀ ☼ 🌤 Sun Symbols</h2>
            <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">{sunSymbols.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Bright sun symbols for clear weather and sunny days</p>
          <CopyGrid items={sunSymbols} />
        </section>

        {/* Cloud Symbols Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">☁ 🌥 🌦 Cloud Symbols</h2>
            <span className="text-sm bg-white text-[#8B95A1] px-3 py-1 rounded-full">{cloudSymbols.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Cloud symbols representing partly cloudy, overcast, and stormy conditions</p>
          <CopyGrid items={cloudSymbols} />
        </section>

        {/* Rain Symbols Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">☔ 💧 🌧 Rain Symbols</h2>
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{rainSymbols.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Rain and water drop symbols for rainy weather conditions</p>
          <CopyGrid items={rainSymbols} />
        </section>

        {/* Snow Symbols Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">❄ ☃ 🌨 Snow Symbols</h2>
            <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">{snowSymbols.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Snowflake and snow symbols for winter weather conditions</p>
          <CopyGrid items={snowSymbols} />
        </section>

        {/* Wind Symbols Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">🌬 💨 Wind Symbols</h2>
            <span className="text-sm bg-sky-100 text-sky-700 px-3 py-1 rounded-full">{windSymbols.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Wind and breeze symbols for windy conditions</p>
          <CopyGrid items={windSymbols} />
        </section>

        {/* Moon & Stars Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">🌙 🌛 ⭐ Moon & Stars</h2>
            <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{moonStars.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Moon phases and star symbols for night sky representation</p>
          <CopyGrid items={moonStars} />
        </section>

        {/* Water Elements Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">🌊 💧 🌈 Water & Rainbows</h2>
            <span className="text-sm bg-[rgba(var(--accent-rgb),0.12)] text-[var(--accent)] px-3 py-1 rounded-full">{waterElements.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Water, waves, and rainbow symbols for oceanic and atmospheric elements</p>
          <CopyGrid items={waterElements} />
        </section>

        {/* Special Weather Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-gray-100">☄ 🌡 🔥 Special Weather</h2>
            <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{specialWeather.length} symbols</span>
          </div>
          <p className="text-[#8B95A1] mb-6">Specialized weather symbols including comet, temperature, and fire</p>
          <CopyGrid items={specialWeather} />
        </section>

        {/* SEO Content */}
        <section className="mt-20 bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">About Weather Symbols</h2>
          <div className="text-[#8B95A1] space-y-4">
            <p>
              Weather symbols are expressive Unicode characters representing atmospheric conditions, celestial bodies, and climate elements. Our collection of 60+ weather symbols covers sun ☀, clouds ☁, rain ☔, snow ❄, moon phases 🌙, stars ⭐, wind 🌬, and special weather phenomena.
            </p>
            <p>
              Whether you need sun symbols for sunny weather forecasts, cloud symbols ☁ for cloudy conditions, rain symbols ☔ for precipitation, snow symbols ❄ for winter weather, moon phases for lunar information, stars ⭐ for night sky, or rainbow symbols 🌈 for weather diversity, you'll find exactly what you need. All symbols are instantly copyable with a single click.
            </p>
            <p>
              Weather symbols have been standardized in Unicode and are supported across all modern devices, browsers, and applications. Use them in weather applications, forecasts, documents, presentations, websites, social media posts, and anywhere else you need to represent atmospheric or weather conditions.
            </p>
            <p>
              Our weather library includes sun symbols, cloud symbols, rain symbols, snow symbols, wind indicators, moon phases, stars, water elements, rainbows, and specialized weather symbols. Each category is organized by weather condition for easy browsing and selection.
            </p>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Tips for Using Weather Symbols</h2>
          <ul className="text-[#8B95A1] space-y-3">
            <li className="flex gap-3">
              <span className="text-cyan-600 font-bold">☀</span>
              <span><strong>Copy with one click:</strong> Click any weather symbol to instantly copy it to your clipboard</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-600 font-bold">☀</span>
              <span><strong>Weather forecasts:</strong> Use appropriate symbols (☀ for sunny, ☁ for cloudy, ☔ for rainy) in weather reports</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-600 font-bold">☀</span>
              <span><strong>Moon tracking:</strong> Display moon phases 🌙 🌛 🌜 for lunar calendars and astrology content</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-600 font-bold">☀</span>
              <span><strong>Climate themes:</strong> Combine weather symbols with water 🌊 and wind 🌬 for comprehensive climate representation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-600 font-bold">☀</span>
              <span><strong>Works everywhere:</strong> Weather symbols display consistently across all devices and applications</span>
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
                name: 'What are weather symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Weather symbols are Unicode characters representing atmospheric and climatic conditions. They include sun ☀, clouds ☁, rain ☔, snow ❄, moon phases 🌙, stars ⭐, wind 🌬, rainbows 🌈, and other weather elements. All symbols work in any text editor or application.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I copy weather symbols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply click on any weather symbol on this page to copy it to your clipboard. You can then paste it anywhere—in documents, emails, social media posts, weather apps, or websites. No special software is needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'What symbols should I use for weather conditions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use ☀ or 🌞 for sunny weather, ☁ for cloudy, ☔ or 🌧 for rainy, ❄ or 🌨 for snowy, and ⛅ 🌤 for partly cloudy conditions. Choose symbols that match the specific weather condition you\'re describing.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I represent moon phases?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use the moon phase symbols 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 to show the progression through a lunar cycle. Each symbol represents a different phase from new moon to full moon and back.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do weather symbols work on all devices?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Weather symbols are standardized Unicode characters supported on all modern devices, browsers, and applications including Windows, Mac, Linux, iPhone, and Android. They display consistently across platforms.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
