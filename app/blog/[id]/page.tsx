'use client'

import { useState, useEffect } from 'react'
import { getPostsById } from '@/services/getPostById'
import { post } from '@/interfaces/post'

type Props = {
  params: {
    id: string
  }
}

export default function Post({params: {id}}: Props) {
  const [post, setPost] = useState<post>(Object)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getPostsById(id)
      .then(setPost)
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      {
        !loading
          ?
          <>
            <div className='flex items-start gap-1 text-2xl'>
              <span className='font-semibold'>#{post.id}</span>
              {post.title}
            </div>
            <div className='mt-6 text-xl'>
              {post.body}
            </div>
          </>
          :
          <div className='mt-6 text-2xl'>
            Loading...
          </div>
      }
    </>
  )
}
