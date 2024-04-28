'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='margin-1-0'>
      <h2>Error in the app route.</h2>
      <p>Something went wrong!</p>
      <div className='margin-1-0'>
        <Link className='button' href='/'>Try again</Link>
      </div>
    </div>
  )
}