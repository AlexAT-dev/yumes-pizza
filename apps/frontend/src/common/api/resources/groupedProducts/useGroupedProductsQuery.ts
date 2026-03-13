import type { GroupedProducts } from '@models/products'
import { useEffect, useState } from 'react'
import { groupedProductsApi } from '.'

const useGroupedProductsQuery = () => {
  const [groupedProducts, setGroupedProducts] = useState<GroupedProducts[]>([])

  useEffect(() => {
    const fetchGroupedProducts = async () => {
      const res = await groupedProductsApi.getGroupedProducts()
      setGroupedProducts(res)
    }

    fetchGroupedProducts()
  }, [])

  return { groupedProducts }
}

export default useGroupedProductsQuery
