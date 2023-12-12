import { Professional, Service } from "@/interfaces";
import styles from "./Detalle.module.css";
import { CardMedia, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { FC, useState } from "react";




interface Props {
    servicio: Service;
    visible: string
    profesionals: Professional[]
  }

const DetalleServ: FC<Props> = ({ servicio, visible, profesionals }) => {
      
    const [profName, setprofName] = useState<string>('');

    const handleChange = (event: SelectChangeEvent<typeof profName>) => {
        setprofName(event.target.value);
    };

    return (
        <Container className={styles.wrapperDet} style={{ display: `${visible}` }}>
            <CardMedia
                    className={styles.imgDet}
                    component="img"
                    image={servicio.thumbnail}
                    alt={servicio.name}
                    />
            <Typography className={styles.titleDet}>

                {servicio?.name}
            </Typography>
            <Typography className={styles.desc}>
                {servicio?.description}
            </Typography>
            <FormControl variant="standard" sx={{ m: 2 }} className={styles.form}>
                <InputLabel>LIstado de Profesionales</InputLabel>
                <Select
                    value={profName}
                    onChange={handleChange}
                >
                    {profesionals?.map((profesional) => (
                        <MenuItem
                            key={profesional.user.id}
                            value={profesional.user.firstName + " " + profesional.user.lastName}
                        >
                            {profesional.user.firstName + " " + profesional.user.lastName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Container>
    )

}

export default DetalleServ