import ModeloRestaurante from '../../models/Restaurante'
import PratosRestaurante from '../PratosRestaurante'

import { Container, List } from './styles'

export type Props = {
  comercios: ModeloRestaurante[]
}

const ListaPratos = ({ comercios }: Props) => (
  <Container className="container">
    <div>
      <List>
        {comercios.map((comercio) => (
          <PratosRestaurante
            key={comercio.id}
            image={comercio.image}
            title={comercio.title}
            description={comercio.description}
            button={comercio.button}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaPratos
