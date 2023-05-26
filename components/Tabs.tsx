'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

type TabsItems = {
  href: string;
  name: string;
}

type Props = {
  tabsItems: TabsItems[]
}

export default function Tabs({ tabsItems }: Props) {
  const pathname = usePathname()

  return (
    <ul className="mt-6 mb-3 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
      {tabsItems.map((item) => (
        <li className="mr-2">
          <Link
            className={`inline-block p-3 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ${pathname === item.href ? 'text-blue-600 bg-gray-100' : ''}`}
            href={item.href}
            key={item.href}
          >
            {item.name}
          </Link>
        </li>
        )
      )}
    </ul>
  )
}
