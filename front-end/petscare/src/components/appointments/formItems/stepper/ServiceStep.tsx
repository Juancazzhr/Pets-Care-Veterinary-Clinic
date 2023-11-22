import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { AppointmentInput, Service } from '../../../../interfaces'
import { schemaStepperData } from '../../../../rules'
import { ObjectSchema, AnyObject } from 'yup'
import { FormControl } from '@mui/material'



interface Props {
    handlerServiceStep: (data: any) => void,
    services: Service[]
    defaultValues: AppointmentInput
}



const ServiceStep = ({ handlerServiceStep, services, defaultValues }: Props) => {


    const [selectedValue, setSelectedValue] = useState<string | number>(defaultValues.serviceID);

    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaStepperData)
    } */);

 
    const onSubmit: SubmitHandler<any> = (data) => {   
        handlerServiceStep(data)
    }

   return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="serviceID"
                defaultValue={selectedValue !== 0 ? selectedValue : ''}
                render={({ field: {onChange, value}}) => (
                    <FormControl>
                        <RadioGroup
                            value={value}
                            onChange={onChange}
                            className={styles.radioGroup}
                        >
                            {services?.map((service, index) =>
                                <FormControlLabel key={index} value={service.id} control={<Radio color='secondary' />} label={service.name} className={styles.radioItem} />
                            )}
                        </RadioGroup>
                    </FormControl>
                )}
            />

            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>Siguiente</Button>
            </Box>

        </form>
    )
}


export default ServiceStep
