'use client'

import { ProductList } from '@components/organisms'
import type { Product, GroupedProducts } from '@models/products'
import { NAVIGATION_ROUTES } from '@constants/routes'
import { addProduct, subProduct } from '@stores/features/cartSlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  groupedProducts: GroupedProducts[]
  categoryId: string
}

const CategoryPageClient = ({ groupedProducts, categoryId }: Props) => {
  const router = useRouter()

  const dispatch = useStoreDispatch()
  const cartProducts = useStoreSelector(state => state.cart.products)

  const category = useMemo(() => {
    return groupedProducts.find(c => c.id === categoryId) ?? null
  }, [groupedProducts, categoryId])

  useEffect(() => {
    if (!categoryId) {
      router.replace(NAVIGATION_ROUTES.home)
      return
    }

    if (groupedProducts.length > 0 && !category) {
      router.replace(NAVIGATION_ROUTES.home)
    }
  }, [categoryId, category, groupedProducts, router])

  if (!categoryId || !category) {
    return null
  }

  const navigateToCategory = (id: string) => {
    router.push(NAVIGATION_ROUTES.category(id))
  }

  const onAddProduct = (product: Product) => {
    dispatch(addProduct({ product }))
  }

  const onSubProduct = (product: Product) => {
    dispatch(subProduct({ productId: product.id }))
  }

  return (
    <ProductList
      data={[category]}
      selectedData={cartProducts}
      onPressMore={navigateToCategory}
      onAddProduct={onAddProduct}
      onSubProduct={onSubProduct}
    />
  )
}

export default CategoryPageClient