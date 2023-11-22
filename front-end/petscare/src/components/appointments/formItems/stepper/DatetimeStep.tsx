import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AppointmentInput } from '@/interfaces'


interface Props {
    handlerDatetimeStep: (data: any) => void,
    defaultValues: AppointmentInput
}

const DatetimeStep = ({ handlerDatetimeStep, defaultValues }: Props) => {

    const [value, setValue] = useState<Dayjs | null>(dayjs(defaultValues.date));

    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaDatetime)
    } */);


    const onSubmit: SubmitHandler<any> = (data) => {
        handlerDatetimeStep(data?.date.$d.toISOString())
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formDatetime}>
            <Stack className={styles.selectDatetime}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Controller
                        name='date'
                        control={control}
                        /* defaultValue={defaultValues.date} */
                        render={({ field: { onChange, value } }) => (

                            <DateTimePicker
                                label="fecha y hora"
                                value={value}
                                format="DD-MM-YYYY HH:mm:ss"
                                onChange={onChange} />
                        )}
                    />
                </LocalizationProvider>
            </Stack>
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>Siguiente</Button>
            </Box>
        </form>
    )
}

export default DatetimeStep