"use client"

import type { News } from '@models/news'
import { useEffect, useState } from 'react'
import { newsApi } from '.'

const useNewsQuery = () => {
  const [news, setNews] = useState<News[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      const res = await newsApi.getNews()
      setNews(res)
    }

    fetchNews()
  }, [])

  return { news }
}

export default useNewsQuery
