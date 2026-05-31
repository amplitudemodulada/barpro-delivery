import { useMemo } from 'react'
import { products as allProducts, categoryMap } from '../data/products'
import ProductCard from './ProductCard'

export default function ProductGrid({ activeCategory, searchQuery }) {
  const filtered = useMemo(() => {
    let result = allProducts

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory)
    }

    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.volume.toLowerCase().includes(q)
      )
    }

    return result
  }, [activeCategory, searchQuery])

  const grouped = useMemo(() => {
    const groups = {}
    filtered.forEach(p => {
      const key = p.subcategory || 'Outros'
      if (!groups[key]) groups[key] = []
      groups[key].push(p)
    })
    return groups
  }, [filtered])

  if (filtered.length === 0) {
    return (
      <div className="px-4 py-16 text-center">
        <span className="text-4xl block mb-3">🔍</span>
        <p className="text-gray-500 font-medium">Nenhum produto encontrado</p>
        <p className="text-gray-400 text-sm mt-1">Tente ajustar sua busca ou filtro</p>
      </div>
    )
  }

  return (
    <div className="px-4 pb-36 max-w-6xl mx-auto">
      {Object.entries(grouped).map(([subcat, items]) => (
        <div key={subcat} className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-4 w-1 rounded-full bg-brand-400" />
            <h2 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
              {subcat}
            </h2>
            <span className="text-xs text-gray-400 font-medium">({items.length})</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {items.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
