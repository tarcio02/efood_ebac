import { Link } from 'react-router-dom'

import { useState } from 'react'

import imgPizza from '../../assets/images/prato.png'
import fechar from '../../assets/images/close.png'

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
  id: number | undefined
  image: string | undefined
  title: string
  nome: string | undefined
  description: string | undefined
  button: string
}

type ModalState = {
  isVisible: boolean
}

const PratosRestaurante = ({
  id,
  image,
  title,
  nome,
  description,
  button
}: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <Link to={`/cardapio/${id}`}>
      <Card>
        <Imagem src={image} alt={title} />
        <CardContainer>
          <TituloContainer>
            <Titulo>{nome}</Titulo>
          </TituloContainer>
          <Descricao>{description}</Descricao>
          <BotaoAdicionar
            onClick={() => {
              setModal({
                isVisible: true
              })
            }}
          >
            <a>{button}</a>
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
                  src={imgPizza}
                  alt="Ícone de fechar"
                  onClick={() => {
                    closeModal()
                  }}
                />
              </div>
              <InfosContainer>
                <h4>Pizza Marguerita</h4>
                <p>
                  A pizza Margherita é uma pizza clássica da culinária italiana,
                  reconhecida por sua simplicidade e sabor inigualável. Ela é
                  feita com uma base de massa fina e crocante, coberta com molho
                  de tomate fresco, queijo mussarela de alta qualidade,
                  manjericão fresco e azeite de oliva extra-virgem. A combinação
                  de sabores é perfeita, com o molho de tomate suculento e
                  ligeiramente ácido, o queijo derretido e cremoso e as folhas
                  de manjericão frescas, que adicionam um toque de sabor
                  herbáceo. É uma pizza simples, mas deliciosa, que agrada a
                  todos os paladares e é uma ótima opção para qualquer ocasião.{' '}
                  <br /> <br /> Serve: de 2 a 3 pessoas
                </p>
                <BotaoAdicionar>
                  Adicionar ao carrinho - R$ 60,90
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
    </Link>
  )
}

export default PratosRestaurante
