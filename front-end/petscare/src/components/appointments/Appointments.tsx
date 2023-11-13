import { FC } from 'react'
import Paper from '@mui/material/Paper'
import styles from './Appointments.module.css'
import StepperAppointment from './formItems/stepper/StepperAppointment'

const Appointments: FC = () => {
    return (
        <Paper className={styles.paper}>
            <StepperAppointment />
        </Paper>
    )
}

export default Appointments;