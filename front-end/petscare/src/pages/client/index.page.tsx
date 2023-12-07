import React, { useState } from "react";
import TitleSection from "../../components/utils/TitleSection"
import { PetConsults, PetUser, Service, User } from "@/interfaces"
import { Box, Container, Paper, TextField } from "@mui/material"
import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Typography from '@mui/material/Typography';
import { FormCliente } from "../../components/cliente/formCliente";
import { getUserByEmail, getUserById } from "../../services/userService";
import styles from "../../components/cliente/client.module.css"
import AccordionPet from "../../components/cliente/AccordionPet";
import { getPetsConsults } from "../../services/clientService";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  userData: User
  petsConsults: PetConsults[]
}


const ClientPage: NextPage<Props> = ({ userData, petsConsults }) => {

  const { user } = useAuth0()
console.log(user);

  return (
    <>
      <Head>0
        <title>Pets Care: clientes</title>
        <meta name="description" content="clientes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth={'xl'} >
      <Box pt='80px'>
        <TitleSection title='Mi cuenta' colorLine='64C9A7' colorText='573469' />
        <Paper className={styles.paper}>
          <Box className={styles.personalData}>
            <Typography className={styles.subtitle}>Datos Personales</Typography>
            <FormCliente userData={userData} />
          </Box>
          <Typography className={styles.subtitle}>Mis mascotas</Typography>

          {petsConsults.map((pet) =>
            <AccordionPet key={pet.pet.id} data={pet} />
          )
          }
        </Paper>
        </Box>
      </Container>
    </>
  )


}


export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  //let email= 'marina@gmail.com'
  //  if (typeof window !== "undefined") {
  //    email = JSON.parse(localStorage.getItem("mailUser"))
  //  }
   //console.log(email);
   //const userData = await getUserByEmail()
  

  const petsConsults = await getPetsConsults()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate'
  )


  return {
    props: {
      //userData,
      petsConsults
    }
  }
}



export default ClientPage

