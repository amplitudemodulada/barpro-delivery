import { useCart } from '../context/CartContext'

export default function CartModal() {
  const {
    items, isCartOpen, total, itemCount,
    closeCart, updateQuantity, removeItem, openCheckout,
  } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="modal-overlay" onClick={closeCart}>
      <div
        className="modal-content animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl z-10">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Sua Sacola</h2>
            <p className="text-sm text-gray-500">{itemCount} item(ns)</p>
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 flex items-center justify-center rounded-full
                       bg-gray-100 text-gray-500 hover:bg-gray-200
                       transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="px-4 py-3 space-y-3 max-h-[50vh] overflow-y-auto">
          {items.length === 0 ? (
            <div className="py-8 text-center">
              <span className="text-3xl block mb-2">🛒</span>
              <p className="text-gray-500 text-sm">Sua sacola está vazia</p>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br
                  ${product.category === 'cervejas' ? 'from-amber-100 to-amber-50' : ''}
                  ${product.category === 'destilados' ? 'from-indigo-100 to-indigo-50' : ''}
                  ${product.category === 'refrigerantes' ? 'from-green-100 to-green-50' : ''}
                  ${product.category === 'gelo' ? 'from-cyan-100 to-cyan-50' : ''}
                  ${product.category === 'conveniencia' ? 'from-rose-100 to-rose-50' : ''}
                  flex items-center justify-center text-lg`}
                >
                  {product.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.volume}</p>
                  <p className="text-sm font-bold text-brand-600 mt-0.5">
                    R$ {(product.price * quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="qty-btn bg-red-50 text-red-500 hover:bg-red-100 text-sm"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-bold tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="qty-btn bg-brand-50 text-brand-600 hover:bg-brand-100 text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-4 space-y-3 bg-white rounded-b-2xl">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-lg font-bold text-gray-900">R$ {total.toFixed(2)}</span>
            </div>
            <button
              onClick={openCheckout}
              className="btn-primary flex items-center justify-center gap-2"
            >
              💬 Solicitar Pedido
            </button>
            <button
              onClick={closeCart}
              className="btn-secondary text-sm"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
