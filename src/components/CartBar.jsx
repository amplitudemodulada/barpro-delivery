import { useCart } from '../context/CartContext'

export default function CartBar() {
  const { items, itemCount, total, openCart } = useCart()

  if (itemCount === 0) return null

  return (
    <div className="cart-bar animate-slide-up">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="text-xl">🛒</span>
            <span className="absolute -top-1 -right-2 bg-brand-500 text-white text-[10px] font-bold
                         w-4 h-4 flex items-center justify-center rounded-full shadow">
              {itemCount}
            </span>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">{itemCount} item(ns) na sacola</p>
            <p className="text-base font-bold text-gray-900">R$ {total.toFixed(2)}</p>
          </div>
        </div>
        <button
          onClick={openCart}
          className="bg-brand-500 text-white font-semibold text-sm px-6 py-2.5 rounded-xl
                     hover:bg-brand-600 active:bg-brand-700
                     transition-colors duration-150 shadow-sm"
        >
          Ver Sacola
        </button>
      </div>
    </div>
  )
}
