import { useState, useEffect } from 'react'
import { useProducts } from '../context/ProductContext'

const emptyForm = {
  name: '',
  volume: '',
  price: '',
  category: 'cervejas',
  subcategory: '',
  emoji: '📦',
}

export default function ProductFormModal({ open, onClose, editProduct }) {
  const { addProduct, editProduct: editProductFn, categories } = useProducts()
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const isEditing = !!editProduct

  useEffect(() => {
    if (editProduct) {
      setForm({
        name: editProduct.name,
        volume: editProduct.volume,
        price: String(editProduct.price),
        category: editProduct.category,
        subcategory: editProduct.subcategory,
        emoji: editProduct.emoji || '📦',
      })
    } else {
      setForm(emptyForm)
    }
    setError('')
  }, [editProduct, open])

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (error) setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim()) { setError('Nome é obrigatório'); return }
    if (!form.volume.trim()) { setError('Volume é obrigatório'); return }
    const price = parseFloat(form.price)
    if (isNaN(price) || price <= 0) { setError('Preço inválido'); return }
    if (!form.subcategory.trim()) { setError('Subcategoria é obrigatória'); return }

    const productData = {
      name: form.name.trim(),
      volume: form.volume.trim(),
      price,
      category: form.category,
      subcategory: form.subcategory.trim(),
      emoji: form.emoji,
      alcohol: false,
      popular: false,
    }

    if (isEditing) {
      editProductFn({ ...productData, id: editProduct.id })
    } else {
      addProduct(productData)
    }

    setForm(emptyForm)
    onClose()
  }

  if (!open) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-slide-up" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">
            {isEditing ? 'Editar Produto' : 'Novo Produto'}
          </h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-3 py-2">{error}</div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="form-label">Nome do Produto *</label>
              <input type="text" className="form-input" placeholder="Ex: Brahma Lata" value={form.name} onChange={e => handleChange('name', e.target.value)} />
            </div>
            <div>
              <label className="form-label">Volume *</label>
              <input type="text" className="form-input" placeholder="Ex: Lata 350ml" value={form.volume} onChange={e => handleChange('volume', e.target.value)} />
            </div>
            <div>
              <label className="form-label">Preço (R$) *</label>
              <input type="number" step="0.01" min="0.01" className="form-input" placeholder="0,00" value={form.price} onChange={e => handleChange('price', e.target.value)} />
            </div>
            <div>
              <label className="form-label">Categoria *</label>
              <select className="form-input" value={form.category} onChange={e => handleChange('category', e.target.value)}>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label">Subcategoria *</label>
              <input type="text" className="form-input" placeholder="Ex: Nacionais, Premium..." value={form.subcategory} onChange={e => handleChange('subcategory', e.target.value)} />
            </div>
            <div>
              <label className="form-label">Emoji</label>
              <input type="text" className="form-input" placeholder="🍺" maxLength={2} value={form.emoji} onChange={e => handleChange('emoji', e.target.value)} />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="submit" className="btn-primary">
              {isEditing ? 'Salvar Alterações' : 'Adicionar Produto'}
            </button>
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
