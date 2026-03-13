'use client'

import { Animation } from '@components/atoms'
import { Button } from '@components/molecules/buttons'
import { NAVIGATION_ROUTES } from '@constants/routes'
import { useRouter } from 'next/navigation'

const CartEmptyPage = () => {
  const router = useRouter()

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col pb-3 items-center">
        <Animation name="PackingLottie" style={{ height: 250 }} />

        <div className="pb-14">
          <p className="text-heading6 text-dark_gray text-center font-bold">
            Your basket is empty
          </p>
        </div>

        <Button
          label="Start shopping"
          onClick={() => router.push(NAVIGATION_ROUTES.home)}
        />
      </div>
    </div>
  )
}

export default CartEmptyPage
