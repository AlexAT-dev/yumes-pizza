'use client'

import useUserQuery from '@/common/api/resources/user/useUserQuery'
import { GoToTopButton } from '@components/molecules/buttons'
import { Footer, Header } from '@components/organisms/navigation'
import { useScrollPageToTop } from '@hooks'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  useScrollPageToTop()
  useUserQuery()

  return (
    <>
      <Header />
      <main className="grow w-full max-w-[1440px] mx-auto">
        {children}
        <GoToTopButton />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
