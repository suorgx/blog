import './globals.css'
import React from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Home | Next App'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Header></Header>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
