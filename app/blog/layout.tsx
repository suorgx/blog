import React from 'react'

export const metadata = {
  title: 'Blog | Next App'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}
