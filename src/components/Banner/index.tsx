import { useEffect, useState } from 'react'

import { Imagem, Text, Titulo, Container } from './styles'

import { Restaurant } from '../../pages/Home'
import { useParams } from 'react-router-dom'

const Banner = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  return (
    <Imagem style={{ backgroundImage: `url(${restaurant?.capa})` }}>
      <div className="container">
        <Container>
          <div>
            <Text>{restaurant?.tipo}</Text>
          </div>
          <div>
            <Titulo>{restaurant?.titulo}</Titulo>
          </div>
        </Container>
      </div>
    </Imagem>
  )
}

export default Banner
