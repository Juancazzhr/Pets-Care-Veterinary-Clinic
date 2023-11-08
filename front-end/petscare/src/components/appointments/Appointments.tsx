import { FC } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import styles from './Appointments.module.css'
import FormControl from '@mui/material/FormControl'
import PetSelect from './formItems/PetSelect'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Typography from '@mui/material/Typography'
import StepperAppointment from './formItems/stepper/StepperAppointment'

const Appointments:FC = () => {
    return (
        <Paper className={styles.paper}>
            <FormControl fullWidth>
                <PetSelect />
                <Box className={styles.addPets}>
                    <AddCircleIcon color='primary' />
                    <Typography color='primary' ml='10px' variant='body1'>AGREGAR MASCOTA</Typography>
                </Box>
                <StepperAppointment />
            </FormControl>
        </Paper>
    )}

    export default Appointments;