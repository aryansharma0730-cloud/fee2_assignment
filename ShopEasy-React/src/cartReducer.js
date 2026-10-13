// All cart state changes go through this reducer.
export const initialCartState = []

export function cartReducer(state, action) {
  switch (action.type) {
    
    case 'ADD_ITEM': {
      const existing = state.find((item) => item.id === action.product.id)
      if (existing) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { ...action.product, quantity: 1 }]
    }

   
    case 'INCREASE_ITEM':
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      )

    
    case 'DECREASE_ITEM':
      return state
        .map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)

    
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.id)

    
    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}
