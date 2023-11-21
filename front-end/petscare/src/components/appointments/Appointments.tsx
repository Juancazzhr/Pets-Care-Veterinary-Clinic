import { useContext } from 'react'
import Paper from '@mui/material/Paper'
import styles from './Appointments.module.css'
import StepperAppointment from './formItems/stepper/StepperAppointment'
import Alert from '@mui/material/Alert'
import AuthContext from '../../context/AuthContext'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import { Service, Professional } from '../../interfaces'


interface Props {  
    services: Service[]
    professionals: Professional[]
}

const Appointments: NextPage<Props> = ({services, professionals}) => {

    
    const { auth } = useContext(AuthContext);
    return (
        <Paper className={styles.paper}>
            {auth ?
                <StepperAppointment services={services} professionals={professionals}  />
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


export default Appointments;

