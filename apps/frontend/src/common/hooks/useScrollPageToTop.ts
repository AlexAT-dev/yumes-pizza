import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export const scrollToTop = () => window.scrollTo(0, 0)

const useScrollPageToTop = () => {
  const pathname  = usePathname()

  useEffect(() => {
    scrollToTop()
  }, [pathname])
}

export default useScrollPageToTop
