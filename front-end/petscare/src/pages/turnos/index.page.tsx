import Head from 'next/head'
import TitleSection from '../../components/utils/TitleSection'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { GetServerSideProps, NextPage } from 'next'
import Appointments from '../../components/appointments/Appointments'
import { getPetsByUserId, getProfessionals, getServices } from '../../services/stepperService'
import { Professional, Service, PetUser } from '../../interfaces'


interface Props {  
  pets: PetUser
  services: Service[]
  professionals: Professional[]
}


const TurnosPage: NextPage<Props> = ({services, professionals, pets}) => {
  return (
    <>
       <Head>
        <title>Pets Care: turnos</title>
        <meta name="description" content="Turnos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Container maxWidth={'xl'} >
        <Box pt='80px'>
          <TitleSection title='turnos' colorLine='64C9A7' colorText='573469' />
          <Appointments services={services} professionals={professionals} pets={pets}/>
        </Box>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

  const services = await getServices()
  const professionals = await getProfessionals()  
  const pets = await getPetsByUserId(2)

 
  res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate'
  )
  return {
      props: {
          services,
          professionals,
          pets
      }
  }
}


export default TurnosPage