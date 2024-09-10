import { mockTasks } from '@/lib/mock'

export const dynamic = 'force-static'

export async function GET() {
  const tasks = mockTasks
  return new Response(JSON.stringify(tasks), {
    headers: { 'Content-Type': 'application/json' },
  })
}
