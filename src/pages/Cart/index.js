import React from 'react'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles'

export function Cart () {
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
          <tr>
            <td>
              <img src='https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg' alt='produto' />
            </td>
            <td>
              <strong>Tênis top</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline color='#7159C1' size={20} />
                </button>
                <input type='number' readOnly value={1} />
                <button type='button'>
                  <MdAddCircleOutline color='#7159C1' size={20} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type='button'>
                <MdDelete color='#7159C1' size={20} />
              </button>
            </td>
          </tr>
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
