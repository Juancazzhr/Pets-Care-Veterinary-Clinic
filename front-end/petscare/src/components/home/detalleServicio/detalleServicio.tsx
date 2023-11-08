import { Serv } from "@/interfaces/servicios";
import styles from "./Detalle.module.css";
import {Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { FC, useState } from "react";
import Image from 'next/image'
import {profData} from '../servicios/profData'

interface Props {
    servicio : Serv,
    visible: string
}


export const DetalleServ: FC<Props> = ({servicio, visible}) => {
   
    const [profName, setprofName] = useState<string[]>([]);
    const profesionales = profData
    
    const handleChange = (event: SelectChangeEvent<typeof profName>) => {
        setprofName(event.target.value);
    };
          
    return(       
        <Container className={styles.wrapperDet} style={{ display : `${visible}`}}>            
                <Image className={styles.imgDet} 
                    src={servicio?.url}                    
                    alt={"cirugia"}
                    width= {340}
                    height = {280}
                />
                <Typography className={styles.titleDet}>
                    
                    {servicio?.nombre}
                </Typography>
                <Typography >
                 {servicio?.descripcion}
                </Typography>
                <FormControl variant="standard"  sx={{ m: 2, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">LIstado de Profesionales</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
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