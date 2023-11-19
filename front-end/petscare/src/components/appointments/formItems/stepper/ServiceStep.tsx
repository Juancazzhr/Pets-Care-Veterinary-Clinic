import {useEffect, useState} from 'react'
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

/* const services = [
  {
    "id": 1,
    "name": "laboratorio",
    "description": "Nuestro Laboratorio Clínico veterinario incluye la recepción, transporte y procesamiento de diferentes especímenes biológicos de manera oportuna, eficiente y confiable. Realizamos exámenes de rutina y especializados para el diagnóstico de enfermedades hormonales y/o infecciosas; todos estos servicios se práctican bajo un estricto control de calidad, con un equipo humano altamente calificado y con tecnología de punta.",
    "thumbnail": "https://petscare.s3.amazonaws.com/services/laboratorio.jpg"
  },
  {
    "id": 2,
    "name": "vacunación",
    "description": "La vacunación es un acto clínico de gran importancia para la salud de las mascotas y son la forma más efectiva para luchar contra ciertas enfermedades muy peligrosas; solo un veterinario puede valorar su estado sanitario, la edad idónea, una correcta desparasitación y otras circunstancias necesarias para obtener una buena inmunidad. El tipo de vacunas y la frecuencia puede variar según hábitos y zona geográfica en la que se viva. Por ello, en el momento en que una persona se convierte en propietario de un animal, debe acudir al veterinario que es el único profesional capacitado para orientarle en lo referente a los cuidados sanitarios que requiere su mascota.",
    "thumbnail": "https://petscare.s3.amazonaws.com/services/vacunacion.png"
  },
  {
    "id": 3,
    "name": "consulta",
    "description": "La prevención veterinaria es la mayor y mejor medida para que las mascotas tengan salud y una buena calidad de vida en todas sus etapas vitales: cachorro, adulto y sénior; por esto contarás con diversos servicios de control para asegurar el bienestar de tu mascota desde su nacimiento. A travès de las revisiones periódicas se busca detectar problemas de salud y enfermedades logrando realizar un mejor diagnóstico, aplicar un tratamiento con mayor rapidez, mejorar el pronóstico para la mascota y acelerar su recuperación.",
    "thumbnail": "https://petscare.s3.amazonaws.com/services/consulta.png"
  },
  {
    "id": 4,
    "name": "radiografía",
    "description": "La radiología veterinaria es una técnica de diagnóstico por imagen muy utilizada por ser un procedimiento sencillo de realizar, informando rápidamente sobre el estado de tejidos blandos, huesos o articulaciones. En una radiografía podemos localizar diferentes daños internos, como fracturas, problemas cardiopulmonares, cuerpos extraños, cálculos en vejiga, tumores, entre otros; el servicio de radiología digital permite disponer de imágenes de alta calidad en cuestión de minutos. Nuestros profesionales y el personal auxiliar le ofrecerán un servicio excelente a tu mascota.\n",
    "thumbnail": "https://petscare.s3.amazonaws.com/services/radiografia.png"
  },
  {
    "id": 5,
    "name": "peluquería",
    "description": "Contamos con el servicio de baño, grooming y peluqueria canina y felina siempre enfocado a realzar la belleza de la mascota, guiándonos por los estándares mundiales de cada una de las razas, implementando técnicas de vanguardia y utilizando materiales e insumos de primera calidad, siempre dirigidos a disminuir el estrés durante el servicio para obtener una experiencia agradable y de máximo bienestar para la mascota logrando el mejor resultado, así como la tranquilidad y seguridad de nuestros clientes.",
    "thumbnail": "https://petscare.s3.amazonaws.com/services/peluqueria.png"
  },
  {
    "id": 6,
    "name": "cirugía",
    "description": "Todo acto quirúrgico será evaluado en forma individual en una consulta clínica prequirúrgica y se agregarán los estudios prequirúrgicos pertinentes.\nCirugía general, laparoscópica y mínima invasión, traumatología, odontológica y maxilofacial.\nLa valoración del paciente en su totalidad es fundamental para realizar cualquier prodecimiento quirúrgico bajo anestesia tanto inhalatoria como TIVA (endovenosa) y su monitoreo anestésico.",
    "thumbnail": "https://petscare.s3.amazonaws.com/services/cirugia.png"
  }
]  */

interface Props {
    handlerServiceStep: (data: any) => void,
    /* services: Service[] */
    /* defaultValues: AppointmentInput */
}



const ServiceStep = ({handlerServiceStep/* , services */}:Props) => {

    const [value, setValue] = useState('');

    const [services, setServices]= useState<Service[]>()

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

    useEffect(()=>{
        getServices(setServices)
        
     },[])


    console.log(services);
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <RadioGroup
                value={value}
                onChange={handleChangeRadio}
                className={styles.radioGroup}
            >
                {services?.map((service, index) =>
                    <FormControlLabel key={index} value={service.name} control={<Radio color='secondary'/>} label={service.name} className={styles.radioItem}/>
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

