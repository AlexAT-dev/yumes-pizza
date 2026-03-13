import type { Metadata } from 'next'
import HomePageClient from '@/components/templates/HomePageClient';
import { getNews } from '@/common/api/resources/news/actions';
import { getGroupedProducts } from '@/common/api/resources/groupedProducts/actions';

export const metadata: Metadata = {
  title: "Доставка їжі у Чернівцях — піца, бургери, салати | Yumes",
  description:
    "Yumes — доставка їжі у Чернівцях. Замовляйте піцу, бургери, салати та інші страви з швидкою доставкою додому або в офіс.",

  alternates: {
    canonical: "https://yumes.ua/",
  },

  openGraph: {
    title: "Доставка їжі у Чернівцях | Yumes",
    description:
      "Замовляйте піцу, бургери, салати та інші страви з доставкою у Чернівцях від Yumes.",
    url: "https://yumes.ua/",
    siteName: "Yumes",
    type: "website",
    locale: "uk_UA",
  },

  twitter: {
    card: "summary_large_image",
    title: "Доставка їжі у Чернівцях | Yumes",
    description:
      "Піца, бургери, салати та інші страви з доставкою у Чернівцях.",
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
