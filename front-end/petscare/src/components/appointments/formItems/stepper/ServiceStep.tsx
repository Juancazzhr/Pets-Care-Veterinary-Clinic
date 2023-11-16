import {useState} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { getServices } from '../../../../services/stepperService';
import { GetServerSideProps, GetStaticProps } from 'next'
import { Service } from '../../../../interfaces/servicios'

/* const services = ['cirugía', 'laboratorio', 'vacunación', 'consulta', 'radiografía', 'peluquería'] */

interface Props {
    handlerServiceStep: (data: any) => void,
    services: Service[]
    /* defaultValues: CheckoutInput */
}



const ServiceStep = ({handlerServiceStep, services}:Props) => {

    const [value, setValue] = useState('');

    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaService)
    } */);

    const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        setValue((event.target as HTMLInputElement).value);
    };
    const onSubmit: SubmitHandler<any> = (data) => {
        handlerServiceStep(data)
    }

    console.log(services);
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <RadioGroup
                value={value}
                onChange={handleChangeRadio}
                className={styles.radioGroup}
            >
                {services?.map((service, index) =>
                    <FormControlLabel key={index} value={service} control={<Radio color='secondary'/>} label={service.name} className={styles.radioItem}/>
                )}
            </RadioGroup>
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>Siguiente</Button>
            </Box>
        </form>
    )
}

/* export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {

       
    const services = await getServices()

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    return {
        props: {
            services
        }
    }
}
 */

export default ServiceStep

