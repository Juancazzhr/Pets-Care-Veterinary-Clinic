import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import styles from '../Appointments.module.css'


const petsUser = [
    {
      "id": 1,
      "name": "Kora",
      "size": "Pequeno",
      "race": "Criolla",
      "clientId": 2,
      "petType": {
        "id": 2,
        "typeName": "Canino"
      },
      "petClinicalHistory": {
        "id": 1,
        "cratedAt": "2023-10-13",
        "lastUpdate": "2023-10-13",
        "weigth": 3.5
      }
    },
    {
      "id": 2,
      "name": "Mittens",
      "size": "Pequeno",
      "race": "Criolla",
      "clientId": 5,
      "petType": {
        "id": 1,
        "typeName": "Felino"
      },
      "petClinicalHistory": {
        "id": 2,
        "cratedAt": "2023-08-13",
        "lastUpdate": "2023-08-20",
        "weigth": 4.2
      }
    }
  ]

interface Props {
    handlerPet: (data: any) => void
}


const PetSelect = ({ handlerPet }: Props) => {

    const [pet, setPet] = useState('');

    const handleChangePet = (event: SelectChangeEvent) => {
        event.stopPropagation();
        setPet(event.target.value as string);
        handlerPet(event.target.value)
    };

   
    
    return (
        <>
            <Stack className={styles.petSelect}>
                <FormControl fullWidth >
                    <InputLabel id="petSelectLabel">Seleccioná la mascota</InputLabel>
                    <Select
                        labelId="petSelectLabel"
                        id="petSelect"
                        value={pet}
                        label="pet"
                        onChange={handleChangePet}
                    >
                        {petsUser.map((pet) =>
                            <MenuItem key={pet.id} value={pet.id}>{pet.name}</MenuItem>
                        )}

                    </Select>
                </FormControl>
            </Stack>
        </>)
}

export default PetSelect