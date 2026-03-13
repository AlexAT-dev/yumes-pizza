'use client'

import { Button } from '@components/molecules/buttons'
import { NAVIGATION_ROUTES } from '@constants/routes'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const router = useRouter()

  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  const message = error?.message || 'An unexpected error occurred'

  return (
    <div className="flex flex-1 p-5 h-svh items-center justify-center">
      <div className="flex flex-col gap-5 px-10 py-5 items-center justify-center rounded-[20px] shadow-md overflow-hidden text-center text-dark-gray">
        <h1 className="text-heading1 font-bold">
          Oops! You have found the lost store!
        </h1>
        <h6 className="text-heading6 font-bold">
          Sorry, something went wrong. We`ll clean up and try again.
        </h6>
        <p className="mt-4 text-description text-thin-gray font-medium">
          {message}
        </p>

        <div className="flex gap-3">
          <Button label="Try again" onClick={() => reset()} />
          <Button
            label="Go to home"
            onClick={() => router.push(NAVIGATION_ROUTES.home)}
          />
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
