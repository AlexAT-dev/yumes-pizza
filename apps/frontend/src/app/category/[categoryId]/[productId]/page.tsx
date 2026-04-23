import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getProduct, getProductsByCategory } from '@/common/api/resources/products/actions'
import { getGroupedProducts } from '@/common/api/resources/groupedProducts/actions'
import { NAVIGATION_ROUTES } from '@/common/constants/routes'
import CategoryBreadcrumb from '@components/organisms/CategoryBreadcrumb'
import ProductDetails from './ProductDetails'
import RelatedProductsClient from './RelatedProductsClient'

interface ProductPageProps {
  params: {
    categoryId: string
    productId: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { categoryId, productId } = await params
  const groupedProducts = await getGroupedProducts()
  const category = groupedProducts.find(item => item.id === categoryId)
  const categoryName = category?.name || categoryId || 'Категорія'
  const product = await getProduct(productId)

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
      type: 'website',
      images: [product.image],
    },
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { categoryId, productId } = await params
  const groupedProducts = await getGroupedProducts()
  const category = groupedProducts.find(item => item.id === categoryId)
  const categoryName = category?.name || categoryId || 'Категорія'
  const product = await getProduct(productId)

  if (!product) {
    notFound()
  }

  const products = await getProductsByCategory(product.categoryId)

  const relatedProducts = products
    .filter(item => item.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)

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
      url: `https://yumes-pizza.pp.ua/category/${categoryId}/${productId}`,
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
        item: `https://yumes-pizza.pp.ua${NAVIGATION_ROUTES.category(categoryId)}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://yumes-pizza.pp.ua/category/${categoryId}/${productId}`,
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

      <CategoryBreadcrumb
        categoryId={categoryId}
        categoryName={categoryName}
        productName={product.name}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
        {/* Product Image */}
        <div className="relative flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            priority
            sizes="(max-width: 768px) 280px, 300px"
            className="w-[300px] h-[300px] rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <ProductDetails product={product} />
      </div>

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

      {relatedProducts.length > 0 && (
        <RelatedProductsClient
          products={relatedProducts}
          categoryId={product.categoryId}
        />
      )}
    </>
  )
}

export default ProductPage
