'use client'
import { useState, useCallback, useEffect } from 'react'

/* ─── emoji data ─── */
interface EmojiCategory {
  id: string
  label: string
  icon: string
  items: string[]
}

const categories: EmojiCategory[] = [
  {
    id: 'popular',
    label: 'Most Popular',
    icon: '🔥',
    items: [
      '😂','❤️','😍','🤣','😊','🙏','💕','😭','😘','👍',
      '🥺','😁','🔥','🥰','💔','💜','😢','🤗','😎','✨',
      '👏','😳','🤞','💯','🙄','😅','🤔','🤩','😉','👌',
      '🎉','💪','❣️','💗','💖','🤷','😏','🙂','💛','🤤',
      '🤝','⭐','💫','🎊','😆','✅','👀','💙','😋','💚',
    ],
  },
  {
    id: 'arrows',
    label: 'Arrows',
    icon: '→',
    items: [
      '←','→','↑','↓','↔','↕','↖','↗','↘','↙',
      '⬅','➡','⬆','⬇','↩','↪','⤴','⤵','🔄','🔃',
      '▶','◀','🔼','🔽','⏩','⏪','⏫','⏬','➤','➜',
      '➝','➞','➟','➠','➡','➢','➣','➤','➥','➦',
      '➧','➨','➩','➪','➫','➬','➭','➮','➯','➱',
      '⇐','⇒','⇑','⇓','⇔','⇕','⇖','⇗','⇘','⇙',
      '⟵','⟶','⟷','⟸','⟹','⟺','↰','↱','↲','↳',
      '↴','↵','↶','↷','↸','↹','↺','↻','⇄','⇆',
      '⇇','⇈','⇉','⇊','⇋','⇌','⇍','⇎','⇏','⇚',
      '⇛','⇜','⇝','⇞','⇟','⇠','⇡','⇢','⇣','⇤',
    ],
  },
  {
    id: 'smileys',
    label: 'Smileys & Emotion',
    icon: '😀',
    items: [
      '😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃',
      '😉','😊','😇','🥰','😍','🤩','😘','😗','😚','😙',
      '🥲','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫',
      '🤔','🫡','🤐','🤨','😐','😑','😶','🫥','😏','😒',
      '🙄','😬','🤥','😌','😔','😪','🤤','😴','😷','🤒',
      '🤕','🤢','🤮','🥵','🥶','🥴','😵','🤯','🤠','🥳',
      '🥸','😎','🤓','🧐','😕','🫤','😟','🙁','😮','😯',
      '😲','😳','🥺','🥹','😦','😧','😨','😰','😥','😢',
      '😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤',
      '😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹',
    ],
  },
  {
    id: 'hands',
    label: 'Hand Gestures',
    icon: '👋',
    items: [
      '👋','🤚','🖐','✋','🖖','🫱','🫲','🫳','🫴','🫷',
      '🫸','👌','🤌','🤏','✌️','🤞','🫰','🤟','🤘','🤙',
      '👈','👉','👆','🖕','👇','☝️','🫵','👍','👎','✊',
      '👊','🤛','🤜','👏','🙌','🫶','👐','🤲','🤝','🙏',
      '✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂','🦻',
    ],
  },
  {
    id: 'hearts',
    label: 'Hearts & Love',
    icon: '❤️',
    items: [
      '❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔',
      '❤️‍🔥','❤️‍🩹','❣️','💕','💞','💓','💗','💖','💘','💝',
      '💟','♥️','🫶','💑','💏','👩‍❤️‍👨','👨‍❤️‍👨','👩‍❤️‍👩','💐','🌹',
      '🥀','💍','💒','🏩','♡','♥','❥','❦','❧','ღ',
    ],
  },
  {
    id: 'stars',
    label: 'Stars & Sparkles',
    icon: '⭐',
    items: [
      '⭐','🌟','✨','💫','🌠','✡','🔯','✴','⚝','★',
      '☆','✦','✧','✩','✪','✫','✬','✭','✮','✯',
      '✰','⊛','⊜','❂','❉','❊','❋','✺','✻','✼',
      '❄','❅','❆','✿','❀','❁','※','⁂','⁑','⁕',
      '🎇','🎆','🌃','🌌','🌙','🌛','🌜','🌝','🌞','☀️',
    ],
  },
  {
    id: 'symbols',
    label: 'Symbols & Signs',
    icon: '✓',
    items: [
      '✓','✔','✗','✘','✕','✖','❌','⭕','❗','❓',
      '❕','❔','‼️','⁉️','♻️','⚠️','🚫','⛔','📛','♨️',
      '✅','☑️','◻️','◼️','◽','◾','▪️','▫️','🔲','🔳',
      '⬛','⬜','🟥','🟧','🟨','🟩','🟦','🟪','🟫','🔴',
      '🟠','🟡','🟢','🔵','🟣','🟤','⚫','⚪','©️','®️',
      '™️','♠️','♣️','♥️','♦️','♤','♧','♡','♢','⚜️',
    ],
  },
  {
    id: 'currency',
    label: 'Currency & Math',
    icon: '$',
    items: [
      '$','€','£','¥','₩','₽','₹','₿','₺','₴',
      '₦','₫','₡','₣','₤','₥','₧','₨','₪','₮',
      '₯','₰','₱','₲','₳','₵','₶','₷','₸','₻',
      '+','−','×','÷','=','≠','≈','≤','≥','±',
      '∞','∑','∏','√','∛','∜','∫','∂','∆','∇',
      'π','θ','φ','ω','α','β','γ','δ','ε','λ',
      '%','‰','‱','°','′','″','⟨','⟩','⌈','⌉',
    ],
  },
  {
    id: 'text-faces',
    label: 'Text Faces (Kaomoji)',
    icon: '(◕‿◕)',
    items: [
      '(◕‿◕)','(ᵔᴥᵔ)','(╥_╥)','(•‿•)','(ʘ‿ʘ)','(ノ◕ヮ◕)ノ*:・゚✧',
      '¯\\_(ツ)_/¯','(╯°□°)╯︵ ┻━┻','┬─┬ノ( º _ ºノ)','( ͡° ͜ʖ ͡°)',
      '(⌐■_■)','(•_•)','( •_•)>⌐■-■','ᕕ( ᐛ )ᕗ','ʕ•ᴥ•ʔ',
      '(ง •̀_•́)ง','(◠‿◠)','(^_^)','(T_T)','(>_<)',
      '(*^_^*)','(^o^)','(≧◡≦)','(✿◠‿◠)','(─‿─)',
      '(☞ ͡° ͜ʖ ͡°)☞','ಠ_ಠ','ᕦ(ò_óˇ)ᕤ','(⊙_⊙)','(¬‿¬)',
    ],
  },
  {
    id: 'animals',
    label: 'Animals & Nature',
    icon: '🐱',
    items: [
      '🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐻‍❄️','🐨',
      '🐯','🦁','🐮','🐷','🐸','🐵','🙈','🙉','🙊','🐒',
      '🐔','🐧','🐦','🐤','🐣','🦆','🦅','🦉','🦇','🐺',
      '🐗','🐴','🦄','🐝','🪱','🐛','🦋','🐌','🐞','🐜',
      '🪲','🐢','🐍','🦎','🦂','🕷','🕸','🐙','🦑','🦐',
      '🌸','🌺','🌻','🌹','🌷','🌼','🌿','🍀','🍁','🍂',
    ],
  },
  {
    id: 'food',
    label: 'Food & Drink',
    icon: '🍕',
    items: [
      '🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍈',
      '🍒','🍑','🥭','🍍','🥥','🥝','🍅','🥑','🍆','🥦',
      '🍕','🍔','🍟','🌭','🍿','🧂','🥚','🍳','🥞','🧇',
      '🥓','🥩','🍗','🍖','🌮','🌯','🥙','🧆','🥗','🍝',
      '🍜','🍲','🍛','🍣','🍱','🥟','🍤','🍙','🍚','🍘',
      '☕','🍵','🧋','🥤','🍺','🍷','🍸','🍹','🧃','🥂',
    ],
  },
  {
    id: 'travel',
    label: 'Travel & Weather',
    icon: '✈️',
    items: [
      '✈️','🚀','🚗','🚕','🚙','🏎','🚓','🚑','🚒','🚐',
      '🛻','🚚','🚛','🚜','🏍','🛵','🚲','🛴','🛺','🚂',
      '🚆','🚇','🚊','🚉','🚁','🛶','⛵','🚤','🛳','⛴',
      '🌍','🌎','🌏','🗺','🧭','🏔','⛰','🌋','🗻','🏕',
      '☀️','🌤','⛅','🌥','☁️','🌦','🌧','⛈','🌩','🌨',
      '❄️','☃️','⛄','🌬','💨','🌪','🌈','🌊','💧','☔',
    ],
  },
]

export default function EmojiBoard() {
  const [copied, setCopied] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('popular')
  const [recentItems, setRecentItems] = useState<string[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem('emoji-recent')
      if (stored) setRecentItems(JSON.parse(stored))
    } catch {}
  }, [])

  const handleCopy = useCallback((emoji: string) => {
    navigator.clipboard.writeText(emoji).then(() => {
      setCopied(emoji)
      setTimeout(() => setCopied(null), 1200)

      setRecentItems(prev => {
        const next = [emoji, ...prev.filter(e => e !== emoji)].slice(0, 30)
        try { localStorage.setItem('emoji-recent', JSON.stringify(next)) } catch {}
        return next
      })
    })
  }, [])

  /* search filter */
  const filteredCategories = search.trim()
    ? categories.map(cat => ({
        ...cat,
        items: cat.items.filter(e => e.includes(search)),
      })).filter(cat => cat.items.length > 0)
    : categories.filter(cat => cat.id === activeCategory)

  return (
    <div>
      {/* Search */}
      <div className="relative mb-4">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search emojis... (paste an emoji to find similar)"
          className="w-full px-4 py-3 text-base rounded-xl bg-white focus:outline-none"
          style={{ border: '1.5px solid #ddd4e8' }}
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category tabs */}
      {!search && (
        <div className="flex gap-1 overflow-x-auto pb-2 mb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          {recentItems.length > 0 && (
            <button
              onClick={() => setActiveCategory('recent')}
              className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === 'recent'
                  ? 'text-white'
                  : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
              }`}
              style={activeCategory === 'recent' ? { background: 'var(--accent)' } : {}}
            >
              🕐 Recent
            </button>
          )}
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat.id
                  ? 'text-white'
                  : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
              }`}
              style={activeCategory === cat.id ? { background: 'var(--accent)' } : {}}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Copied toast */}
      {copied && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2">
          <span className="text-lg">{copied}</span> Copied!
        </div>
      )}

      {/* Recent section */}
      {!search && activeCategory === 'recent' && recentItems.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">🕐 Recently Used</h2>
          <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(44px, 1fr))' }}>
            {recentItems.map((emoji, i) => (
              <button
                key={`recent-${i}`}
                onClick={() => handleCopy(emoji)}
                className="aspect-square flex items-center justify-center text-2xl rounded-lg hover:bg-gray-100 active:scale-90 transition-all cursor-pointer"
                title={`Copy ${emoji}`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Emoji grid */}
      {(search ? filteredCategories : categories.filter(c => c.id === activeCategory)).map(cat => (
        <div key={cat.id} className="mb-6">
          {search && (
            <h2 className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">
              {cat.icon} {cat.label} ({cat.items.length})
            </h2>
          )}
          <div
            className="grid gap-1"
            style={{
              gridTemplateColumns: cat.id === 'text-faces'
                ? 'repeat(auto-fill, minmax(140px, 1fr))'
                : 'repeat(auto-fill, minmax(44px, 1fr))',
            }}
          >
            {cat.items.map((emoji, i) => (
              <button
                key={`${cat.id}-${i}`}
                onClick={() => handleCopy(emoji)}
                className={`flex items-center justify-center rounded-lg hover:bg-gray-100 active:scale-90 transition-all cursor-pointer ${
                  cat.id === 'text-faces'
                    ? 'text-sm py-2 px-2'
                    : 'aspect-square text-2xl'
                }`}
                title={`Copy ${emoji}`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      ))}

      {search && filteredCategories.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-4xl mb-2">🔍</p>
          <p>No emojis found for &ldquo;{search}&rdquo;</p>
        </div>
      )}
    </div>
  )
}
