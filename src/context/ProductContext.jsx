import { createContext, useContext, useReducer, useCallback, useMemo, useEffect } from 'react'
import { products as initialProducts, categories, categoryMap as initialCategoryMap } from '../data/products'

const STORAGE_KEY = 'barpro-products'
const ProductContext = createContext(null)

function loadProducts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length > 0) return parsed
    }
  } catch {}
  return initialProducts
}

let nextId = 151

function getNextId(products) {
  const max = products.reduce((m, p) => Math.max(m, p.id), 0)
  return max + 1
}

function productReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const newProduct = { ...action.product, id: getNextId(state) }
      return [...state, newProduct]
    }
    case 'EDIT_PRODUCT':
      return state.map(p =>
        p.id === action.product.id ? { ...p, ...action.product } : p
      )
    case 'DELETE_PRODUCT':
      return state.filter(p => p.id !== action.productId)
    case 'RESET':
      return initialProducts
    default:
      return state
  }
}

export function ProductProvider({ children }) {
  const [products, dispatch] = useReducer(productReducer, null, loadProducts)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    } catch {}
  }, [products])

  const addProduct = useCallback((product) => {
    dispatch({ type: 'ADD_PRODUCT', product })
  }, [])

  const editProduct = useCallback((product) => {
    dispatch({ type: 'EDIT_PRODUCT', product })
  }, [])

  const deleteProduct = useCallback((productId) => {
    dispatch({ type: 'DELETE_PRODUCT', productId })
  }, [])

  const resetProducts = useCallback(() => {
    dispatch({ type: 'RESET' })
  }, [])

  const categoryMap = useMemo(
    () => Object.fromEntries(categories.map(c => [c.id, c])),
    []
  )

  const value = useMemo(() => ({
    products,
    categories,
    categoryMap,
    addProduct,
    editProduct,
    deleteProduct,
    resetProducts,
  }), [products, addProduct, editProduct, deleteProduct, resetProducts])

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export function useProducts() {
  const ctx = useContext(ProductContext)
  if (!ctx) throw new Error('useProducts must be used within ProductProvider')
  return ctx
}
