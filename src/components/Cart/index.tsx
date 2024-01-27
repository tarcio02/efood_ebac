import { useDispatch, useSelector } from 'react-redux'

//import Tag from '../Tag'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../PratosRestaurante'

import prato from '../../assets/images/prato.png'

import {
  Overlay,
  CartContainer,
  Sidebar,
  CartItem,
  ValorTotal,
  ButtonContinuar
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
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
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <ValorTotal>
          <p>Valor total</p>
          <p>
            {formataPreco(getTotalPrice())}
            {''}
          </p>
        </ValorTotal>
        <ButtonContinuar
          title="Clique aqui para continuar com a entrega"
          type="button"
        >
          Continuar com a entrega
        </ButtonContinuar>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
