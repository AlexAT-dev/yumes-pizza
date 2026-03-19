import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProduct } from '@/common/api/resources/products/actions'
import ProductDetails from './ProductDetails'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    return {
      title: 'Продукт не знайдено | Yumes',
    }
  }

  return {
    title: `${product.name} | Yumes`,
    description: product.description || `Замовте ${product.name} з доставкою у Чернівцях`,
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-6">
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
            <p className="text-gray-700">Чудовий продукт! Рекомендую всім.</p>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold">Марія</span>
              <span className="ml-2 text-yellow-500">★★★★☆</span>
            </div>
            <p className="text-gray-700">Дуже смачно, але доставка могла бути швидшою.</p>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold">Іван</span>
              <span className="ml-2 text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-700">Відмінна якість та обслуговування!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage