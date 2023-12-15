import ModeloRestaurante from '../../models/Restaurante'
import Restaurante from '../Restaurante'

import { Container, List } from './styles'

export type Props = {
  comercios: ModeloRestaurante[]
}

const ListaRestaurantes = ({ comercios }: Props) => (
  <Container className="container">
    <div>
      <List>
        {comercios.map((comercio) => (
          <Restaurante
            key={comercio.id}
            infos={comercio.infos}
            image={comercio.image}
            title={comercio.title}
            number={comercio.number}
            star={comercio.star}
            description={comercio.description}
            button={comercio.button}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaRestaurantes
