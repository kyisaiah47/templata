"use client"

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  readTime: string
  category: string
  featured: boolean
  tags: string[]
  slug: string
  type: string
  difficulty: string
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage: string
  }
  relatedTemplates: string[]
  relatedPosts: string[]
}

export function useArticles(limit = 100) {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('templata_articles')
          .select('*')
          .order('published_at', { ascending: false })
          .limit(limit)

        if (error) throw error

        const formattedArticles = data.map((article: any) => ({
          id: article.id,
          title: article.title,
          excerpt: article.excerpt,
          content: article.content,
          author: article.author,
          publishedAt: article.published_at,
          updatedAt: article.updated_at,
          readTime: article.read_time,
          category: article.category,
          featured: article.featured,
          tags: article.tags,
          slug: article.slug,
          type: article.type,
          difficulty: article.difficulty,
          seo: {
            metaTitle: article.meta_title,
            metaDescription: article.meta_description,
            ogImage: article.og_image
          },
          relatedTemplates: article.related_templates,
          relatedPosts: article.related_posts
        }))

        setArticles(formattedArticles)
        setError(null)
      } catch (err) {
        console.error('[useArticles] Error fetching articles:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [limit])

  return { articles, loading, error }
}
