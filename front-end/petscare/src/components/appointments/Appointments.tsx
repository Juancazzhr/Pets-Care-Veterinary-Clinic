import { FC, useContext } from 'react'
import Paper from '@mui/material/Paper'
import styles from './Appointments.module.css'
import StepperAppointment from './formItems/stepper/StepperAppointment'
import Alert from '@mui/material/Alert'
import AuthContext from '../../context/AuthContext'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import { getServices } from '../../services/stepperService';
import { Service } from '../../interfaces/servicios'

interface Props {  
    services: Service[]
}

const Appointments: NextPage<Props> = ({services}) => {

    const { auth } = useContext(AuthContext);
    return (
        <Paper className={styles.paper}>
            {auth ?
                <StepperAppointment services={services} />
                :
                <Stack className={styles.boxAlert}>
                    <Alert variant="outlined" severity="warning">
                        Para agendar un turno necesitas estar registrado y haber iniciado sesión
                    </Alert>
                    <Button variant="contained" color='secondary' className={styles.buttonLogin} href='/login'>iniciar sesión</Button>
                </Stack>}

        </Paper>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {

       
    const services = await getServices()

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    return {
        props: {
            services
        }
    }
}

export default Appointments;