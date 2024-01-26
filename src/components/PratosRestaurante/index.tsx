import { useState } from 'react'
import { useDispatch } from 'react-redux'

import fechar from '../../assets/images/close.png'
//import { Restaurant } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'

import {
  Imagem,
  Card,
  CardContainer,
  TituloContainer,
  Titulo,
  Descricao,
  BotaoAdicionar,
  Modal,
  ModalContent,
  InfosContainer
} from './styles'

type Props = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

type ModalState = {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const PratosRestaurante = ({ foto, nome, descricao, porcao, preco }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 117) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(open())
  }

  return (
    <Card>
      <Imagem src={foto} alt={nome} />
      <CardContainer>
        <TituloContainer>
          <Titulo>{nome}</Titulo>
        </TituloContainer>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <BotaoAdicionar
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
        >
          <a>Adicionar ao carrinho</a>
        </BotaoAdicionar>
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent className="container">
            <img
              src={fechar}
              alt="Botão de fechar"
              onClick={() => {
                closeModal()
              }}
            />
            <div>
              <img
                src={foto}
                alt="Ícone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
            </div>
            <InfosContainer>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>{porcao}</p>
              <BotaoAdicionar onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(preco)}
              </BotaoAdicionar>
            </InfosContainer>
          </ModalContent>
          <div
            className="overlay"
            onClick={() => {
              closeModal()
            }}
          ></div>
        </Modal>
      </CardContainer>
    </Card>
  )
}

export default PratosRestaurante
