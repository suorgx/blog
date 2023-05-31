export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/')

  if (!response.ok) throw await new Error('unable to fetch')

  return response.json()
}
