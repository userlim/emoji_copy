import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Emoji Copy & Paste',
    short_name: 'Emoji',
    description: '3000+ Emojis One-Click Copy',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#EC4899',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
