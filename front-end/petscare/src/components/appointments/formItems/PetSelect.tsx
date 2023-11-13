import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import styles from '../Appointments.module.css'
import { SubmitHandler } from 'react-hook-form'

const petsUser = ['canela', 'lupita', 'cachilo']

interface Props {
    handlerPet: (data: any) => void,
    /* defaultValues: AppointmentInput */
}


const PetSelect = ({handlerPet}:Props) => {

    const [pet, setPet] = useState('');

    const handleChangePet = (event: SelectChangeEvent) => {
        event.stopPropagation();
        setPet(event.target.value as string);
    };

    const onSubmit: SubmitHandler<any> = (data) => {
        handlerPet(data)
    }
    return (
        <>
            <Stack className={styles.petSelect}>
                <FormControl fullWidth onSubmit={onSubmit}>
                    <InputLabel id="petSelectLabel">Seleccioná la mascota</InputLabel>
                    <Select
                        labelId="petSelectLabel"
                        id="petSelect"
                        value={pet}
                        label="pet"
                        onChange={handleChangePet}
                    >
                        {petsUser.map((pet, index) =>
                            <MenuItem key={index} value={pet}>{pet}</MenuItem>
                        )}

                    </Select>
                </FormControl>
            </Stack>
        </>)
}

export default PetSelect