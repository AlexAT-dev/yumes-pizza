import type { Category } from '@models/products'
import { useEffect, useState } from 'react'
import categoriesApi from './actions'

const useCategoryQuery = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await categoriesApi.getCategories()
      setCategories(res)
    }

    fetchCategories()
  }, [])

  return { categories }
}

export default useCategoryQuery
