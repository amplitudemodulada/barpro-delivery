import { useState } from 'react'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

function constantTimeEqual(a, b) {
  if (a.length !== b.length) return false
  let result = 0
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return result === 0
}

export default function AdminLoginModal({ open, onSuccess, onClose }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)

  if (!open) return null

  function handleSubmit(e) {
    e.preventDefault()
    if (attempts >= 5) {
      setError('Muitas tentativas. Recarregue a página.')
      return
    }
    if (constantTimeEqual(password, ADMIN_PASSWORD)) {
      setPassword('')
      setError('')
      setAttempts(0)
      onSuccess()
    } else {
      setAttempts(prev => prev + 1)
      setError(`Senha incorreta (${attempts + 1}/5)`)
      setPassword('')
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-slide-up sm:max-w-sm" onClick={e => e.stopPropagation()}>
        <div className="p-6">
          <div className="text-center mb-6">
            <span className="text-4xl block mb-2">🔒</span>
            <h2 className="text-lg font-bold text-gray-900">Acesso Administrador</h2>
            <p className="text-sm text-gray-500 mt-1">Digite a senha para gerenciar produtos</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Senha de administrador"
                className="form-input text-center text-lg tracking-widest"
                autoFocus
                autoComplete="off"
              />
              {error && (
                <p className="text-xs text-red-500 text-center mt-2">{error}</p>
              )}
            </div>

            <button type="submit" className="btn-primary">
              Entrar
            </button>
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
