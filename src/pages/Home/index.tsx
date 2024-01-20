import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaRestaurantes'
//import ModeloRestaurante from '../../models/Restaurante'

//import prato1 from '../../assets/images/imagem.png'
//import estrela from '../../assets/images/estrela.png'
import { useEffect, useState } from 'react'

// const comercios: ModeloRestaurante[] = [
//   {
//     id: 1,
//     infos: ['Destaque da semana', 'Japonesa'],
//     image: prato1,
//     title: 'Hioki Sushi',
//     number: '4.9',
//     star: estrela,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
//     // eslint-disable-next-line react/jsx-key
//     button: 'Saiba mais'
//   },
//   {
//     id: 2,
//     infos: ['Japonesa'],
//     image: prato1,
//     title: 'Hioki Sushi',
//     number: '4.6',
//     star: estrela,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
//     button: 'Saiba mais'
//   },
//   {
//     id: 3,
//     infos: ['Japonesa'],
//     image: prato1,
//     title: 'Hioki Sushi',
//     number: '4.6',
//     star: estrela,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
//     button: 'Saiba mais'
//   },
//   {
//     id: 4,
//     infos: ['Japonesa'],
//     image: prato1,
//     title: 'Hioki Sushi',
//     number: '4.6',
//     star: estrela,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
//     button: 'Saiba mais'
//   },
//   {
//     id: 5,
//     infos: ['Japonesa'],
//     image: prato1,
//     title: 'Hioki Sushi',
//     number: '4.6',
//     star: estrela,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
//     button: 'Saiba mais'
//   },
//   {
//     id: 6,
//     infos: ['Japonesa'],
//     image: prato1,
//     title: 'Hioki Sushi',
//     number: '4.6',
//     star: estrela,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
//     button: 'Saiba mais'
//   }
// ]

export type Restaurant = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  button: string
  destacado: boolean
  tipo: string
  cardapio?: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resposta) => resposta.json())
      .then((resposta) => setRestaurantes(resposta))
  }, [])

  return (
    <>
      <Header />
      <ListaRestaurantes comercios={restaurantes} />
    </>
  )
}

export default Home
