import { HeaderContainer, Container } from './styles'

import logo from '../../assets/images/logo.png'

const ProfileHeader = () => (
  <HeaderContainer>
    <Container className="container">
      <div>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Restaurantes</p>
      </div>
      <div>
        <img src={logo} alt="Efood" />
      </div>
      <div>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
          0 produto(s) no carrinho
        </p>
      </div>
    </Container>
  </HeaderContainer>
)

export default ProfileHeader
