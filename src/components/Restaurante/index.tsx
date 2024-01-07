//import Tag from '../Tag'
import { Link } from 'react-router-dom'

import {
  Card,
  CardContainer,
  TituloContainer,
  Titulo,
  NotaContainer,
  Nota,
  Descricao,
  Infos,
  TagContainer,
  SaibaMais
} from './styles'

type Props = {
  infos: string[]
  image: string
  title: string
  number: string
  star: string
  description: string
  button: string
}

const Restaurante = ({
  infos,
  image,
  title,
  number,
  star,
  description,
  button
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <TagContainer key={info}>{info}</TagContainer>
      ))}
    </Infos>
    <CardContainer>
      <TituloContainer>
        <Titulo>{title}</Titulo>
        <NotaContainer>
          <Nota>{number}</Nota>
          <img src={star} alt="Estrela" />
        </NotaContainer>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <SaibaMais>
        <Link
          style={{ textDecoration: 'none', color: '#FFEBD9' }}
          to="/categories"
        >
          {button}
        </Link>
      </SaibaMais>
    </CardContainer>
  </Card>
)

export default Restaurante
