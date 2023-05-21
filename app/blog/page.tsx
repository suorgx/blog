import Link from 'next/link'

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/')

  if (!response.ok) throw await new Error('unable to fetch')

  return response.json()
}

export const metadata = {
  title: 'Blog | Next App'
}

export default async function Blog() {
  const posts = await getPosts()

  return (
    <>
      <div className='text-2xl'>
        Blog
      </div>
      <ul className="mt-6 max-w-md space-y-1 text-gray-500 list-inside">
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link className='flex items-start gap-1 text-gray-900' href={`/blog/${post.id}`}>
              <span className='font-semibold'>{post.id}</span>
              <span className='hover:underline'>{post.title}</span>
            </Link>
          </li>
          )
        )}
      </ul>
    </>
  )
}
