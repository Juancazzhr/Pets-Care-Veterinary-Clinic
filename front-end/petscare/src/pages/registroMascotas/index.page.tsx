import React from "react";
import { NextPage } from "next";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import { useRouter } from "next/router";
import styles from "../../components/userRegister/registro.module.css";
import { Button, Box, Grid, Typography, Paper } from "@mui/material";
import PetFields from "../../components/petRegister/petRegister";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { PetRegisterForm } from "../../components/petRegister/petRegisterForm";
import { Pet } from "@/interfaces";


const RegisterPets: NextPage = () => {
  const formik = PetRegisterForm();
  const router = useRouter();

  const handleRegisterLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push("/login");
  };

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
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <PetFields formik={formik} />
          </Grid>
          <Box className={styles.addPets}>
            <AddCircleIcon color="primary" />
            <Typography color="primary" ml="10px" variant="body1">
              AGREGAR MASCOTA
            </Typography>
          </Box>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            className={styles.registerButton}
          >
            registrar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

(RegisterPets as any).Layout = LayoutAuth;

export default RegisterPets;


