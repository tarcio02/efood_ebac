import ProfileHeader from '../../components/ProfileHeader'
import Banner from '../../components/Banner'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import ModeloRestaurante from '../../models/Restaurante'

import prato1 from '../../assets/images/imagem.png'
import estrela from '../../assets/images/estrela.png'

const comercios: ModeloRestaurante[] = [
  {
    id: 1,
    infos: ['Destaque da semana', 'Japonesa'],
    image: prato1,
    title: 'Hioki Sushi',
    number: '4.0',
    star: estrela,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
    button: 'Saiba mais'
  },
  {
    id: 2,
    infos: ['Japonesa'],
    image: prato1,
    title: 'Hioki Sushi',
    number: '4.6',
    star: estrela,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
    button: 'Saiba mais'
  },
  {
    id: 3,
    infos: ['Japonesa'],
    image: prato1,
    title: 'Hioki Sushi',
    number: '4.6',
    star: estrela,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
    button: 'Saiba mais'
  },
  {
    id: 4,
    infos: ['Japonesa'],
    image: prato1,
    title: 'Hioki Sushi',
    number: '4.6',
    star: estrela,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
    button: 'Saiba mais'
  },
  {
    id: 5,
    infos: ['Japonesa'],
    image: prato1,
    title: 'Hioki Sushi',
    number: '4.6',
    star: estrela,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
    button: 'Saiba mais'
  },
  {
    id: 6,
    infos: ['Japonesa'],
    image: prato1,
    title: 'Hioki Sushi',
    number: '4.6',
    star: estrela,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
    button: 'Saiba mais'
  }
]

const Home = () => (
  <>
    <ProfileHeader />
    <Banner />
    <ListaRestaurantes comercios={comercios} />
  </>
)

export default Home