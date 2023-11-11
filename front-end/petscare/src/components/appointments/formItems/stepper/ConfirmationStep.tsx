import FormControl from '@mui/material/FormControl'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Divider, Typography } from '@mui/material'

const data = {
    petData: {
        name: 'canela'
    },
    service:'laboratorio',
    professional: 'Dr. Pepe Hongo',
    datetime: '11/23/2023 06:30PM'
}


interface Props {
    handlerConfirmationStep: (data: any) => void,
    /* defaultValues: CheckoutInput */
}

const ConfirmationStep = ({handlerConfirmationStep}:Props) => {


    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaProfessional)
    } */);

    const onSubmit: SubmitHandler<any> = (data) => {
        handlerConfirmationStep(data)
    }


    return (
        <form className={styles.formProfessional} onSubmit={handleSubmit(onSubmit)}>
            <Stack className={styles.dataConfirmation}>
                <Typography>Nombre mascota: <strong>{data.petData.name}</strong></Typography>
                <Divider/>
                <Typography>Servicio: <strong>{data.service}</strong></Typography>
                <Divider/>
                <Typography>Profesional: <strong>{data.professional}</strong></Typography>
                <Divider/>
                <Typography>Fecha: <strong>{data.datetime}</strong></Typography>
                <Divider/>

            </Stack>
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>confirmar</Button>
            </Box>
        </form>
    )
}

export default ConfirmationStep