'use client'

import type { CartProduct } from '@models/cart'
import type { Product } from '@models/products'
import store, { useStoreDispatch, useStoreSelector } from '@stores/store'
import { addProduct, subProduct } from '@stores/features/cartSlice'
import ProductCard from '@components/organisms/ProductCard'

type RootState = ReturnType<typeof store.getState>

type RelatedProductsClientProps = {
  products: Product[]
  categoryId: string
}

const RelatedProductsClient = ({ products, categoryId }: RelatedProductsClientProps) => {
  const dispatch = useStoreDispatch()
  const cartProducts = useStoreSelector((state: RootState) => state.cart.products)

  const onAddProduct = (product: Product) => {
    dispatch(addProduct({ product }))
  }

  const onSubProduct = (product: Product) => {
    dispatch(subProduct({ productId: product.id }))
  }

  if (products.length === 0) {
    return null
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Схожі страви</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map(product => {
          const selectedProduct = cartProducts.find(
            (item: CartProduct) => item.id === product.id,
          )

          return (
            <div key={product.id}>
              <ProductCard
                className=""
                product={product}
                categoryId={categoryId}
                count={selectedProduct?.count ?? 0}
                stock={product.stock}
                onAdd={() => onAddProduct(product)}
                onSub={() => onSubProduct(product)}
              />
            <br />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RelatedProductsClient
