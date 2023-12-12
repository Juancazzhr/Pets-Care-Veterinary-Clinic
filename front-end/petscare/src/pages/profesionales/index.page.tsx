import Head from 'next/head'
import TitleSection from '../../components/utils/TitleSection'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { GetStaticProps, NextPage } from 'next'
import { getProfessionals } from '../../services/userService'
import { Professional, Service, PetUser } from '../../interfaces'
import { Grid, Paper} from '@mui/material'
import styles from '../../components/professionals/profesionales.module.css'
import CardProfessional from '../../components/professionals/cardProfessional'


interface Props {
    professionals: Professional[]
}

const ProfesionalesPage: NextPage<Props> = ({ professionals }) => {


    return (
        <>
            <Head>
                <title>Pets Care: profesionales</title>
                <meta name="description" content="Profesionales" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container maxWidth={'xl'} >
                <Box pt='80px'>
                    <TitleSection title='profesionales' colorLine='64C9A7' colorText='573469' />
                    <Paper className={styles.paper}>
                        <Grid container spacing={2}>
                            {professionals?.map((professional, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <CardProfessional data={professional} />
                                </Grid>
                            ))}
                        </Grid>

                    </Paper>
                </Box>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const professionals = await getProfessionals()

    return {
        props: {
            professionals
        }
    }
}


export default ProfesionalesPage