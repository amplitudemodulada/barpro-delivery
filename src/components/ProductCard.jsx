import { useCart } from '../context/CartContext'

function bgGradient(category) {
  const map = {
    cervejas: 'from-amber-100 to-amber-50',
    destilados: 'from-indigo-100 to-indigo-50',
    refrigerantes: 'from-green-100 to-green-50',
    gelo: 'from-cyan-100 to-cyan-50',
    conveniencia: 'from-rose-100 to-rose-50',
  }
  return map[category] || 'from-gray-100 to-gray-50'
}

export default function ProductCard({ product, adminMode, onEdit, onDelete }) {
  const { addItem, updateQuantity, items } = useCart()
  const cartItem = items.find(i => i.product.id === product.id)
  const qty = cartItem?.quantity || 0

  return (
    <div className="product-card group relative">
      {adminMode && (
        <div className="absolute top-1 right-1 z-10 flex gap-1">
          <button
            onClick={() => onEdit?.(product)}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-white/90 shadow text-xs hover:bg-white transition-colors"
            title="Editar"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete?.(product)}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-white/90 shadow text-xs hover:bg-white transition-colors"
            title="Excluir"
          >
            🗑️
          </button>
        </div>
      )}

      <div className={`relative h-28 bg-gradient-to-br ${bgGradient(product.category)} flex items-center justify-center`}>
        <span className="text-4xl select-none">{product.emoji}</span>
        {product.popular && (
          <span className="absolute top-2 right-2 bg-brand-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            Popular
          </span>
        )}
        {product.zeroAlcohol && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            0.0%
          </span>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-sm text-gray-900 leading-tight truncate">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">{product.volume}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-sm text-brand-600">
            R$ {product.price.toFixed(2)}
          </span>

          {!adminMode && (
            <div className="flex items-center gap-1">
              {qty > 0 ? (
                <>
                  <button
                    onClick={() => updateQuantity(product.id, qty - 1)}
                    className="qty-btn bg-red-50 text-red-500 hover:bg-red-100 active:bg-red-200"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-bold tabular-nums">{qty}</span>
                  <button
                    onClick={() => addItem(product, 1)}
                    className="qty-btn bg-brand-50 text-brand-600 hover:bg-brand-100 active:bg-brand-200"
                  >
                    +
                  </button>
                </>
              ) : (
                <button
                  onClick={() => addItem(product, 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full
                             bg-brand-500 text-white text-lg font-bold
                             hover:bg-brand-600 active:bg-brand-700
                             transition-colors duration-150 shadow-sm"
                >
                  +
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
