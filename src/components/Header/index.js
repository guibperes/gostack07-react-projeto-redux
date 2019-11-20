import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdShoppingBasket } from 'react-icons/md'

import logo from '../../assets/logo.svg'
import { Container, Cart } from './styles'

export function Header () {
  const cartSize = useSelector(state => state.cart.length)

  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='Logo' />
      </Link>

      <Cart to='/cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket color='#FFF' size={36} />
      </Cart>
    </Container>
  )
}
