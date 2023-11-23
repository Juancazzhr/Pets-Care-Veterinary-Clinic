import { Serv } from "@/interfaces/servicios";
import styles from "./Detalle.module.css";
import { CardMedia, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { FC, useState } from "react";
import Image from 'next/image'
import { profData } from '../../professionals/profData'
import { Service } from "@/interfaces";


interface Props {
    servicio: Service;
    visible: string
  }

const DetalleServ: FC<Props> = ({ servicio, visible }) => {

    const [profName, setprofName] = useState<string>('');
    const profesionales = profData

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
                    {profesionales?.map((profesional) => (
                        <MenuItem
                            key={profesional.id}
                            value={profesional.nombre}
                        >
                            {profesional.nombre}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Container>
    )

}

export default DetalleServ