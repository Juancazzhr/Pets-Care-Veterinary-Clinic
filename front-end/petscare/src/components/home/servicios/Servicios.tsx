
import React, { FC } from 'react'
import { Cards } from './cards'
import styles from "./Servicios.module.css";
import {servData} from './servData'
import { Button } from '@mui/material';



export const Servicios: FC = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.linea}></div>
      <h2 className={styles.title}>Servicios</h2>
      <Button className={styles.button} variant="contained">Solicita tu turno</Button>      
    </div>
      <Cards data = {servData}/>
    </>
  )
}
