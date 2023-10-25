import React, { FC } from 'react'
import styles from "./Servicios.module.css";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { ServData } from '@/interfaces/servicios';

interface Props {
  data: ServData[];
}

export const Cards: FC<Props> = ({data}:Props) => {
  return (
    <Grid container spacing={1} >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent:'space-evenly',
          '& > :not(style)': {
            m: 2,
            width: 300,
            height: 300,
          },
        }}
      >
        {
          data?.map((serv)=>(
            <Grid xs={10} sm={5} md={1.5} key={serv.id} >                
              <Card  elevation={6}className={styles.cards}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={serv.url}
                  alt={serv.nombre}
                  />
                <CardContent>
                  <Typography className={styles.nameCard} >
                    {serv.nombre}
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