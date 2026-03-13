'use client'

import { CartButton, IconButton } from '@components/molecules/buttons'
import { NAVIGATION_ROUTES } from '@constants/routes'
import { useStoreSelector } from '@stores/store'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const setNavStateStyle = (isActive: boolean) =>
  isActive ? 'shadow-md-red' : undefined

const Header = () => {
  const pathname = usePathname()

  const { products, totalPrice } = useStoreSelector(state => state.cart)

  const user = useStoreSelector(store => store.user.user)

  return (
    <header className="sticky top-0 z-50">
      <div className="flex px-10 py-7 items-center bg-white max-w-[1440px] mx-auto max-lg:px-5">
        <div className="flex-1 max-lg:hidden" />

        <div className="shrink-0 justify-center">
          <Link href={NAVIGATION_ROUTES.home}>
            <h1 className="text-5xl text-dark_gray ease-out duration-300 hover:scale-110">
              Yumes Pizza
            </h1>
          </Link>
        </div>

        <div className="flex flex-1 gap-5 justify-end">
          <Link href={NAVIGATION_ROUTES.cart}>
              <CartButton
                className={setNavStateStyle(pathname.includes(NAVIGATION_ROUTES.cart))}
                totalPrice={totalPrice}
                count={products.length}
              />
          </Link>

          <Link href={NAVIGATION_ROUTES.profile}>
              <IconButton
                icon="UserIcon"
                className={setNavStateStyle(pathname.includes(NAVIGATION_ROUTES.profile))}
                label={user?.name}
              />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
