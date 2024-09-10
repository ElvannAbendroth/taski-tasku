export async function getAll() {
  const res = await fetch(`/api/task/`)
  if (!res?.ok) throw new Error('Error while fetching user from UserDataContext')
  const data = await res.json()
  return data
}

const taskService = { getAll }

export default taskService
