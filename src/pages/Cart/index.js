import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { formatPrice } from '../../utils/format'
import { removeFromCart, updateAmount } from '../../store/cart/actions'
import { Container, ProductTable, Total } from './styles'

export function Cart () {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount)
  })))
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) =>
        total + product.price * product.amount
      , 0)
    )
  )

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.id} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type='button'
                    onClick={() =>
                      dispatch(updateAmount(product.id, product.amount - 1))
                    }
                  >
                    <MdRemoveCircleOutline color='#7159C1' size={20} />
                  </button>
                  <input type='number' readOnly value={product.amount} />
                  <button
                    type='button'
                    onClick={() =>
                      dispatch(updateAmount(product.id, product.amount + 1))
                    }
                  >
                    <MdAddCircleOutline color='#7159C1' size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type='button'
                  onClick={() =>
                    dispatch(removeFromCart(product.id))
                  }
                >
                  <MdDelete color='#7159C1' size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type='button'>Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  )
}
