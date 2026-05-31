import { useState } from 'react'

export default function AdminLoginModal({ open, onSuccess, onClose }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [loading, setLoading] = useState(false)

  if (!open) return null

  async function handleSubmit(e) {
    e.preventDefault()
    if (attempts >= 5) {
      setError('Muitas tentativas. Recarregue a página.')
      return
    }
    if (!password.trim()) {
      setError('Digite a senha')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/validate-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await res.json()

      if (data.valid) {
        setPassword('')
        setError('')
        setAttempts(0)
        onSuccess()
      } else {
        setAttempts(prev => prev + 1)
        setError(`Senha incorreta (${attempts + 1}/5)`)
        setPassword('')
      }
    } catch {
      setError('Erro de conexão com o servidor')
    } finally {
      setLoading(false)
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
                disabled={loading}
              />
              {error && (
                <p className="text-xs text-red-500 text-center mt-2">{error}</p>
              )}
            </div>

            <button type="submit" disabled={loading} className="btn-primary flex items-center justify-center gap-2">
              {loading ? '⏳ Verificando...' : 'Entrar'}
            </button>
            <button type="button" onClick={onClose} disabled={loading} className="btn-secondary">
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
