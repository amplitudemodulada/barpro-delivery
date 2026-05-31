export default function ClosedOverlay({ isOpen, adminMode }) {
  if (isOpen || adminMode) return null

  return (
    <div className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm px-6">
      <span className="text-7xl mb-4">🔒</span>
      <h2 className="text-2xl font-bold text-gray-900 text-center">Estamos Fechados!</h2>
      <p className="text-gray-500 text-center mt-2 max-w-xs">
      </p>
      <div className="mt-6 bg-gray-100 rounded-xl px-6 py-4 text-center">
        <p className="text-sm text-gray-600 font-medium">Horário de Funcionamento</p>
        <p className="text-xs text-gray-400 mt-1">Seg a Sáb: 08h às 22h</p>
        <p className="text-xs text-gray-400">Dom: 09h às 20h</p>
      </div>
      <p className="text-xs text-gray-400 mt-6">Volte mais tarde ou peça pelo WhatsApp</p>
    </div>
  )
}
