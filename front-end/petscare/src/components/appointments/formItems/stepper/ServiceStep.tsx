import {useState} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const services = ['cirugía', 'laboratorio', 'vacunación', 'consulta', 'radiografía', 'peluquería']

interface Props {
    handlerServiceStep: (data: any) => void,
    /* defaultValues: CheckoutInput */
}



const ServiceStep = ({handlerServiceStep}:Props) => {

    const [value, setValue] = useState('');

    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaService)
    } */);

    const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    const onSubmit: SubmitHandler<any> = (data) => {
        handlerServiceStep(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
        </form>
    )
}

export default ServiceStep