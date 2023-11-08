import {useState} from 'react'
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

const steps = ['servicio', 'profesional', 'fecha y hora', 'confirmación'];

const defaultValues = {
    petData: {
        name: ''
    },
    service:'',
    professional: '',
    datetime: {
        date: '',
        time: ''
    }
}

const StepperAppointment = () => {

    const [activeStep, setActiveStep] = useState(1);
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

  return (
    <Box sx={{ width: '100%', mt:'50px' }}>

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => { 
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
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
                        <Typography sx={{  mt: 2, mb: 1, ml: 1.7}}>SELECCIONÁ EL SERVICIO A AGENDAR</Typography>
                        <ServiceStep />
                        
                    </>}
                        {activeStep === 1 && <>
                            <Typography sx={{ mt: 2, mb: 1, ml: 1.7 }}>SELECCIONÁ AL PROFESIONAL DE TU PREFERENCIA</Typography>
                            <ProfessionalStep />
                        </>}
                        {activeStep === 2 && <>
                            <Typography sx={{ mt: 2, mb: 1, ml: 1.7  }}>SELECCIONÁ FECHA Y HORA</Typography>
                            
                        </>}
                        {activeStep === 3 && <>
                            <Typography sx={{ mt: 2, mb: 1, ml: 1.7 }}>RESUMEN DE TU TURNO</Typography>
                            
                        </>}
                        <Button
                            variant='outlined'
                            color="secondary"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1, bottom: '-90px'}}
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