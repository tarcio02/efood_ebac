import { Imagem, Text, Titulo, Container } from './styles'

import bannerImg from '../../assets/images/banner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Container>
        <div>
          <Text>Italiana</Text>
        </div>
        <div>
          <Titulo>La Dolce Vita Trattoria</Titulo>
        </div>
      </Container>
    </div>
  </Imagem>
)

export default Banner
