import { useParams } from 'react-router-dom'
//import { useEffect, useState } from 'react'

import ProfileHeader from '../../components/ProfileHeader'
import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'

import { useGetRestaurantQuery } from '../../services/api'

export type Prato = {
  cardapio: Prato[]
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Categories = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (restaurant) {
    return (
      <>
        <ProfileHeader />
        <Banner />
        <ListaPratos pratos={restaurant.cardapio} />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Categories
