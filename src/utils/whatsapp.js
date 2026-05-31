const SEPARATOR = '========================================'
const LINE = '----------------------------------------'

function pad(text, length = 40) {
  return text.padEnd(length)
}

export function formatWhatsAppOrder({ customer, cartItems, total, change }) {
  const lines = []

  // Header
  lines.push(SEPARATOR)
  lines.push('       *NOVO PEDIDO - DEPÓSITO*')
  lines.push(SEPARATOR)

  // Cliente
  lines.push(`CLIENTE: ${customer.nome}`)
  lines.push(`CPF: ${customer.cpf}`)
  lines.push(`TEL: ${customer.telefone}`)
  lines.push(`WHATS: ${customer.whatsapp}`)
  lines.push(LINE)

  // Endereço
  lines.push(`ENTREGA: ${customer.rua}, ${customer.numero}`)
  lines.push(`BAIRRO: ${customer.bairro}`)
  lines.push(`CIDADE: ${customer.cidade}`)
  lines.push(`REF: ${customer.referencia || 'N/A'}`)
  lines.push(SEPARATOR)

  // Itens
  lines.push('ITENS DO PEDIDO:')
  cartItems.forEach(({ product, quantity }) => {
    const itemTotal = (product.price * quantity).toFixed(2)
    lines.push(`${String(quantity).padStart(2)}x ${product.name} - ${product.volume}  R$ ${itemTotal}`)
  })
  lines.push(LINE)

  // Total e pagamento
  const totalStr = `TOTAL DOS PRODUTOS: R$ ${total.toFixed(2)}`
  lines.push(totalStr)
  lines.push(`FORMA DE PAGAMENTO: ${customer.pagamento}`)

  if (customer.pagamento === 'Dinheiro' && change) {
    lines.push(`*Troco para:* R$ ${change}`)
  }

  lines.push(SEPARATOR)

  return lines.join('\n')
}

export function getWhatsAppUrl(phoneNumber, text) {
  const cleanPhone = phoneNumber.replace(/\D/g, '')
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`
}
