import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Professional } from '@/interfaces'
import { AppointmentInput } from '@/interfaces'

interface Props {
    handlerProfessionalStep: (data: any) => void,
    professionals: Professional[]
    defaultValues: AppointmentInput
}

const ProfessionalStep = ({ handlerProfessionalStep, professionals }: Props) => {

    const [professionalSelected, setProfessionalSelected] = useState('');

    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaProfessional)
    } */);

    const handleChangeProfessional = (event: SelectChangeEvent) => {
        setProfessionalSelected(event.target.value as string);
    };

    const onSubmit: SubmitHandler<any> = (data) => {
        handlerProfessionalStep(data)
    }

   
    return (
        <form className={styles.formProfessional} onSubmit={handleSubmit(onSubmit)}>
            <Stack className={styles.selectProfessional}>
                <FormControl fullWidth>
                    <InputLabel id="professionalSelectLabel" >Listado de profesionales</InputLabel>
                    <Select
                        labelId="professionalSelectLabel"
                        id="professionalSelect"
                        value={professionalSelected}
                        label="professionalSelect"
                        onChange={handleChangeProfessional}
                    >
                        {professionals?.map((professional) =>

                            <MenuItem key={professional.professionalDTO.id} value={professional.professionalDTO.id}>Dr/a. {professional.user.firstName} {professional.user.lastName}</MenuItem>
                        )}

                    </Select>
                </FormControl>
            </Stack>
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>Siguiente</Button>
            </Box>
        </form>
    )
}

export default ProfessionalStep