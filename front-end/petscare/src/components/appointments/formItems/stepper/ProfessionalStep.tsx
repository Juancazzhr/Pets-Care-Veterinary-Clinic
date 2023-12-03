import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import styles from '../../StepperAppointment.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Professional } from '@/interfaces'
import { AppointmentInput } from '@/interfaces'

interface Props {
    handlerProfessionalStep: (data: any) => void,
    professionals: Professional[]
    defaultValues: AppointmentInput
}

const ProfessionalStep = ({ handlerProfessionalStep, professionals, defaultValues }: Props) => {

    const [professionalSelected, setProfessionalSelected] = useState(defaultValues.professionalID);

    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaProfessional)
    } */);

   
    const onSubmit: SubmitHandler<any> = (data) => {
        handlerProfessionalStep(data)
    }

   
    return (
        <form className={styles.formProfessional} onSubmit={handleSubmit(onSubmit)}>
            <Stack className={styles.selectProfessional}>
            <Controller
                control={control}
                name="professionalID"
                defaultValue={professionalSelected !== 0 ? professionalSelected : ''}
                render={({ field: {onChange, value}}) => (
                <FormControl fullWidth>
                    <InputLabel id="professionalSelectLabel" >Listado de profesionales</InputLabel>
                    <Select
                        labelId="professionalSelectLabel"
                        id="professionalSelect"
                        value={value}
                        label="professionalSelect"
                        onChange={onChange}
                    >
                        {professionals?.map((professional) =>
                            <MenuItem key={professional.professionalDTO.id} value={professional.professionalDTO.id}>Dr/a. {professional.user.firstName} {professional.user.lastName}</MenuItem>
                        )}

                    </Select>
                </FormControl>
                     )}
                     />
         
            </Stack>
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>Siguiente</Button>
            </Box>
        </form>
    )
}

export default ProfessionalStep