import Head from 'next/head'
import TitleSection from '../../components/utils/TitleSection'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { GetServerSideProps, NextPage } from 'next'
import { getPetsByUserId } from '../../services/petService'
import { getProfessionals } from '../../services/userService'
import { getServices } from '../../services/servicesService'
import { Professional, Service, PetUser } from '../../interfaces'
import AuthContext from '../../context/AuthContext'
import { useContext, useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import { Paper, Stack } from '@mui/material'
import styles from '../../components/appointments/StepperAppointment.module.css'
import StepperAppointment from '../../components/appointments/StepperAppointment'


interface Props {
  services: Service[]
  professionals: Professional[]
}

const TurnosPage: NextPage<Props> = ({ services, professionals }) => {

  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { userLog } = useContext(AuthContext);
  const [pets, setPets] = useState<PetUser | undefined>()

  useEffect(() => {

    if (userLog !== undefined) {
      async () => setPets(await getPetsByUserId(userLog.id))
    }
  }, [userLog])

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
          <Paper className={styles.paper}>
            {isAuthenticated && pets !== undefined ?
              <StepperAppointment services={services} professionals={professionals} pets={pets} />
              :
              <Stack className={styles.boxAlert}>
                <Alert variant="outlined" severity="warning">
                  Para agendar un turno necesitas estar registrado y haber iniciado sesión
                </Alert>
                <Button variant="contained" color='secondary' className={styles.buttonLogin} onClick={() => { loginWithRedirect({ appState: { returnTo: '/client' } }) }}>iniciar sesión</Button>
              </Stack>}
          </Paper>
        </Box>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {


  const services = await getServices()
  const professionals = await getProfessionals()


  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate'
  )
  return {
    props: {
      services,
      professionals
    }
  }
}


export default TurnosPage