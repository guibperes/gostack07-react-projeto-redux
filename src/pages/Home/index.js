import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles'

export function Home () {
  return (
    <ProductList>
      <li>
        <img src='https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg' alt='tenis' />
        <strong>Tênis top</strong>
        <span>R$129,90</span>

        <button type='button'>
          <div>
            <MdAddShoppingCart color='#FFF' size={16} />
            3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src='https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg' alt='tenis' />
        <strong>Tênis top</strong>
        <span>R$129,90</span>

        <button type='button'>
          <div>
            <MdAddShoppingCart color='#FFF' size={16} />
            3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src='https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg' alt='tenis' />
        <strong>Tênis top</strong>
        <span>R$129,90</span>

        <button type='button'>
          <div>
            <MdAddShoppingCart color='#FFF' size={16} />
            3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src='https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg' alt='tenis' />
        <strong>Tênis top</strong>
        <span>R$129,90</span>

        <button type='button'>
          <div>
            <MdAddShoppingCart color='#FFF' size={16} />
            3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src='https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg' alt='tenis' />
        <strong>Tênis top</strong>
        <span>R$129,90</span>

        <button type='button'>
          <div>
            <MdAddShoppingCart color='#FFF' size={16} />
            3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src='https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg' alt='tenis' />
        <strong>Tênis top</strong>
        <span>R$129,90</span>

        <button type='button'>
          <div>
            <MdAddShoppingCart color='#FFF' size={16} />
            3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  )
}
