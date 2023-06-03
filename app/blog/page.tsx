'use client'

import { useState, useEffect } from 'react'
import { getPosts } from '@/services/getPosts'
import { post } from '@/interfaces/post'
import PostItem from '@/components/PostItem'
import Search from '@/components/Search'


export default function Blog() {
  const [posts, setPosts] = useState<post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getPosts()
      .then(setPosts)
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div className='mb-6 text-2xl'>
        Blog
      </div>
      <Search onSearch={setPosts} />
      {
        !loading
          ?
          <ul className='mt-6 max-w-md list-inside text-gray-500 space-y-1'>
            {posts.map((post: post, index) => (
                <PostItem post={post} key={index}></PostItem>
              )
            )}
          </ul>
          :
          <div className='mt-6 text-2xl'>
            Loading...
          </div>
      }
    </>
  )
}
