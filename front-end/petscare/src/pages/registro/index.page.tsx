import React, { useState } from "react";
import TitleSection from "../../components/utils/TitleSection"
import { Box, Container, Paper, TextField } from "@mui/material"
import {  NextPage } from "next"
import Head from "next/head"
import Typography from '@mui/material/Typography';
import styles from "../../components/cliente/client.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import LayoutRegister from "../../components/layouts/LayoutRegister";
import FormRegister from "../..//components/userRegister/formRegister";


interface Props {
    /* user: UserAuth0 */
  }
  

const RegistroPage: NextPage<Props> = () => {

const {user} = useAuth0()

    return (
        <>
          <Head>0
            <title>Pets Care: registro</title>
            <meta name="description" content="Registro" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Container maxWidth={'xl'} >
          <Box pt='80px'>
            <TitleSection title='Mi cuenta' colorLine='64C9A7' colorText='573469' />
            <Paper className={styles.paper}>
              <Box className={styles.personalData}>
                <Typography className={styles.subtitle}>Completá tus datos Personales</Typography>
                <FormRegister user={user}  />
              </Box>
            </Paper>
            </Box>
          </Container>
        </>
      )
    
    
    }
    
    (RegistroPage as any).Layout = LayoutRegister;




export default RegistroPage