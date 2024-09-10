export const dynamic = 'force-static'

export const mockTasks = [
  { id: 1, text: 'Something to do', done: false },
  { id: 2, text: 'Another little task', done: true },
  { id: 3, text: 'Do it in style', done: false },
  { id: 4, text: 'DO THIS NOW', done: false },
  { id: 5, text: 'for later', done: true },
  { id: 6, text: 'Do me ;)', done: true },
]

export async function GET() {
  const tasks = mockTasks
  return new Response(JSON.stringify(tasks), {
    headers: { 'Content-Type': 'application/json' },
  })
}
