import { useProducts } from '../context/ProductContext'

export default function Header({ actions }) {
  const { categories } = useProducts()

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
          🍺
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-bold text-gray-900 leading-tight">BarPro Delivery</h1>
          <p className="text-xs text-gray-500 truncate">
            {categories.map(c => c.icon).join(' ')} Seu Depósito de Bebidas
          </p>
        </div>
        {actions}
      </div>
    </header>
  )
}
