import ProfileHeader from '../../components/ProfileHeader'
import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurant } from '../Home'
//import ModeloRestaurante from '../../models/Restaurante'

//import prato from '../../assets/images/prato.png'
//import estrela from '../../assets/images/estrela.png'

// const comercios: ModeloRestaurante[] = [
//   {
//     id: 1,
//     infos: ['Destaque da semana', 'Japonesa'],
//     image: prato,
//     title: 'Pizza Marguerita',
//     number: '4.0',
//     star: estrela,
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   },
//   {
//     id: 2,
//     infos: ['Japonesa'],
//     image: prato,
//     title: 'Pizza Marguerita',
//     number: '4.6',
//     star: estrela,
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   },
//   {
//     id: 3,
//     infos: ['Japonesa'],
//     image: prato,
//     title: 'Pizza Marguerita',
//     number: '4.6',
//     star: estrela,
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   },
//   {
//     id: 4,
//     infos: ['Japonesa'],
//     image: prato,
//     title: 'Pizza Marguerita',
//     number: '4.6',
//     star: estrela,
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   },
//   {
//     id: 5,
//     infos: ['Japonesa'],
//     image: prato,
//     title: 'Pizza Marguerita',
//     number: '4.6',
//     star: estrela,
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   },
//   {
//     id: 6,
//     infos: ['Japonesa'],
//     image: prato,
//     title: 'Pizza Marguerita',
//     number: '4.6',
//     star: estrela,
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: 'Adicionar ao carrinho'
//   }
// ]

const Categories = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ProfileHeader />
      <Banner />
      <ListaPratos comercios={restaurant} />
    </>
  )
}

export default Categories
