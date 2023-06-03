import React from 'react'

export const metadata = {
  title: 'Post | Next App'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
