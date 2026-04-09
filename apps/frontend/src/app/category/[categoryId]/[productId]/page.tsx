import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProduct, getProductsByCategory } from '@/common/api/resources/products/actions'
import { NAVIGATION_ROUTES } from '@/common/constants/routes'
import ProductDetails from './ProductDetails'
import RelatedProductsClient from './RelatedProductsClient'

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

interface ProductPageProps {
  params: {
    categoryId: string
    productId: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { categoryId, productId } = await params
  const product = await getProduct(productId)
  const categoryName = CATEGORY_NAMES[categoryId] || categoryId || 'Категорія'

  if (!product) {
    return {
      title: 'Продукт не знайдено | Yumes',
    }
  }

  return {
    title: `${product.name} | Yumes`,
    description: product.description || `Замовте ${product.name} з доставкою у Чернівцях`,
    keywords: [product.name, categoryName, 'доставка', 'їжа', 'Yumes'],
    alternates: {
      canonical: `https://yumes-pizza.pp.ua/category/${categoryId}/${productId}`,
    },
    openGraph: {
      title: `${product.name} | Yumes`,
      description: product.description || `Замовте ${product.name} з доставкою у Чернівцях`,
      url: `https://yumes-pizza.pp.ua/category/${categoryId}/${productId}`,
      type: 'product',
      images: [product.image],
    },
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params
  const product = await getProduct(productId)

  if (!product) {
    notFound()
  }

  const products = await getProductsByCategory(product.categoryId)

  const relatedProducts = products
    .filter(item => item.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)

  const categoryName = CATEGORY_NAMES[params.categoryId] || params.categoryId || 'Категорія'

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description || `Замовте ${product.name} з доставкою у Чернівцях`,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Yumes',
    },
    offers: {
      '@type': 'Offer',
      url: `https://yumes-pizza.pp.ua/category/${params.categoryId}/${params.productId}`,
      priceCurrency: 'UAH',
      price: product.price.selling || product.price.full,
      availability:
        product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Головна',
        item: 'https://yumes-pizza.pp.ua/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryName,
        item: `https://yumes-pizza.pp.ua${NAVIGATION_ROUTES.category(params.categoryId)}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://yumes-pizza.pp.ua/category/${params.categoryId}/${params.productId}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 py-6">
        <nav className="mb-6 text-sm text-gray-600">
          <Link href={NAVIGATION_ROUTES.home} className="hover:text-dark_red">
            Головна
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={NAVIGATION_ROUTES.category(params.categoryId)}
            className="hover:text-dark_red"
          >
            {categoryName}
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-dark_gray">{product.name}</span>
        </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
        {/* Product Image */}
        <div className="relative flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-[300px] h-[300px] rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <ProductDetails product={product} />
      </div>

      {relatedProducts.length > 0 && (
        <RelatedProductsClient
          products={relatedProducts}
          categoryId={product.categoryId}
        />
      )}

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Відгуки</h2>
        <div className="space-y-4">
          {/* Placeholder reviews */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold">Олександр</span>
              <span className="ml-2 text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-700">Швидка доставка та смачна піца!</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductPage
