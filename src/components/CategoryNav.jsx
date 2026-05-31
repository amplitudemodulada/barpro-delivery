import { useRef, useEffect } from 'react'
import { useProducts } from '../context/ProductContext'

export default function CategoryNav({ active, onChange }) {
  const { categories } = useProducts()
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const activeBtn = el.querySelector('.category-pill.active')
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [active])

  return (
    <div className="px-4 pb-2">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide max-w-6xl mx-auto -mx-4 px-4"
      >
        <button
          onClick={() => onChange('')}
          className={`category-pill ${!active ? 'active' : ''}`}
        >
          📋 Todos
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`category-pill ${active === cat.id ? 'active' : ''}`}
          >
            {cat.icon} {cat.name.split(' ')[0]}
          </button>
        ))}
      </div>
    </div>
  )
}
