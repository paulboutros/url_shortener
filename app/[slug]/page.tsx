// app/[slug]/page.tsx
import { redirect } from 'next/navigation'

import rawLinks from '../../links.json'
const links: { [key: string]: string } = rawLinks


interface Params {
  params: {
         slug: string
  }
}

export default function ShortUrlRedirect({ params }: Params) {
  const { slug } = params
  const destination = links[slug]

  if (!destination) {
    // If slug not found, show 404 page
    return <h1>404 - Link not found</h1>
  }

  // Redirect immediately to the destination URL
  redirect(destination)
}
