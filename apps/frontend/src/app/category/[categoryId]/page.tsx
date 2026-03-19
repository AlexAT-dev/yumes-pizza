import type { Metadata } from 'next'
import type { CategoryRouteParams } from '@constants/routes'
import CategoryPageClient from './CategoryPageClient'
import { getGroupedProducts } from '@/common/api/resources/groupedProducts/actions'

type Props = {
  params: CategoryRouteParams
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params
  // TODO: Fetch category name from API
  const categoryName = categoryId ? `Категорія ${categoryId}` : 'Категорія'

  return {
    title: `${categoryName} - Yumes`,
    description: `Перегляньте продукти з категорії ${categoryName}. Замовте з доставкою від Yumes.`,
    keywords: [categoryName, 'доставка', 'їжа', 'Yumes'],
    openGraph: {
      title: `${categoryName} - Yumes`,
      description: `Перегляньте продукти з категорії ${categoryName}. Замовте з доставкою від Yumes.`,
      type: 'website',
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params
  
  const groupedProducts = await getGroupedProducts()

  return (
    <CategoryPageClient
      groupedProducts={groupedProducts}
      categoryId={categoryId}
    />
  )
}
