'use client'

// import type { Metadata } from 'next'
import { useGroupedProductsQuery } from '@api'
import { ProductList } from '@components/organisms'
import type { Product } from '@models/products'
import { NAVIGATION_ROUTES, type CategoryRouteParams } from '@constants/routes'
import { addProduct, subProduct } from '@stores/features/cartSlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import { useEffect, useMemo } from 'react'
import { useRouter, useParams } from 'next/navigation'

type Props = {
  params: CategoryRouteParams
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { categoryId } = params
//   // Note: In a real app, fetch category name from API or database
//   // For now, using placeholder; replace with actual data
//   const categoryName = categoryId ? `Категорія ${categoryId}` : 'Категорія'

//   return {
//     title: `${categoryName} - Yumes`,
//     description: `Перегляньте продукти з категорії ${categoryName}. Замовте з доставкою від Yumes.`,
//     keywords: [categoryName, "доставка", "їжа", "Yumes"],
//     openGraph: {
//       title: `${categoryName} - Yumes`,
//       description: `Перегляньте продукти з категорії ${categoryName}. Замовте з доставкою від Yumes.`,
//       type: "website",
//     },
//   }
// }

const CategoryPage = () => {
  const router = useRouter()
  const { categoryId } = useParams() as CategoryRouteParams

  const dispatch = useStoreDispatch()
  const cartProducts = useStoreSelector(state => state.cart.products)

  const groupedProductsQuery = useGroupedProductsQuery()

  const products = useMemo(() => {
    const category = groupedProductsQuery.groupedProducts.find(
      category => category.id === categoryId,
    )

    return category ?? null
  }, [categoryId, groupedProductsQuery.groupedProducts])

  useEffect(() => {
    if (!categoryId) {
      router.replace(NAVIGATION_ROUTES.home)
      return
    }
    if (groupedProductsQuery.groupedProducts.length > 0 && !products) {
      router.replace(NAVIGATION_ROUTES.home)
    }
  }, [categoryId, products, groupedProductsQuery.groupedProducts, router])

  if (!categoryId || !products) {
    return null
  }

  const navigateToCategory = (id: string) =>
    router.push(NAVIGATION_ROUTES.category(id))

  const onAddProduct = (product: Product) => {
    dispatch(addProduct({ product }))
  }

  const onSubProduct = (product: Product) => {
    dispatch(subProduct({ productId: product.id }))
  }

  return (
    <>
      <ProductList
        data={[products]}
        selectedData={cartProducts}
        onPressMore={navigateToCategory}
        onAddProduct={onAddProduct}
        onSubProduct={onSubProduct}
      />
    </>
  )
}

export default CategoryPage
