import { FC } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import styles from './Appointments.module.css'

import PetSelect from './formItems/PetSelect'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Typography from '@mui/material/Typography'
import StepperAppointment from './formItems/stepper/StepperAppointment'

const Appointments: FC = () => {
    return (
        <Paper className={styles.paper}>
            <StepperAppointment />
        </Paper>
    )
}

export default Appointments;