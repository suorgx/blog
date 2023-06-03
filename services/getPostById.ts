export const getPostsById = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  if (!response.ok) throw await new Error('unable to fetch')

  return response.json()
}
