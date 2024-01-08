import { Link } from 'react-router-dom'

import {
  Imagem,
  Card,
  CardContainer,
  TituloContainer,
  Titulo,
  Descricao,
  SaibaMais
} from './styles'

type Props = {
  image: string
  title: string
  description: string
  button: string
}

const PratosRestaurante = ({ image, title, description, button }: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <CardContainer>
      <TituloContainer>
        <Titulo>{title}</Titulo>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <SaibaMais>
        <Link
          style={{ textDecoration: 'none', color: '#E66767' }}
          to="/categories"
        >
          {button}
        </Link>
      </SaibaMais>
    </CardContainer>
  </Card>
)

export default PratosRestaurante
