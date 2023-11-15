import { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ServiceStep from './ServiceStep';
import styles from '../../Appointments.module.css'
import ProfessionalStep from './ProfessionalStep';
import DatetimeStep from './DatetimeStep';
import ConfirmationStep from './ConfirmationStep';
import { useRouter } from 'next/router';
import PetSelect from '../PetSelect';
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Stack } from '@mui/material';
import { getServices } from '../../../../services/stepperService';
import { GetServerSideProps } from 'next';
import { Service } from '../../../../interfaces/servicios'

const steps = ['servicio', 'profesional', 'fecha y hora', 'confirmación'];

const defaultValues = {
    petName: '',
    service: '',
    professional: '',
    datetime: {
        date: '',
        time: ''
    }
}

interface Props {  
    services: Service[]
}

const StepperAppointment = ({services}:Props) => {

    console.log(services);
    
    const [activeStep, setActiveStep] = useState(0);
    const router = useRouter()

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handlerPet = (/* data: any */) => {
        /*  setDataForm({ ...dataForm, petName: data }) */
    }

    const handlerServiceStep = (/* data: any */) => {
        /*  setDataForm({ ...dataForm, service: data }) */
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handlerProfessionalStep = (/* data: any */) => {
        /*  setDataForm({ ...dataForm, professional: data }) */
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handlerDatetimeStep = (/* data: any */) => {
        /*  setDataForm({ ...dataForm, datetime: data }) */
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handlerConfirmationStep = (/* data: any */) => {
        /*  setDataForm({ ...dataForm, datetime: data }) */
        router.push("/")
    }

    return (
        <Box sx={{ width: '100%', mt: '50px' }}>
            <Stack className={styles.boxPet}>
                <PetSelect handlerPet={handlerPet}/>
                <Box className={styles.addPets}>
                    <AddCircleIcon color='primary' />
                    <Typography color='primary' ml='10px' variant='body1'>AGREGAR MASCOTA</Typography>
                </Box>

            </Stack>
            <Stepper activeStep={activeStep} alternativeLabel >
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step key={label} {...stepProps} >
                            <StepLabel {...labelProps} >{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Box sx={{ margin: '25px 0' }}>
                <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 700,
                        minHeight: 150,
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#fff' : '#EAEBED',
                    }}>
                    <Box> {activeStep === 0 && <>
                        <Typography sx={{ mt: 2, mb: 1, ml: 1.7 }}>SELECCIONÁ EL SERVICIO A AGENDAR</Typography>
                        <ServiceStep handlerServiceStep={handlerServiceStep} services={services} />

                    </>}
                        {activeStep === 1 && <>
                            <Typography sx={{ mt: 2, mb: 1, ml: 1.7 }}>SELECCIONÁ AL PROFESIONAL DE TU PREFERENCIA</Typography>
                            <ProfessionalStep handlerProfessionalStep={handlerProfessionalStep} />
                        </>}
                        {activeStep === 2 && <>
                            <Typography sx={{ mt: 2, mb: 1, ml: 1.7 }}>SELECCIONÁ FECHA Y HORA</Typography>
                            <DatetimeStep handlerDatetimeStep={handlerDatetimeStep} />
                        </>}
                        {activeStep === 3 && <>
                            <Typography sx={{ mt: 2, mb: 1, ml: 1.7 }}>RESUMEN DE TU TURNO</Typography>
                            <ConfirmationStep handlerConfirmationStep={handlerConfirmationStep} />
                        </>}
                        <Button
                            variant='outlined'
                            color="secondary"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1, bottom: '-90px' }}
                            className={styles.btnStepper}
                        >Volver
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}



export default StepperAppointment