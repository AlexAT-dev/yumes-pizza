import type { Metadata } from 'next'
import HomePageClient from '@/components/templates/HomePageClient';
import { getNews } from '@/common/api/resources/news/actions';
import { getGroupedProducts } from '@/common/api/resources/groupedProducts/actions';

export const metadata: Metadata = {
  title: "Головна | Yumes",
  description:
    "Yumes — доставка їжі у Чернівцях. Замовляйте піцу, бургери, суші та інші страви з швидкою доставкою додому або в офіс.",
  alternates: {
    canonical: 'https://yumes-pizza.pp.ua/',
  },
};

const  HomePage = async() => {
  const news = await getNews()
  const groupedProducts = await getGroupedProducts()

  return (
    <HomePageClient
      news={news}
      groupedProducts={groupedProducts}
    />
  )
}

export default HomePage
