async function getPost(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return response.json()
}

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({params: {id}}: Props) {
  const post = await getPost(id)

  return {
    title: `#${post.id} ${post.title} | Next App`
  }
}

export default async function Post({params: {id}}: Props) {
  const post = await getPost(id)

  return (
    <>
      <div className='text-2xl flex items-start gap-1'>
        <span className='font-semibold'>#{post.id}</span>
        {post.title}
      </div>
      <div className='mt-6 text-xl'>
        {post.body}
      </div>
    </>
  )
}
