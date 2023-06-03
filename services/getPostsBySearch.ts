export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)

  if (!response.ok) throw await new Error('unable to fetch posts by search')

  return response.json()
}
