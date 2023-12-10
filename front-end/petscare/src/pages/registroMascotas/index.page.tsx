import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import styles from "../../components/userRegister/registro.module.css";
import { Box, Grid, Typography, Paper } from "@mui/material";
import PetRegisterForm from "../../components/petRegister/petRegisterForm";
import { Pet } from "@/interfaces";


interface Props {  
  pet: Pet
}

const RegisterPets: NextPage = () => {
  
  return (
    <Box className={styles.root}>
      <Typography
        color="primary"
        variant="h3"
        textAlign={"center"}
        fontWeight={700}
        sx={{ mb: "15px" }}
      >
        registra tu mascota
      </Typography>
      <Paper elevation={8} className={styles.paper}>
          <Grid container spacing={2}>
            <PetRegisterForm  />
          </Grid>
          {/* <Box className={styles.addPets}>
            <AddCircleIcon color="primary" />
            <Typography color="primary" ml="10px" variant="body1">
              AGREGAR MASCOTA
            </Typography>
          </Box> */}                    
      </Paper>
    </Box>
  );
};

(RegisterPets as any).Layout = LayoutAuth;

export default RegisterPets;


