import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'

import { api } from '../../services/api'
import { formatPrice } from '../../utils/format'
import { ProductList } from './styles'

export function Home () {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function handleEffect () {
      const response = await api.get('/products')

      const data = response.data.map(product => ({
        ...product,
        price: formatPrice(product.price)
      }))

      setProducts(data)
    }
    handleEffect()
  }, [])

  function handleProductAdd (product) {
    dispatch({
      type: 'ADD_TO_CART',
      product
    })
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.id} />
          <strong>{product.title}</strong>
          <span>{product.price}</span>

          <button type='button' onClick={() => handleProductAdd(product)}>
            <div>
              <MdAddShoppingCart color='#FFF' size={16} />
            3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}
