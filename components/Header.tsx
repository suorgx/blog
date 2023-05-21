import Link from "next/link";

export default function Header() {
  return (
    <header className='flex gap-3 sm:gap-6'>
      <Link className='font-medium text-blue-600 hover:underline' href='/'>
        Home
      </Link>
      <Link className='font-medium text-blue-600 hover:underline' href='/blog/'>
        Blog
      </Link>
      <Link className='font-medium text-blue-600 hover:underline' href='/about/'>
        About
      </Link>
    </header>
  )
}
