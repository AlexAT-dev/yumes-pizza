'use client'

// import type { Metadata } from 'next'
import { Animation } from '@components/atoms'
import { Button } from '@components/molecules/buttons'
import { NAVIGATION_ROUTES } from '@constants/routes'
import { useStoreSelector } from '@stores/store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// export const metadata: Metadata = {
//   title: "Оформлення замовлення - Yumes",
//   description: "Завершіть оформлення вашого замовлення. Підтвердіть деталі доставки та оплати в Yumes.",
//   keywords: ["оформлення", "замовлення", "доставка", "оплата", "Yumes"],
//   openGraph: {
//     title: "Оформлення замовлення - Yumes",
//     description: "Завершіть оформлення вашого замовлення. Підтвердіть деталі доставки та оплати в Yumes.",
//     type: "website",
//   },
// };

const OrderCheckoutedPage = () => {
  const router = useRouter()

  const orderId = useStoreSelector(store => store.order.checkoutedOrder)

  useEffect(() => {
    if (!orderId) {
      router.replace(NAVIGATION_ROUTES.cart)
    }
  }, [orderId, router])

  if (!orderId) {
    return null
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col my-auto pb-3 items-center">
        <Animation name="CartDoneLottie" style={{ height: 125 }} loop={false} />

        <div className="flex flex-col py-14 gap-4">
          <p className="text-heading6 text-dark_gray text-center font-bold">
            Thank you for your purchase!
          </p>
          <p className="text-heading6 text-dark_gray text-center font-medium">
            Your order # is: {orderId}
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

export default OrderCheckoutedPage
