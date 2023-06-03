'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinks = {
  href: string;
  name: string;
}

type Props = {
  navLinks: NavLinks[]
}

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname()

  return (
    <nav className='flex gap-3 sm:gap-6'>
      {navLinks.map((link) => (
        <Link
          className={`font-medium text-blue-600 hover:underline ${pathname === link.href ? 'underline' : ''}`}
          href={link.href}
          key={link.href}
        >
          {link.name}
        </Link>
        )
      )}
    </nav>
  )
}
