import Head from 'next/head'
import Slider from '../components/home/carousel/Slider'
import Nosotros from '../components/home/nosotros'
import { Servicios } from '../components/home/servicios/Servicios'
import { Ubicacion } from '../components/home/ubicacion/Ubicacion'
import { GetStaticProps, NextPage } from 'next'
import { getProfessionals, getServices } from '../services/stepperService'
import { Professional, Service } from '@/interfaces'
import { getImage } from '../services/homeService'

interface Props {
  services: Service[]
  img1: string
  img2: string
  img3: string
  profesionales : Professional[]
}

const Home: NextPage<Props> = ({ services, img1, img2, img3, profesionales }) => {
  return (
    <>
      <Head>
        <title>Pets Care</title>
        <meta name="Página de inicio" content="Página web de clínica veterinaria que ofrece servicios de laboratorio, cirugía, vacunación, consulta médica, peluquería y radiografía." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slider img1={img1} img2={img2} img3={img3} />
        <Servicios services={services} profesionals={profesionales} />
        <Nosotros />
        <Ubicacion />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const services = await getServices()
  const profesionales = await getProfessionals()

  const img1 = await getImage('experiencia')
  const img2 = await getImage('confianza')
  const img3 = await getImage('empatia')

  return {
    props: {
      services,
      img1,
      img2,
      img3,
      profesionales
    }
  }
}

export default Home