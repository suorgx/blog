'use client'

import Link from 'next/link'
import { post } from '@/interfaces/post'

type Props = {
  post: post
}

export default function PostItem({ post }: Props) {
  return (
    <li>
      <Link className='flex items-start gap-1 text-gray-900' href={`/blog/${post.id}`}>
        <span className='font-semibold'>{post.id}</span>
        <span className='hover:underline'>{post.title}</span>
      </Link>
    </li>
  )
}
