import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { formatWhatsAppOrder, getWhatsAppUrl } from '../utils/whatsapp'

const PHONE_NUMBER = '5521982277641'

const initialForm = {
  nome: '',
  cpf: '',
  telefone: '',
  whatsapp: '',
  rua: '',
  numero: '',
  bairro: '',
  cidade: '',
  referencia: '',
  pagamento: '',
  troco: '',
}

const paymentOptions = [
  { value: 'Pix', label: 'Pix', icon: '📱' },
  { value: 'Cartão de Crédito', label: 'Cartão de Crédito', icon: '💳' },
  { value: 'Cartão de Débito', label: 'Cartão de Débito', icon: '💳' },
  { value: 'Dinheiro', label: 'Dinheiro', icon: '💵' },
]

function validateCPF(cpf) {
  const c = cpf.replace(/\D/g, '')
  if (c.length !== 11) return false
  if (/^(\d)\1{10}$/.test(c)) return false
  let sum = 0
  for (let i = 0; i < 9; i++) sum += parseInt(c[i]) * (10 - i)
  let r = (sum * 10) % 11
  if (r === 10) r = 0
  if (r !== parseInt(c[9])) return false
  sum = 0
  for (let i = 0; i < 10; i++) sum += parseInt(c[i]) * (11 - i)
  r = (sum * 10) % 11
  if (r === 10) r = 0
  if (r !== parseInt(c[10])) return false
  return true
}

function formatCPF(value) {
  const v = value.replace(/\D/g, '').slice(0, 11)
  if (v.length <= 3) return v
  if (v.length <= 6) return `${v.slice(0, 3)}.${v.slice(3)}`
  if (v.length <= 9) return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6)}`
  return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6, 9)}-${v.slice(9)}`
}

function formatPhone(value) {
  const v = value.replace(/\D/g, '').slice(0, 11)
  if (v.length <= 2) return `(${v}`
  if (v.length <= 7) return `(${v.slice(0, 2)}) ${v.slice(2)}`
  return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`
}

export default function CheckoutForm() {
  const { items, total, closeCheckout, closeCart } = useCart()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  function setField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  function validate() {
    const err = {}
    if (!form.nome.trim()) err.nome = 'Nome é obrigatório'
    if (!form.cpf.trim()) err.cpf = 'CPF é obrigatório'
    else if (!validateCPF(form.cpf)) err.cpf = 'CPF inválido'
    if (!form.telefone.trim()) err.telefone = 'Telefone é obrigatório'
    else if (form.telefone.replace(/\D/g, '').length < 10) err.telefone = 'Telefone incompleto'
    if (!form.whatsapp.trim()) err.whatsapp = 'WhatsApp é obrigatório'
    else if (form.whatsapp.replace(/\D/g, '').length < 10) err.whatsapp = 'WhatsApp incompleto'
    if (!form.rua.trim()) err.rua = 'Rua é obrigatória'
    if (!form.numero.trim()) err.numero = 'Número é obrigatório'
    if (!form.bairro.trim()) err.bairro = 'Bairro é obrigatório'
    if (!form.cidade.trim()) err.cidade = 'Cidade é obrigatória'
    if (!form.pagamento) err.pagamento = 'Selecione uma forma de pagamento'
    if (form.pagamento === 'Dinheiro') {
      const trocoNum = parseFloat(form.troco)
      if (!form.troco.trim()) err.troco = 'Informe o valor para troco'
      else if (isNaN(trocoNum) || trocoNum < total) err.troco = `Valor mínimo: R$ ${total.toFixed(2)}`
    }
    setErrors(err)
    return Object.keys(err).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)

    const message = formatWhatsAppOrder({
      customer: {
        nome: form.nome,
        cpf: form.cpf,
        telefone: formatPhone(form.telefone),
        whatsapp: formatPhone(form.whatsapp),
        rua: form.rua,
        numero: form.numero,
        bairro: form.bairro,
        cidade: form.cidade,
        referencia: form.referencia,
        pagamento: form.pagamento,
      },
      cartItems: items,
      total,
      change: form.pagamento === 'Dinheiro' ? form.troco : null,
    })

    const url = getWhatsAppUrl(PHONE_NUMBER, message)
    window.open(url, '_blank')
    setForm(initialForm)
    setErrors({})
    setSubmitting(false)
    closeCart()
  }

  return (
    <div className="modal-overlay" onClick={closeCheckout}>
      <div
        className="modal-content animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl z-10">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Finalizar Pedido</h2>
            <p className="text-sm text-gray-500">{items.length} item(ns) · R$ {total.toFixed(2)}</p>
          </div>
          <button
            onClick={closeCheckout}
            className="w-8 h-8 flex items-center justify-center rounded-full
                       bg-gray-100 text-gray-500 hover:bg-gray-200"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-5">
          {/* Dados Pessoais */}
          <section>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Dados Pessoais</h3>
            <div className="space-y-3">
              <div>
                <label className="form-label">Nome Completo *</label>
                <input
                  type="text"
                  className={`form-input ${errors.nome ? 'error' : ''}`}
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={e => setField('nome', e.target.value)}
                />
                {errors.nome && <p className="text-xs text-red-500 mt-1">{errors.nome}</p>}
              </div>
              <div>
                <label className="form-label">CPF *</label>
                <input
                  type="text"
                  className={`form-input ${errors.cpf ? 'error' : ''}`}
                  placeholder="000.000.000-00"
                  value={form.cpf}
                  onChange={e => setField('cpf', formatCPF(e.target.value))}
                  maxLength={14}
                />
                {errors.cpf && <p className="text-xs text-red-500 mt-1">{errors.cpf}</p>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="form-label">Telefone *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.telefone ? 'error' : ''}`}
                    placeholder="(11) 99999-9999"
                    value={form.telefone}
                    onChange={e => setField('telefone', formatPhone(e.target.value))}
                    maxLength={16}
                  />
                  {errors.telefone && <p className="text-xs text-red-500 mt-1">{errors.telefone}</p>}
                </div>
                <div>
                  <label className="form-label">WhatsApp *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.whatsapp ? 'error' : ''}`}
                    placeholder="(11) 99999-9999"
                    value={form.whatsapp}
                    onChange={e => setField('whatsapp', formatPhone(e.target.value))}
                    maxLength={16}
                  />
                  {errors.whatsapp && <p className="text-xs text-red-500 mt-1">{errors.whatsapp}</p>}
                </div>
              </div>
            </div>
          </section>

          {/* Endereço */}
          <section>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Endereço de Entrega</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="form-label">Rua *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.rua ? 'error' : ''}`}
                    placeholder="Nome da rua"
                    value={form.rua}
                    onChange={e => setField('rua', e.target.value)}
                  />
                  {errors.rua && <p className="text-xs text-red-500 mt-1">{errors.rua}</p>}
                </div>
                <div>
                  <label className="form-label">Número *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.numero ? 'error' : ''}`}
                    placeholder="Nº"
                    value={form.numero}
                    onChange={e => setField('numero', e.target.value)}
                  />
                  {errors.numero && <p className="text-xs text-red-500 mt-1">{errors.numero}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="form-label">Bairro *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.bairro ? 'error' : ''}`}
                    placeholder="Seu bairro"
                    value={form.bairro}
                    onChange={e => setField('bairro', e.target.value)}
                  />
                  {errors.bairro && <p className="text-xs text-red-500 mt-1">{errors.bairro}</p>}
                </div>
                <div>
                  <label className="form-label">Cidade *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.cidade ? 'error' : ''}`}
                    placeholder="Sua cidade"
                    value={form.cidade}
                    onChange={e => setField('cidade', e.target.value)}
                  />
                  {errors.cidade && <p className="text-xs text-red-500 mt-1">{errors.cidade}</p>}
                </div>
              </div>
              <div>
                <label className="form-label">Ponto de Referência</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ex: próximo ao mercado, esquina da padaria..."
                  value={form.referencia}
                  onChange={e => setField('referencia', e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Pagamento */}
          <section>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Forma de Pagamento</h3>
            <div className="grid grid-cols-2 gap-2">
              {paymentOptions.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setField('pagamento', opt.value)}
                  className={`p-3 rounded-xl border-2 text-left transition-all duration-150
                    ${form.pagamento === opt.value
                      ? 'border-brand-500 bg-brand-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                >
                  <span className="text-lg">{opt.icon}</span>
                  <p className="text-xs font-semibold text-gray-800 mt-1">{opt.label}</p>
                </button>
              ))}
            </div>
            {errors.pagamento && <p className="text-xs text-red-500 mt-1">{errors.pagamento}</p>}

            {form.pagamento === 'Dinheiro' && (
              <div className="mt-3">
                <label className="form-label">Troco para quanto? *</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">R$</span>
                  <input
                    type="number"
                    step="0.01"
                    min={total}
                    className={`form-input pl-9 ${errors.troco ? 'error' : ''}`}
                    placeholder="0,00"
                    value={form.troco}
                    onChange={e => setField('troco', e.target.value)}
                  />
                </div>
                {errors.troco && <p className="text-xs text-red-500 mt-1">{errors.troco}</p>}
              </div>
            )}
          </section>

          {/* Resumo do pedido */}
          <section>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Resumo do Pedido</h3>
            <div className="bg-gray-50 rounded-xl p-3 space-y-2">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between text-sm">
                  <span className="text-gray-600 truncate mr-2">
                    <span className="font-medium">{quantity}x</span> {product.name}
                  </span>
                  <span className="font-semibold text-gray-900 flex-shrink-0">
                    R$ {(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-2 flex justify-between">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-brand-600">R$ {total.toFixed(2)}</span>
              </div>
            </div>
          </section>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary flex items-center justify-center gap-2 text-base py-4"
          >
            {submitting ? '⏳ Enviando...' : '💬 Confirmar Pedido via WhatsApp'}
          </button>
          <p className="text-center text-xs text-gray-400 pb-2">
            Ao confirmar, você será direcionado ao WhatsApp para finalizar o pedido
          </p>
        </form>
      </div>
    </div>
  )
}
