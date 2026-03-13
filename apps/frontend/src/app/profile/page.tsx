'use client'

// import type { Metadata } from 'next'
import { useOrderQuery, useUserQuery } from '@api'
import { CategoryLine } from '@components/molecules'
import { OrderHistoryList } from '@components/organisms'
import { NAVIGATION_ROUTES } from '@constants/routes'
import { useStoreSelector } from '@stores/store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// export const metadata: Metadata = {
//   title: "Профіль - Yumes",
//   description: "Перегляньте свій профіль, історію замовлень та налаштування в Yumes.",
//   keywords: ["профіль", "замовлення", "історія", "Yumes"],
//   openGraph: {
//     title: "Профіль - Yumes",
//     description: "Перегляньте свій профіль, історію замовлень та налаштування в Yumes.",
//     type: "website",
//   },
// };

const ProfilePage = () => {
  const { user } = useStoreSelector(store => ({
    user: store.user.user,
  }))

  const { orders } = useOrderQuery()
  const { logout } = useUserQuery()

  const router = useRouter()
  useEffect(() => {
    if (!user) {
      router.replace(NAVIGATION_ROUTES.signIn)
    }
  }, [user, router])

  if (!user) {
    return null
  }

  // TODO: to check error handling (ErrorBoundary)
  // throw new Error('h4lo')

  return (
    <div className="w-full max-w-[860px] mx-auto max-lg:px-5">
      <CategoryLine
        title={`${user.name}'s order history`}
        right={{
          className:
            'text-transparent bg-clip-text bg-gradient-to-r from-dark_gray to-dark_red',
          title: 'Logout',
          onPress: logout,
        }}
      />
      <OrderHistoryList data={orders} />
    </div>
  )
}

export default ProfilePage
