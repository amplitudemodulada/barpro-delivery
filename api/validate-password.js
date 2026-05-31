export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ valid: false, message: 'Método não permitido' })
  }

  const { password } = req.body || {}
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    return res.status(500).json({ valid: false, message: 'Erro de configuração do servidor' })
  }

  if (password && password.length === adminPassword.length) {
    let match = true
    for (let i = 0; i < password.length; i++) {
      if (password[i] !== adminPassword[i]) match = false
    }
    if (match) {
      return res.status(200).json({ valid: true })
    }
  }

  return res.status(401).json({ valid: false, message: 'Senha incorreta' })
}
