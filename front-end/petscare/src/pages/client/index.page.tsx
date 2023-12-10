import TitleSection from "../../components/utils/TitleSection"
import { PetConsults } from "@/interfaces"
import { Box, Container, Paper} from "@mui/material"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import Typography from '@mui/material/Typography';
import FormUpdateUser from "../../components/cliente/formUpdateUser";
import styles from "../../components/cliente/client.module.css"
import AccordionPet from "../../components/cliente/AccordionPet";
import { getPetsConsults } from "../../services/clientService";
import { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { getUserByEmail } from "@/services/userService"

interface Props {
  petsConsults: PetConsults[]
}


const ClientPage: NextPage<Props> = ({  petsConsults }) => {

  const [dataFiltered, setDataFiltered] = useState()
  const { user } = useAuth0()
  const [userLog, setUserLog] =useState()

  useEffect(()=>{

   /*  user !== undefined &&  async()=> getUserByEmail(user.email)
 */
  }, [])

  return (
    <>
      <Head>0
        <title>Pets Care: clientes</title>
        <meta name="description" content="clientes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth={'xl'} >
        <Box pt='80px'>
          <TitleSection title='Mi cuenta' colorLine='64C9A7' colorText='573469' />
          <Paper className={styles.paper}>
            <Box className={styles.personalData}>
              <Typography className={styles.subtitle}>Datos Personales</Typography>
              <FormUpdateUser />
            </Box>
            <Box className={styles.personalData}>
              <Typography className={styles.subtitle}>Mis mascotas</Typography>

              {petsConsults.map((pet) =>
                <AccordionPet key={pet.pet.id} data={pet} />
              )
              }
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  )


}


export const getServerSideProps: GetServerSideProps = async ({ res }) => {

  const petsConsults = await getPetsConsults()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate'
  )


  return {
    props: {
      petsConsults
    }
  }
}



export default ClientPage

