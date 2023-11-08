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

const professionals = ['Dr. Pepe Hongo', 'Dra. Blanca Nieves', 'Dr. Esteban Quito']

interface Props {
    handlerProfessionalStep: (data: any) => void,
    /* defaultValues: CheckoutInput */
}

const ProfessionalStep = ({handlerProfessionalStep}:Props) => {

    const [professional, setProfessional] = useState('');

    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaProfessional)
    } */);

    const handleChange = (event: SelectChangeEvent) => {
        setProfessional(event.target.value as string);
    };

    const onSubmit: SubmitHandler<any> = (data) => {
        handlerProfessionalStep(data)
    }


    return (
        <form className={styles.formProfessional} onSubmit={handleSubmit(onSubmit)}>
            <Stack className={styles.selectProfessional}>
                <InputLabel>Listado de profesionales</InputLabel>
                <Select
                    labelId="professionalSelect"
                    id="professionalSelect"
                    value={professional}
                    label="pet"
                    onChange={handleChange}
                >
                    {professionals.map((professional) =>
                        <MenuItem value={professional}>{professional}</MenuItem>
                    )}

                </Select>
            </Stack>
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>Siguiente</Button>
            </Box>
        </form>
    )
}

export default ProfessionalStep