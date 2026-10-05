import { useEffect } from 'react'
export default function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} | NEXAWEB Perfume`
    const set = (sel: string, attr: string, val: string) => document.querySelector(sel)?.setAttribute(attr, val)
    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', `${title} | NEXAWEB Perfume`)
    set('meta[property="og:description"]', 'content', description)
    window.scrollTo({ top: 0 })
  }, [title, description])
  return null
}
