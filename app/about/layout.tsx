import React from 'react'
import Tabs from '@/components/Tabs'

export const metadata = {
  title: 'About | Next App'
}

const tabsItems = [
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Team',
    href: '/about/team'
  },
  {
    name: 'Contacts',
    href: '/about/contacts'
  }
]

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
      <Tabs tabsItems={tabsItems}></Tabs>
      {children}
    </>
  )
}
