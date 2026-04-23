import { Price, SaleTag } from '@components/atoms'
import type { Product } from '@models/products'
import type { AllHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { CountButton, type CountButtonProps } from '../molecules/buttons'
import Link from 'next/link'
import Image from 'next/image'
import { NAVIGATION_ROUTES } from '@/common/constants/routes'

export type ProductCardProps = Pick<
  AllHTMLAttributes<HTMLDivElement>,
  'className'
> &
  Pick<CountButtonProps, 'onAdd' | 'onSub'> & {
    product: Product
    categoryId?: string
    count: number
    stock: number
  }

const ProductCard = ({
  count,
  product: { id, categoryId: productCategoryId, description, name, price, image },
  categoryId,
  stock,
  onAdd,
  onSub,
  className,
}: ProductCardProps) => {
  const finalCategoryId = categoryId || productCategoryId
  return (
      <div className={twMerge('flex flex-col min-w-[230px]', className)}>
        <Link href={NAVIGATION_ROUTES.product(finalCategoryId, id)}>
        <div className="relative mb-5 max-h-[230px] rounded-[20px] overflow-hidden">
          <Image
            className="object-cover"
            src={image}
            alt={name}
            width={230}
            height={230}
            loading="lazy"
            sizes="(max-width: 768px) 45vw, 230px"
          />

          {price.discount && (
            <SaleTag
              className="absolute top-[10px] right-[10px]"
              discount={price.discount}
            />
          )}
        </div>

        <h2 className="mb-5 text-heading6 font-bold line-clamp-2">{name}</h2>
        {description?.length && (
          <p className="mb-5 text-description font-medium line-clamp-4">
            {description}
          </p>
        )}
        </Link>

        <div className="flex flex-row mt-auto justify-between items-center">
          <Price
            price={price.selling || price.full}
            crossed={price.discount && price.selling ? price.full : undefined}
          />
          <CountButton
            count={count}
            label="В кошик"
            onAdd={onAdd}
            onSub={onSub}
            countMax={stock}
          />
        </div>
      </div>
  )
}

export default ProductCard
