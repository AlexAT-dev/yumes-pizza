'use client'

import { Animation } from '@components/atoms'
import { NAVIGATION_ROUTES } from '@constants/routes'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const NotFoundPage = () => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (NAVIGATION_ROUTES.category().includes(pathname)) {
      router.replace(NAVIGATION_ROUTES.home)
    }
  }, [pathname, router])

  if (NAVIGATION_ROUTES.category().includes(pathname)) {
    return null
  }

  return (
    <div className="flex h-full items-center justify-center">
      <Animation name="PageNoFoundLottie" style={{ width: '49%' }} />
    </div>
  )
}

export default NotFoundPage
