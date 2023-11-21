import { useForm, SubmitHandler } from 'react-hook-form'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Divider, Typography } from '@mui/material'
import { AppointmentInput, Pet, Professional, Service } from '../../../../interfaces'
import { useEffect, useState } from 'react'
import { getPetById } from '../../../../services/stepperService'




interface Props {
    handlerConfirmationStep: (data: any) => void
    services: Service[]
    professionals: Professional[]
    dataForm: AppointmentInput
}

const ConfirmationStep = ({ handlerConfirmationStep, dataForm, services, professionals }: Props) => {

    const [pet, setPet] = useState<Pet>()
    const [service, setService] = useState<Service>()
    const [professional, setProfessional] = useState<Professional>()
    const [date, setDate] = useState<string>()

    const [dataConfirmation, setDataConfirmation] = useState({
        petname: '',
        serviceName: '',
        professionalName: '',
        date: ''
    })


    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaProfessional)
    } */);

    const onSubmit: SubmitHandler<any> = () => {
        handlerConfirmationStep(dataForm)
    }


    const getServiceName = (id: number, services: Service[]) => {
        services.map((service) => {
            if (service.id === id) {
                return setService(service)
            }
        })
    }

    const getProfessionalName = (id: number, professionals: Professional[]) => {
        professionals.map((professional) => {
            if (professional.professionalDTO.id === id) {
                return setProfessional(professional)
            }
        })
    }

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleString('es-ES')
    }

    useEffect(() => {
        getPetById(dataForm.petID, setPet)
        getServiceName(Number(dataForm.serviceID), services)
        getProfessionalName(Number(dataForm.professionalID), professionals)
        setDate(formatDate(dataForm.date))

    }, [])


    return (
        <form className={styles.formProfessional} onSubmit={handleSubmit(onSubmit)}>
            <Stack className={styles.dataConfirmation}>
                <Typography>Nombre mascota: <strong>{pet?.name}</strong></Typography>
                <Divider />
                <Typography>Servicio: <strong>{service?.name}</strong></Typography>
                <Divider />
                <Typography>Profesional: <strong>Dr/a. {professional?.user.firstName} {professional?.user.lastName}</strong></Typography>
                <Divider />
                <Typography>Fecha: <strong>{date}</strong></Typography>
                <Divider />
            </Stack>
            
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>confirmar</Button>
            </Box>
        
        </form>
    )
}

export default ConfirmationStep