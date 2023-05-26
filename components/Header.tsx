import Navigation from '@/components/Navigation'

const navLinks = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'About',
    href: '/about'
  }
]

export default function Header() {
  return (
    <header className='flex gap-3 sm:gap-6'>
      <Navigation navLinks={navLinks}></Navigation>
    </header>
  )
}
