import { useState } from 'react'
import { useProducts } from '../context/ProductContext'

export default function AdminPanel({ adminMode, onToggle, onAdd }) {
  const { resetProducts } = useProducts()
  const [confirmReset, setConfirmReset] = useState(false)

  if (!adminMode) return null

  return (
    <div className="bg-brand-50 border border-brand-200 rounded-xl mx-4 mb-4 p-3 max-w-6xl md:mx-auto">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-brand-700">⚙️ Modo Administrador</span>
          <span className="text-[10px] bg-brand-200 text-brand-800 px-1.5 py-0.5 rounded-full font-medium">PRODUTOS</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onAdd} className="px-3 py-1.5 bg-brand-500 text-white text-xs font-semibold rounded-lg hover:bg-brand-600 transition-colors">
            + Novo Produto
          </button>
          {confirmReset ? (
            <div className="flex items-center gap-1">
              <button onClick={() => { resetProducts(); setConfirmReset(false) }} className="px-3 py-1.5 bg-red-500 text-white text-xs font-semibold rounded-lg hover:bg-red-600 transition-colors">
                Confirmar
              </button>
              <button onClick={() => setConfirmReset(false)} className="px-3 py-1.5 bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-300 transition-colors">
                Cancelar
              </button>
            </div>
          ) : (
            <button onClick={() => setConfirmReset(true)} className="px-3 py-1.5 bg-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-300 transition-colors">
              ↺ Resetar
            </button>
          )}
          <button onClick={onToggle} className="px-3 py-1.5 bg-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-300 transition-colors">
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}
