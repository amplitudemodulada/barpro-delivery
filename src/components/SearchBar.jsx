import { useState, useRef } from 'react'

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  function handleChange(e) {
    const v = e.target.value
    setValue(v)
    onSearch(v)
  }

  function handleClear() {
    setValue('')
    onSearch('')
    inputRef.current?.focus()
  }

  return (
    <div className="px-4 py-3">
      <div className="relative max-w-6xl mx-auto">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none">
          🔍
        </span>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Buscar produtos, marcas ou categorias..."
          className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-gray-100 border-0
                     text-sm placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white
                     transition-all duration-150"
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
