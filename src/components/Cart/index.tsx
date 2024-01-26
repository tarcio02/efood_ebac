import { useDispatch, useSelector } from 'react-redux'

import Tag from '../Tag'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../PratosRestaurante'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.cardapio.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.cardapio?.foto} alt={item.cardapio?.nome} />
              <div>
                <h3>{item.cardapio?.nome}</h3>
                <span>{formataPreco(item.cardapio?.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>Total de {formataPreco(getTotalPrice())} </Prices>
        <button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
