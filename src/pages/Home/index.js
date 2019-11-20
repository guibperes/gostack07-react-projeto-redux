import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'

import { api } from '../../services/api'
import { formatPrice } from '../../utils/format'
import { addToCart } from '../../store/cart/actions'
import { ProductList } from './styles'

export function Home () {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function handleEffect () {
      const response = await api.get('/products')

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))

      setProducts(data)
    }
    handleEffect()
  }, [])

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.id} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type='button' onClick={() => dispatch(addToCart(product))}>
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
