import Tag from '../Tag'

import {
  Card,
  CardContainer,
  TituloContainer,
  Titulo,
  NotaContainer,
  Nota,
  Descricao,
  Infos
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
        <Tag key={info}>{info}</Tag>
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
      <Tag size="big">{button}</Tag>
    </CardContainer>
  </Card>
)

export default Restaurante
