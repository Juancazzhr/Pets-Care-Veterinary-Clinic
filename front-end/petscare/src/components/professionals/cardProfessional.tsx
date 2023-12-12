import {FC} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Professional } from '@/interfaces';

interface Props{
    data: Professional
}

const CardProfessional:FC<Props> = ({data}) => {
    return (
        <Card >
            <CardContent>
                <Typography variant="h5" component="div">
                  Dr/a. {data.user.firstName}  {data.user.lastName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                 Matrícula N° {data.professionalDTO.licenseNumber}
                </Typography>
                <Typography variant="body2">
                 Contacto: {data.user.email}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardProfessional