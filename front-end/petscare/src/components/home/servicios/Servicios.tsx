
import React, { FC } from 'react'
import { Cards } from './cards'
import styles from "./Servicios.module.css";
import {servData} from './servData'
import { Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack'


export const Servicios: FC = () => {
  return (
    <Container maxWidth="xl" className={styles.wrapper}> 
      <Stack className={styles.stack}>
        <Container className={styles.container}> 
          <div className={styles.linea}></div>
          <h2 className={styles.title}>servicios</h2>
          <Button className={styles.button} variant="contained">Solicita tu turno</Button>      
        </Container>
        <Cards servicio={servData}/>
      </Stack>
    </Container>

  )
}
