'use client'

const cats = [
  { href: '/arrows', icon: '→', label: 'Arrows' },
  { href: '/reference-marks', icon: '※', label: '※ Reference' },
  { href: '/hearts', icon: '❤️', label: 'Hearts' },
  { href: '/stars', icon: '⭐', label: 'Stars' },
  { href: '/smileys', icon: '😀', label: 'Smileys' },
  { href: '/hands', icon: '👋', label: 'Hands' },
  { href: '/check-marks', icon: '✓', label: 'Check Marks' },
  { href: '/symbols', icon: '§', label: 'Symbols' },
  { href: '/math', icon: '∑', label: 'Math' },
  { href: '/currency', icon: '$', label: 'Currency' },
  { href: '/brackets', icon: '【】', label: 'Brackets' },
  { href: '/numbers', icon: '①', label: 'Numbers' },
  { href: '/circles', icon: '●', label: 'Circles' },
  { href: '/squares', icon: '■', label: 'Squares' },
  { href: '/triangles', icon: '▲', label: 'Triangles' },
  { href: '/lines', icon: '─', label: 'Lines' },
  { href: '/music', icon: '♪', label: 'Music' },
  { href: '/flowers', icon: '✿', label: 'Flowers' },
  { href: '/weather', icon: '☀', label: 'Weather' },
  { href: '/greek', icon: 'Ω', label: 'Greek' },
  { href: '/zodiac', icon: '♈', label: 'Zodiac' },
  { href: '/chess', icon: '♛', label: 'Chess' },
  { href: '/animals', icon: '🐱', label: 'Animals' },
  { href: '/food', icon: '🍕', label: 'Food' },
  { href: '/travel', icon: '✈️', label: 'Travel' },
  { href: '/text-faces', icon: '(◕‿◕)', label: 'Kaomoji' },
]

export default function CategoryNav({ current }: { current?: string }) {
  return (
    <div className="flex flex-wrap gap-1.5 mb-6">
      <a href="/" className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${!current ? 'text-white' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
        style={!current ? { background: 'var(--accent)' } : {}}>🏠 Home</a>
      {cats.map(c => (
        <a key={c.href} href={c.href}
          className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${current === c.href ? 'text-white' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
          style={current === c.href ? { background: 'var(--accent)' } : {}}>
          {c.icon} {c.label}
        </a>
      ))}
    </div>
  )
}
