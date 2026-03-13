"use client"

import { PropsWithChildren } from "react"
import { Provider } from "react-redux";
import store from '@stores/store'

const StoreContext = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreContext