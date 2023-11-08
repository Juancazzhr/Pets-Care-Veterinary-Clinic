import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from '../../Appointments.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


interface Props {
    handlerDatetimeStep: (data: any) => void,
    /* defaultValues: CheckoutInput */
}

const DatetimeStep = ({ handlerDatetimeStep }: Props) => {

    const [value, setValue] = useState<Dayjs | null>(dayjs('2023-11-10T15:30'));

    const { control, formState: { errors }, handleSubmit } = useForm(/* {
        resolver: yupResolver(schemaDatetime)
    } */);


    const onSubmit: SubmitHandler<any> = (data) => {
        handlerDatetimeStep(data)
    }

    return (
        <FormControl onSubmit={handleSubmit(onSubmit)} className={styles.formDatetime}>
            <Stack className={styles.selectDatetime}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={[
                            'DateTimePicker'
                        ]}
                    >
                        <DemoItem>
                            <DateTimePicker
                                label="fecha y hora"
                                value={value}
                                onChange={(newValue) => setValue(newValue)} />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
            </Stack>
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-125px'}>
                <Button type='submit' variant='outlined' color='secondary' className={styles.btnStepper}>Siguiente</Button>
            </Box>
        </FormControl>
    )
}

export default DatetimeStep