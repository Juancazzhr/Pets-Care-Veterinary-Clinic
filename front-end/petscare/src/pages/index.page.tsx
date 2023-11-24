import Head from 'next/head'
import Slider from '../components/home/carousel/Slider'
import Nosotros from '../components/home/nosotros'
import {Servicios}  from '../components/home/servicios/Servicios'
import { Ubicacion } from '../components/home/ubicacion/Ubicacion'
import { GetStaticProps, NextPage } from 'next'
import { getServices } from '../services/stepperService'
import { Service } from '@/interfaces'

interface Props {
  services: Service[]
}

const Home:NextPage<Props> =({services}) =>{
  return (
    <>
      <Head>
        <title>Pets Care</title>
        <meta name="Página de inicio" content="Página web de clínica veterinaria que ofrece servicios de laboratorio, cirugía, vacunación, consulta médica, peluquería y radiografía." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slider />
        <Servicios services={services}/>
        <Nosotros/>
        <Ubicacion />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const services = await getServices()
 
   return {
      props: {
          services
      }
  }
}

export default Home