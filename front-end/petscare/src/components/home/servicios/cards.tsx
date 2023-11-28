import React, { FC, useState } from 'react'
import styles from "./Servicios.module.css";
import { Box } from '@mui/material'
import { Card } from '@mui/material'
import { CardActionArea } from '@mui/material'
import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { Service } from '@/interfaces';
import DetalleServ from '../detalleServicio/detalleServicio';

interface Props {
  services: Service[];
}

export const Cards: FC<Props> = ({services}) => {

  const [buttonClicked, setButtonClicked] = useState(false);
  const [cardActual, setCardActual] = useState({ 
    "id":0,  
    "name": "",
    "description": "",
    "thumbnail": "",
  })

function verDetalle(serv : Service) {
  
  setButtonClicked(true)
  setCardActual(serv) 
  
}  

  return (   
    
    <Grid  container spacing={1} >
      <Grid>
      {
        buttonClicked ? <DetalleServ  visible={"block"} servicio={cardActual}  /> : <></>
      }
      </Grid>
      <Box className={styles.box}>
        {
          services?.map((serv)=>(
            <Grid xs={10} sm={6} md={4} xl={2} key={serv.id} className={styles.grid}>  
              <Card 
                elevation={6} 
                className={styles.cards}
                style={buttonClicked && serv?.id === cardActual?.id ? { display:'none'}: {display:'block'}}
                >
                <CardActionArea                  
                  onClick={() => {
                    verDetalle(serv);
                  }} 
                >
                  <CardMedia
                    component="img"
                    height='280px'
                    image={serv.thumbnail}
                    alt={serv.name}
                    />
                  <CardContent>
                    <Typography className={styles.nameCard} >
                      {serv.name}
                    </Typography>              
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Box>
    </Grid>
  )
}
