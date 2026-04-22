'use client'
import { useState, useCallback, useEffect } from 'react'

export default function RecentEmojis() {
  const [recent, setRecent] = useState<string[]>([])
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('emoji-recent')
      if (stored) setRecent(JSON.parse(stored))
    } catch {}
  }, [])

  const handleCopy = useCallback((sym: string) => {
    navigator.clipboard.writeText(sym).then(() => {
      setCopied(sym)
      setTimeout(() => setCopied(null), 1200)
      setRecent(prev => {
        const next = [sym, ...prev.filter(e => e !== sym)].slice(0, 50)
        try { localStorage.setItem('emoji-recent', JSON.stringify(next)) } catch {}
        return next
      })
    })
  }, [])

  if (recent.length === 0) return null

  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
        Recently Used
      </h2>
      {copied && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2">
          <span className="text-xl">{copied}</span> Copied!
        </div>
      )}
      <div
        className="flex flex-wrap gap-1.5 p-4 rounded-2xl bg-white"
        style={{ border: '1.5px solid var(--card-border)' }}
      >
        {recent.map((sym, i) => (
          <button
            key={`recent-${i}`}
            onClick={() => handleCopy(sym)}
            className="w-11 h-11 flex items-center justify-center text-2xl rounded-lg hover:bg-gray-100 active:scale-90 transition-all cursor-pointer"
            title={`Copy ${sym}`}
          >
            {sym}
          </button>
        ))}
      </div>
    </section>
  )
}
