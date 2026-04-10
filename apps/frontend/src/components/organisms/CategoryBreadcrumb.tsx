import Link from 'next/link'
import { NAVIGATION_ROUTES } from '@constants/routes'

type CategoryBreadcrumbProps = {
  categoryId: string
  categoryName: string
  productName?: string
  isCurrentCategory?: boolean
}

const CategoryBreadcrumb = ({
  categoryId,
  categoryName,
  productName,
  isCurrentCategory = false,
}: CategoryBreadcrumbProps) => (
  <div className="container mx-auto px-4 py-6">
    <nav className="mb-6 text-sm text-gray-600">
      <Link href={NAVIGATION_ROUTES.home} className="hover:text-dark_red">
        Головна
      </Link>
      <span className="mx-2">/</span>
      {isCurrentCategory ? (
        <span className="font-semibold text-dark_gray">{categoryName}</span>
      ) : (
        <Link href={NAVIGATION_ROUTES.category(categoryId)} className="hover:text-dark_red">
          {categoryName}
        </Link>
      )}
      {productName && (
        <>
          <span className="mx-2">/</span>
          <span className="font-semibold text-dark_gray">{productName}</span>
        </>
      )}
    </nav>
  </div>
)

export default CategoryBreadcrumb
