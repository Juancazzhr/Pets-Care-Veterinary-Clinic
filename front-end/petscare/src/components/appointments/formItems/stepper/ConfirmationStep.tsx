import FormControl from '@mui/material/FormControl'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Divider, Typography } from '@mui/material'
import { AppointmentInput, Pet } from '@/interfaces'
import { useEffect, useState } from 'react'
import { getPetById } from '../../../../services/stepperService'




interface Props {
    handlerConfirmationStep: (data: any) => void,
    dataForm: AppointmentInput
}

const ConfirmationStep = ({handlerConfirmationStep, dataForm  }:Props) => {

    const [pet, setPet] = useState<Pet>()
    const [service, setService] = useState('')
    const [professional, setProfessional] = useState('')
    const [date, setDate] = useState('')
    


    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaProfessional)
    } */);

    const onSubmit: SubmitHandler<any> = (data) => {
        handlerConfirmationStep(data)
    }

    useEffect(()=>{
       getPetById(dataForm.petID, setPet)
             
    },[])

    console.log({pet});
    

    return (
        <form className={styles.formProfessional} onSubmit={handleSubmit(onSubmit)}>
            <Stack className={styles.dataConfirmation}>
                <Typography>Nombre mascota: <strong>{pet?.name}</strong></Typography>
                <Divider/>
                <Typography>Servicio: <strong>{service}</strong></Typography>
                <Divider/>
                <Typography>Profesional: <strong>{professional}</strong></Typography>
                <Divider/>
                <Typography>Fecha: <strong>{date}</strong></Typography>
                <Divider/>

            </Stack>
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>confirmar</Button>
            </Box>
        </form>
    )
}

export default ConfirmationStep