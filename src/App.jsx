import { useState, useEffect, useCallback } from 'react'
import { CartProvider } from './context/CartContext'
import { ProductProvider, useProducts } from './context/ProductContext'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryNav from './components/CategoryNav'
import ProductGrid from './components/ProductGrid'
import CartBar from './components/CartBar'
import CartModal from './components/CartModal'
import CheckoutForm from './components/CheckoutForm'
import AdminPanel from './components/AdminPanel'
import AdminLoginModal from './components/AdminLoginModal'
import ProductFormModal from './components/ProductFormModal'

function AppContent() {
  const [activeCategory, setActiveCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [adminMode, setAdminMode] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formOpen, setFormOpen] = useState(false)
  const { deleteProduct } = useProducts()

  useEffect(() => {
    if (sessionStorage.getItem('barpro-admin') === '1') {
      setAdminMode(true)
    }
  }, [])

  const handleAdminToggle = useCallback(() => {
    if (adminMode) {
      sessionStorage.removeItem('barpro-admin')
      setAdminMode(false)
    } else {
      setLoginOpen(true)
    }
  }, [adminMode])

  const handleLoginSuccess = useCallback(() => {
    sessionStorage.setItem('barpro-admin', '1')
    setAdminMode(true)
    setLoginOpen(false)
  }, [])

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem('barpro-admin')
    setAdminMode(false)
  }, [])

  function handleEdit(product) {
    setEditingProduct(product)
    setFormOpen(true)
  }

  function handleDelete(product) {
    if (window.confirm(`Excluir "${product.name}" permanentemente?`)) {
      deleteProduct(product.id)
    }
  }

  function handleCloseForm() {
    setFormOpen(false)
    setEditingProduct(null)
  }

  return (
    <>
      <Header
        actions={
          <button
            onClick={handleAdminToggle}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-150 flex-shrink-0
              ${adminMode ? 'bg-brand-500 text-white shadow-sm' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
            title={adminMode ? 'Sair do modo admin' : 'Administrador'}
          >
            ⚙️
          </button>
        }
      />
      <SearchBar onSearch={setSearchQuery} />
      <CategoryNav active={activeCategory} onChange={setActiveCategory} />
      <AdminPanel
        adminMode={adminMode}
        onToggle={handleLogout}
        onAdd={() => { setEditingProduct(null); setFormOpen(true) }}
      />
      <ProductGrid
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        adminMode={adminMode}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {!adminMode && <CartBar />}
      <CartModal />
      <CheckoutForm />

      <AdminLoginModal
        open={loginOpen}
        onSuccess={handleLoginSuccess}
        onClose={() => setLoginOpen(false)}
      />

      <ProductFormModal
        open={formOpen}
        onClose={handleCloseForm}
        editProduct={editingProduct}
      />
    </>
  )
}

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <AppContent />
        </div>
      </CartProvider>
    </ProductProvider>
  )
}
