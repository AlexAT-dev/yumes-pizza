import type { Metadata } from 'next'
import type { CategoryRouteParams } from '@constants/routes'
import CategoryPageClient from './CategoryPageClient'
import { getGroupedProducts } from '@/common/api/resources/groupedProducts/actions'

type Props = {
  params: CategoryRouteParams
}

const CATEGORY_NAMES: Record<string, string> = {
  pizza: 'Піца',
  sushi: 'Суші',
  burger: 'Бургери',
  drinks: 'Напої',
  fries: 'Картопля фрі',
  sandwiches: 'Сендвічі',
  'chicken-wings': 'Курячі крильця',
  salads: 'Салати',
  'chili-dogs': 'Чилі-доги',
  'hot-dogs': 'Хот-доги',
  wraps: 'Врапси',
  nachos: 'Начос',
  desserts: 'Десерти',
  pasta: 'Паста',
  'rice-bowls': 'Рисові боули',
  smoothies: 'Смузі',
  burritos: 'Буріто',
  donuts: 'Пончики',
  bagels: 'Бейгли',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params
  const rawName = CATEGORY_NAMES[categoryId] || categoryId || 'Категорія'
  const categoryName = rawName === 'Категорія' ? rawName : `${rawName}`
  const title = `${categoryName} у Чернівцях – замовте з доставкою | Yumes`
  const description = `Замовте смачну ${categoryName.toLowerCase()} у Чернівцях з доставкою додому за 30 хвилин. Гарячі пропозиції та знижки на ${categoryName.toLowerCase()} від Yumes.`

  return {
    title,
    description,
    keywords: [categoryName, 'доставка', 'їжа', 'Чернівці', 'Yumes'],
    alternates: {
      canonical: `https://yumes-pizza.pp.ua/category/${categoryId}`,
    },
    openGraph: {
      title,
      description,
      url: `https://yumes-pizza.pp.ua/category/${categoryId}`,
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
