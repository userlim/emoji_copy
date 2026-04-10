import { Metadata } from 'next'
import CopyGrid from '@/components/CopyGrid'
import CategoryNav from '@/components/CategoryNav'

export const metadata: Metadata = {
  title: 'Chess Symbols Copy and Paste ♔ ♕ ♖ ♗ ♘ ♙',
  description: 'Copy and paste chess piece symbols and game symbols. Perfect for chess notation, chess content, and strategic game discussions.',
  keywords: 'chess symbols, chess pieces, chess notation, game symbols, white pieces, black pieces, copy paste',
}

export default function ChessPage() {
  const whitePieces = '♔ ♕ ♖ ♗ ♘ ♙'.split(' ')

  const blackPieces = '♚ ♛ ♜ ♝ ♞ ♟'.split(' ')

  const gameSymbols = '☐ ☑ ☒ ■ □ ▪ ▫ ⬛ ⬜ 🏆 🥇 🥈 🥉 🎯'.split(' ')

  const chessPieces = [
    { symbol: '♔', name: 'White King', piece: 'King' },
    { symbol: '♕', name: 'White Queen', piece: 'Queen' },
    { symbol: '♖', name: 'White Rook', piece: 'Rook' },
    { symbol: '♗', name: 'White Bishop', piece: 'Bishop' },
    { symbol: '♘', name: 'White Knight', piece: 'Knight' },
    { symbol: '♙', name: 'White Pawn', piece: 'Pawn' },
    { symbol: '♚', name: 'Black King', piece: 'King' },
    { symbol: '♛', name: 'Black Queen', piece: 'Queen' },
    { symbol: '♜', name: 'Black Rook', piece: 'Rook' },
    { symbol: '♝', name: 'Black Bishop', piece: 'Bishop' },
    { symbol: '♞', name: 'Black Knight', piece: 'Knight' },
    { symbol: '♟', name: 'Black Pawn', piece: 'Pawn' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8">
      <CategoryNav current="/chess" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-100">
          Chess Symbols Copy and Paste
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Discover and copy chess piece symbols and game symbols for chess notation and discussions
        </p>

        <div className="space-y-12">
          {/* White Pieces Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">♔ White Pieces</h2>
            <CopyGrid items={whitePieces} />
          </section>

          {/* Black Pieces Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">♚ Black Pieces</h2>
            <CopyGrid items={blackPieces} />
          </section>

          {/* Game Symbols Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">🏆 Game & Board Symbols</h2>
            <CopyGrid items={gameSymbols} />
          </section>

          {/* Chess Pieces Reference */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-200">♔ Chess Piece Reference</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
              {chessPieces.map((piece) => (
                <div key={piece.name} className="bg-white/[0.03] rounded-lg p-4 border border-white/10 text-center">
                  <div className="text-3xl mb-1">{piece.symbol}</div>
                  <div className="text-sm font-bold text-gray-100">{piece.name}</div>
                  <div className="text-xs text-gray-500">{piece.piece}</div>
                </div>
              ))}
            </div>
            <CopyGrid items={chessPieces.map(p => p.symbol)} />
          </section>
        </div>

        {/* SEO Content */}
        <section className="mt-16 bg-white/[0.03] rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Chess Symbols Copy and Paste Guide</h2>
          <div className="prose prose-sm max-w-none text-gray-300 space-y-4">
            <p>
              Chess symbols are Unicode characters representing the pieces and elements of chess. These symbols are perfect for chess notation, game analysis, and chess-related content. Each symbol represents a specific chess piece with distinct movement rules and strategic importance.
            </p>
            <p>
              Our collection includes all chess piece symbols for both white and black pieces, plus additional game symbols for boards and achievements. Whether you're writing chess analysis, discussing strategy, or creating chess content, you'll find the symbols you need.
            </p>
            <p>
              Perfect for chess blogs, game analysis, chess forums, and educational materials. All symbols are compatible with standard chess notation software and all platforms.
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
                  name: 'What are chess symbols used for?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Chess symbols are used for chess notation, game analysis, and discussions about chess strategy. They represent each piece type and help communicate chess moves and positions clearly.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I copy chess symbols?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simply click on any chess symbol you want to copy. It will be copied to your clipboard and you can paste it in chess analysis, forums, or wherever you need chess notation.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are chess symbols compatible with all chess software?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, chess symbols are standard Unicode characters and are compatible with all modern chess software, notation systems, and platforms.',
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
