import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const professionals = ['cirugía', 'laboratorio', 'vacunación', 'consulta', 'radiografía', 'peluquería']

const ProfessionalStep = () => {

    const [professional, setProfessional] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setProfessional(event.target.value as string);
    };

    return (
        <FormControl className={styles.formProfessional}>
            <Stack className={styles.selectProfessional}>
                <InputLabel>Seleccioná la mascota</InputLabel>
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
        </FormControl>
    )
}

export default ProfessionalStep