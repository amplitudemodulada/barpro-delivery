import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import { ProductProvider, useProducts } from './context/ProductContext'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryNav from './components/CategoryNav'
import ProductGrid from './components/ProductGrid'
import CartBar from './components/CartBar'
import CartModal from './components/CartModal'
import CheckoutForm from './components/CheckoutForm'
import AdminPanel, { AdminToggle } from './components/AdminPanel'
import ProductFormModal from './components/ProductFormModal'

function AppContent() {
  const [activeCategory, setActiveCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [adminMode, setAdminMode] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formOpen, setFormOpen] = useState(false)
  const { deleteProduct } = useProducts()

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
          <AdminToggle
            adminMode={adminMode}
            onToggle={() => setAdminMode(prev => !prev)}
          />
        }
      />
      <SearchBar onSearch={setSearchQuery} />
      <CategoryNav active={activeCategory} onChange={setActiveCategory} />
      <AdminPanel
        adminMode={adminMode}
        onToggle={() => setAdminMode(false)}
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
