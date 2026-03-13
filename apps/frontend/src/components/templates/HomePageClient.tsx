'use client'

import { NewsSwiper, ProductList } from '@components/organisms'
import { addProduct, subProduct } from '@stores/features/cartSlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'
import { useRouter } from 'next/navigation'
import CategorySection from '@/components/templates/CategorySection'
import { News } from '@/common/models/news'
import { GroupedProducts } from '@/common/models/products'

const HomePageClient = ({ news, groupedProducts } : { news: News[], groupedProducts: GroupedProducts[] }) => {
  const navigation = useRouter()
  const dispatch = useStoreDispatch()
  const cartProducts = useStoreSelector(state => state.cart.products)

  const navigateToCategory = (id: string) =>
    navigation.push(`/category/${id}`)

  return (
    <CategorySection>
      {news.length > 0 && <NewsSwiper news={news} />}

      <ProductList
        data={groupedProducts}
        selectedData={cartProducts}
        onPressMore={navigateToCategory}
        onAddProduct={(product) => dispatch(addProduct({ product }))}
        onSubProduct={(product) =>
          dispatch(subProduct({ productId: product.id }))
        }
        withMore
      />
    </CategorySection>
  )
}

export default HomePageClient