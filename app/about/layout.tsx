import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'About | Next App'
}

export default function RootLayout(
  {
   children,
  }: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='text-2xl'>
        About us
      </div>
      <ul className="mt-6 mb-3 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <li className="mr-2">
          <Link href="/about/" className="inline-block p-3 rounded-t-lg hover:text-gray-600 hover:bg-gray-50">About</Link>
        </li>
        <li className="mr-2">
          <Link href="/about/team/" className="inline-block p-3 rounded-t-lg hover:text-gray-600 hover:bg-gray-50">Team</Link>
        </li>
        <li className="mr-2">
          <Link href="/about/contacts/" className="inline-block p-3 rounded-t-lg hover:text-gray-600 hover:bg-gray-50">Contacts</Link>
        </li>
      </ul>
      {children}
    </>
  )
}
