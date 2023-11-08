import {useState} from 'react'
import InputLabel  from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent }  from '@mui/material/Select'
import styles from '../Appointments.module.css'

const petsUser = ['canela','lupita','cachilo' ]

const PetSelect = () => {

    const [pet, setPet] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setPet(event.target.value as string);
      };
    
    return (
        <>
            <InputLabel className={styles.petSelect}>Seleccioná la mascota</InputLabel>
            <Select
                labelId="petSelect"
                id="petSelect"
                value={pet}
                label="pet"
                onChange={handleChange}
            >
                { petsUser.map((pet)=>
                <MenuItem value={pet}>{pet}</MenuItem>
                )}               
               
            </Select>
        </>)
}

export default PetSelect