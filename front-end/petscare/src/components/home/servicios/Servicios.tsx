import React, { FC } from 'react'
import { Cards } from './cards'
import styles from "./Servicios.module.css";
import { Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack'
import TitleSection from '../../utils/TitleSection';
import { Professional, Service } from '@/interfaces';

interface Props {
  services: Service[]
  profesionals: Professional[]
}

export const Servicios: FC<Props> = ({services, profesionals}) => {
/*   console.log(profesionals); */
  
  return (
    <Container maxWidth={'xl'} className={styles.wrapper}> 
      <Stack className={styles.stack}>
        <Container className={styles.container}> 
        <TitleSection title='servicios' colorLine='64C9A7' colorText='573469'/>
          <Button className={styles.button} variant="contained" href='/turnos'>Solicita tu turno</Button>      
        </Container>
        <Cards services={services} profesionals={profesionals}/>
      </Stack>
    </Container>
  )
}
