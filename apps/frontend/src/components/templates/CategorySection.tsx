'use client'

import { useCategoryQuery } from '@api'
import { CategoryPills } from '@components/organisms'
import type { Category } from '@models/products'
import { NAVIGATION_ROUTES } from '@constants/routes'
import { useRouter, useParams } from 'next/navigation'

const CategorySection = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { categoryId } = useParams() as { categoryId?: string }

  const categoryQuery = useCategoryQuery()

  const onPressCategory = ({ id }: Category) => {
    router.push(NAVIGATION_ROUTES.category(id))
  }

  return (
    <>
      <div className="sticky top-[104px] px-[114px] pb-[30px] max-lg:px-5 from-white from-70% to-transparent bg-gradient-to-b z-50">
        <CategoryPills
          categories={categoryQuery.categories}
          selectedCategoryId={categoryId ?? null}
          onSelect={onPressCategory}
        />
      </div>

      {children}
    </>
  )
}

export default CategorySection
