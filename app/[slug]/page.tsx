import { redirect } from 'next/navigation'
import rawLinks from '../../links.json' // adjust path if needed

const links: { [key: string]: string } = rawLinks

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const destination = links[slug]

  if (destination) {
    redirect(destination)
  } else {
    return <h1>404 - Link not found</h1>
  }
}



/*
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
*/