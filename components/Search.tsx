'use client'

import { FormEventHandler, useState } from 'react'
import { post } from '@/interfaces/post'
import { getPostsBySearch } from '@/services/getPostsBySearch'

type Props = {
  onSearch: (value: post[]) => void
}
export default function Search({onSearch}: Props) {
  const [search, setSearch] = useState<string>('')

  const handlerSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const posts = await getPostsBySearch(search)
    onSearch(posts)
  }

  return (
    <form className='relative flex w-full items-center sm:w-3/4 md:w-1/2 lg:w-1/3' onSubmit={handlerSubmit}>
      <input
        type='search'
        id='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-400 bg-white px-4 py-2 text-base text-gray-700 shadow-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
        placeholder='Search'
      />
      <button
        type='submit'
        className='ml-2 rounded-lg border border-blue-600 bg-blue-600 text-sm font-medium text-white p-2.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
      >
        <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
        </svg>
        <span className='sr-only'>Search</span>
      </button>
    </form>
  )
}
