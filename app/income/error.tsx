'use client' // Error components must be Client Components

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({
  error,
  // reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='margin-1-0'>
      <h2>Error in the income route.</h2>
      <p>Something went wrong!</p>
      <button className='button'
        onClick={
          () => {
            // Attempt to recover by trying to re-render the segment
            // reset()
            router.push('/income')
          }

        }
      >
        Try again
      </button>
    </div >
  )
}