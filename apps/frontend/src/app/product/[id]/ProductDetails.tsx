'use client'

import type { Product } from '@models/products'
import { Price } from '@components/atoms'
import { CountButton } from '@components/molecules/buttons'
import { addProduct, subProduct } from '@stores/features/cartSlice'
import { useStoreDispatch, useStoreSelector } from '@stores/store'

type ProductDetailsProps = {
  product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const dispatch = useStoreDispatch()

  const count = useStoreSelector(
    ({ cart }) => cart.products.find(item => item.id === product.id)?.count ?? 0,
  )

  const handleAdd = () => dispatch(addProduct({ product }))
  const handleSub = () => dispatch(subProduct({ productId: product.id }))

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-3">{product.name}</h1>

      {product.description && (
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      )}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Price
            price={product.price.selling || product.price.full}
            crossed={
              product.price.discount && product.price.selling
                ? product.price.full
                : undefined
            }
          />
          <div className="text-sm text-gray-600 mt-2">
            В наявності: {product.stock} шт.
          </div>
        </div>

        <CountButton
          label="В кошик"
          count={count}
          countMax={product.stock}
          onAdd={handleAdd}
          onSub={handleSub}
          className="mt-2 md:mt-0"
        />
      </div>
    </div>
  )
}

export default ProductDetails
