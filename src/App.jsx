import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryNav from './components/CategoryNav'
import ProductGrid from './components/ProductGrid'
import CartBar from './components/CartBar'
import CartModal from './components/CartModal'
import CheckoutForm from './components/CheckoutForm'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <SearchBar onSearch={setSearchQuery} />
        <CategoryNav active={activeCategory} onChange={setActiveCategory} />
        <ProductGrid
          activeCategory={activeCategory}
          searchQuery={searchQuery}
        />
        <CartBar />
        <CartModal />
        <CheckoutForm />
      </div>
    </CartProvider>
  )
}
