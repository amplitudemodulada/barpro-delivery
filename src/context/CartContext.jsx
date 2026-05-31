import { createContext, useContext, useReducer, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

const initialState = {
  items: [],
  isCartOpen: false,
  isCheckoutOpen: false,
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exist = state.items.find(i => i.product.id === action.product.id)
      if (exist) {
        return {
          ...state,
          items: state.items.map(i =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + (action.quantity || 1) }
              : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: action.quantity || 1 }],
      }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(i => i.product.id !== action.productId),
      }

    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(i => i.product.id !== action.productId),
        }
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.product.id === action.productId
            ? { ...i, quantity: action.quantity }
            : i
        ),
      }
    }

    case 'CLEAR_CART':
      return { ...state, items: [], isCartOpen: false, isCheckoutOpen: false }

    case 'TOGGLE_CART':
      return { ...state, isCartOpen: !state.isCartOpen }

    case 'OPEN_CART':
      return { ...state, isCartOpen: true }

    case 'CLOSE_CART':
      return { ...state, isCartOpen: false, isCheckoutOpen: false }

    case 'OPEN_CHECKOUT':
      return { ...state, isCheckoutOpen: true, isCartOpen: false }

    case 'CLOSE_CHECKOUT':
      return { ...state, isCheckoutOpen: false }

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = useCallback((product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', product, quantity })
  }, [])

  const removeItem = useCallback((productId) => {
    dispatch({ type: 'REMOVE_ITEM', productId })
  }, [])

  const updateQuantity = useCallback((productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE_CART' }), [])
  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), [])
  const openCheckout = useCallback(() => dispatch({ type: 'OPEN_CHECKOUT' }), [])
  const closeCheckout = useCallback(() => dispatch({ type: 'CLOSE_CHECKOUT' }), [])

  const itemCount = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  )

  const total = useMemo(
    () => state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [state.items]
  )

  const value = useMemo(() => ({
    items: state.items,
    isCartOpen: state.isCartOpen,
    isCheckoutOpen: state.isCheckoutOpen,
    itemCount,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    openCheckout,
    closeCheckout,
  }), [state.items, state.isCartOpen, state.isCheckoutOpen, itemCount, total, addItem, removeItem, updateQuantity, clearCart, toggleCart, openCart, closeCart, openCheckout, closeCheckout])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
