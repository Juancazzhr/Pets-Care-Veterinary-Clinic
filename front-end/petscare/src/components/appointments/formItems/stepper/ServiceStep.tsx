import {useState} from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const services = ['cirugía', 'laboratorio', 'vacunación', 'consulta', 'radiografía', 'peluquería']

const ServiceStep = () => {

    const [value, setValue] = useState('');

    const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };


    return (
        <FormControl>
            <RadioGroup
                value={value}
                onChange={handleChangeRadio}
                className={styles.radioGroup}
            >
                {services.map((service) =>
                    <FormControlLabel value={service} control={<Radio color='secondary'/>} label={service} className={styles.radioItem}/>
                )}
            </RadioGroup>
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>Siguiente</Button>
            </Box>
        </FormControl>
    )
}

export default ServiceStep