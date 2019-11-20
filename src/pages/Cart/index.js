import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { removeFromCart } from '../../store/cart/actions'
import { Container, ProductTable, Total } from './styles'

export function Cart () {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

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
                  <button type='button'>
                    <MdRemoveCircleOutline color='#7159C1' size={20} />
                  </button>
                  <input type='number' readOnly value={product.amount} />
                  <button type='button'>
                    <MdAddCircleOutline color='#7159C1' size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
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
          <strong>R$1024,00</strong>
        </Total>
      </footer>
    </Container>
  )
}
