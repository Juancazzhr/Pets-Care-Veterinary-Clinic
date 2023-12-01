import { useContext } from 'react'
import Paper from '@mui/material/Paper'
import styles from './Appointments.module.css'
import StepperAppointment from './formItems/stepper/StepperAppointment'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import { Service, Professional, PetUser } from '../../interfaces'
import { useAuth0 } from "@auth0/auth0-react";


interface Props {  
    services: Service[]
    professionals: Professional[]
    pets: PetUser
}

const Appointments: NextPage<Props> = ({services, professionals, pets}) => {

    
    const { isAuthenticated, loginWithRedirect} = useAuth0();

    return (
        <Paper className={styles.paper}>
            {isAuthenticated ?
                <StepperAppointment services={services} professionals={professionals} pets={pets}  />
                :
                <Stack className={styles.boxAlert}>
                    <Alert variant="outlined" severity="warning">
                        Para agendar un turno necesitas estar registrado y haber iniciado sesión
                    </Alert>
                    <Button variant="contained" color='secondary' className={styles.buttonLogin} onClick={()=>{loginWithRedirect({appState: { returnTo : '/client'}})}}>iniciar sesión</Button>
                </Stack>}

        </Paper>
    )
}


export default Appointments;

