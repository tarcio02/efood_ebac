import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Imagem, Text, Titulo, Container } from './styles'

//import { Restaurant } from '../../pages/Home'
import { useGetBannerQuery } from '../../services/api'

const Banner = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetBannerQuery(id!)

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
