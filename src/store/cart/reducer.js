import { produce } from 'immer'

export default function (state = [], action) {
  switch (action.type) {
    case '@CART/ADD':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id)

        productIndex >= 0
          ? draft[productIndex].amount += 1
          : draft.push({
            ...action.product,
            amount: 1
          })
      })
    case '@CART/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id)

        if (productIndex >= 0) {
          draft.splice(productIndex, 1)
        }
      })
    default:
      return state
  }
}
