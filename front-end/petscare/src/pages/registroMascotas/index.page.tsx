import React from "react";
import { NextPage } from "next";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import styles from "../../components/userRegister/registro.module.css";
import { Box, Grid, Typography, Paper } from "@mui/material";
import PetRegisterForm from "../../components/petRegister/petRegisterForm";
import Head from "next/head";


const RegisterPets: NextPage = () => {


  return (
    <>
    <Head>
        <title>Pets Care: turnos</title>
        <meta name="description" content="Turnos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Box className={styles.root}>
      <Typography
        color="primary"
        variant="h4"
        textAlign={"center"}
        fontWeight={700}
        sx={{ mb: "15px" }}
      >
        registrá tu mascota
      </Typography>
      <Paper elevation={8} className={styles.paper}>
        <PetRegisterForm />
      </Paper>
    </Box>
    </>
  );
};

(RegisterPets as any).Layout = LayoutAuth;

export default RegisterPets;


