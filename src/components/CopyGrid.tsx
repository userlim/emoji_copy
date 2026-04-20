'use client'
import { useState, useCallback, useEffect } from 'react'

interface CopyGridProps {
  items: string[]
  columns?: string
}

export default function CopyGrid({ items, columns }: CopyGridProps) {
  const [copied, setCopied] = useState<string | null>(null)
  const [recent, setRecent] = useState<string[]>([])

  useEffect(() => {
    try {
      const s = localStorage.getItem('emoji-recent')
      if (s) setRecent(JSON.parse(s))
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

  const isWide = items.some(s => s.length > 4)
  const gridCols = columns || (isWide ? 'repeat(auto-fill, minmax(120px, 1fr))' : 'repeat(auto-fill, minmax(48px, 1fr))')

  return (
    <>
      {copied && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2">
          <span className="text-xl">{copied}</span> Copied!
        </div>
      )}
      {recent.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xs font-bold text-[var(--text-muted)] mb-2 uppercase tracking-widest">Recently Copied</h2>
          <div className="flex flex-wrap gap-1">
            {recent.slice(0, 20).map((s, i) => (
              <button key={i} onClick={() => handleCopy(s)}
                className="w-10 h-10 flex items-center justify-center text-xl rounded-lg bg-white/[0.02] hover:bg-white/[0.04] active:scale-90 transition-all">{s}</button>
            ))}
          </div>
        </div>
      )}
      <div className="grid gap-1" style={{ gridTemplateColumns: gridCols }}>
        {items.map((sym, i) => (
          <button key={i} onClick={() => handleCopy(sym)}
            className={`flex items-center justify-center rounded-lg hover:bg-white/[0.04] active:scale-90 transition-all cursor-pointer border border-transparent hover:border-white/10 ${
              isWide ? 'py-2 px-2 text-sm' : 'aspect-square text-2xl'
            }`}
            title={`Copy ${sym}`}
          >
            {sym}
          </button>
        ))}
      </div>
    </>
  )
}
