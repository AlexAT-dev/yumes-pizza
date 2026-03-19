export const NAVIGATION_ROUTES = {
  // main
  home: '/',
  category: (categoryId?: string) =>
    typeof categoryId === 'string'
      ? `/category/${categoryId}`
      : `/category/:categoryId`,
 
  // profile
  profile: '/profile',
  // orderHistory: '/profile/history',

  // auth
  signIn: '/profile/sign-in',
  signUp: '/profile/sign-up',
  // cart
  cart: '/cart',
  orderCheckouted: `/cart/checkout`,
  // else
  about: '/about',
  delivery: '/delivery',
  notFound: '*',
} as const

export type CategoryRouteParams = {
  categoryId: string
}

export type OrderCheckoutedParams = {
  idOrder: string
}
