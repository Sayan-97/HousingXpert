import './globals.css'
import type { Metadata } from 'next'
import Satoshi from 'next/font/local'
import Header from '@/components/shared/Header'

const satoshiFont = Satoshi({
  src: [
    {
      path: '../public/fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/Satoshi-Black.otf',
      weight: '900',
      style: 'normal'
    },
  ]
})

export const metadata: Metadata = {
  title: 'Housing Xpert',
  description: 'Discover Your Dream Home with Cutting-Edge AI Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={satoshiFont.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}