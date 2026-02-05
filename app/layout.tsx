import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sajid Shah | CEO of OnSense.AI - Equipment Management & AI Innovation',
  description: 'Sajid Shah, CEO of OnSense.AI. Leading the equipment management backbone with AI-powered solutions. 13+ years of tech leadership in equipment diagnostics, proptech, and industry 4.0.',
  generator: 'v0.app',
  openGraph: {
    title: 'Sajid Shah | CEO of OnSense.AI',
    description: 'Equipment Management Backbone | AI Innovation | Industry 4.0 Leader',
    type: 'website',
    url: 'https://sajidshah.me',
    siteName: 'Sajid Shah Portfolio',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
