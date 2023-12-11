import { useContext, useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import styles from '../StepperAppointment.module.css'
import { PetUser, Pet } from '@/interfaces'
import AuthContext from '../../../context/AuthContext'
import { getPetsByUserId } from '../../../services/petService'



interface Props {
    handlerPet: (data: any) => void
  }


const PetSelect = ({ handlerPet }: Props) => {

    const { userLog } = useContext(AuthContext);
    const [pets, setPets] = useState<PetUser | undefined>()

    const getPets = async () =>{
        if (userLog === undefined) {
            // Manejar el caso en que no hay usuario logueado
        } else {
            setPets(await getPetsByUserId(userLog.id))
        }        
    }
  
    useEffect(() => {  
        getPets()   
    }, [userLog])

   
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
                        {pets?.pet.map((pet) =>
                            <MenuItem key={pet.id} value={pet.id}>{pet.name}</MenuItem>
                        )}

                    </Select>
                </FormControl>
            </Stack>
        </>)
}

export default PetSelect