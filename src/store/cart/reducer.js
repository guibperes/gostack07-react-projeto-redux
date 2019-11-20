import { produce } from 'immer'

export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id)

        productIndex >= 0
          ? draft[productIndex].amount += 1
          : draft.push({
            ...action.product,
            amount: 1
          })
      })
    default:
      return state
  }
}
