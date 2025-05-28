import { redirect } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug === 'test') {
    redirect('https://example.com')
  } else {
    return <h1>404 - Link not found</h1>
  }
}
