'use client'

import { useState, useEffect } from 'react'
import PostItem from '@/components/PostItem'
import { getPosts } from '@/services/getPosts'

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getPosts()
      .then(setPosts)
      .finally(() => {
        setLoading(false)
      })
  }, []);

  console.log(posts)

  return (
    <>
      <div className='text-2xl'>
        Blog
      </div>
      {
        !loading
          ?
          <ul className="mt-6 max-w-md space-y-1 text-gray-500 list-inside">
            {posts.map((post: any, index) => (
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
