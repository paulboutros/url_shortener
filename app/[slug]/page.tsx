

import { redirect } from 'next/navigation'

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug

  // Simple redirect to example.com or 404 fallback
  if (slug === 'test') {
    redirect('https://example.com')
  } else {
    return <h1>404 - Link not found</h1>
  }
}


/*
import { redirect } from 'next/navigation'
import rawLinks from '../../links.json'

const links: { [key: string]: string } = rawLinks

 interface PageProps {
  params: {
    slug: string
  }
}

export default async function ShortUrlRedirect({ params }: PageProps) {
  const { slug } = params
  const destination = links[slug]

  if (!destination) {
    // If slug not found, show 404 page
    return <h1>404 - Link not found</h1>
  }

  // Redirect immediately to the destination URL
  redirect(destination)
}
*/