import React, { useState } from "react";
import TitleSection from "../../components/utils/TitleSection"
import { PetConsults, PetUser, Service, User } from "@/interfaces"
import { Box, Container, Paper, TextField } from "@mui/material"
import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Typography from '@mui/material/Typography';
import { FormCliente } from "../../components/cliente/formCliente";
import { getUserByEmail, getUserById } from "../../services/stepperService";
import styles from "../../components/cliente/client.module.css"
import AccordionPet from "../../components/cliente/AccordionPet";
import { getPetsConsults } from "../../services/clientService";

interface Props {
  user: User
  petsConsults: PetConsults[]
}


const ClientPage: NextPage<Props> = ({ user, petsConsults }) => {

  return (
    <>
      <Head>0
        <title>Pets Care: clientes</title>
        <meta name="description" content="clientes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth={'xl'} >

        <TitleSection title='Mi cuenta' colorLine='64C9A7' colorText='573469' />
        <Paper className={styles.paper}>
          <Box className={styles.personalData}>
            <Typography className={styles.subtitle}>Datos Personales</Typography>
            {/* <FormCliente user={user} /> */}
          </Box>
          <Typography className={styles.subtitle}>Mis mascotas</Typography>

          {petsConsults.map((pet) =>
            <AccordionPet key={pet.pet.id} data={pet} />
          )
          }
        </Paper>
      </Container>
    </>
  )


}


export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  /*  let email= 'marina@gmail.com'
   if (typeof window !== "undefined") {
     email = JSON.parse(localStorage.getItem("mailUser"))
   }
   console.log(email);
   const user = await getUserByEmail(email)
  */

  const petsConsults = await getPetsConsults()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate'
  )


  return {
    props: {
      /* user */
      petsConsults
    }
  }
}



export default ClientPage

