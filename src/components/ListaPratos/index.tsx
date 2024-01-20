//import ModeloRestaurante from '../../models/Restaurante'
import { Restaurant } from '../../pages/Home'
import PratosRestaurante from '../PratosRestaurante'

import { Container, List } from './styles'

export type Props = {
  comercios: Restaurant[]
}

const ListaPratos = ({ comercios }: Props) => (
  <Container className="container">
    <div>
      <List>
        {comercios.map((comercio) => (
          <li key={comercio.id}>
            <PratosRestaurante
              id={comercio.cardapio?.id}
              title={comercio.titulo}
              image={comercio.cardapio?.foto}
              nome={comercio.cardapio?.nome}
              description={comercio.cardapio?.descricao}
              button={comercio.button}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ListaPratos
