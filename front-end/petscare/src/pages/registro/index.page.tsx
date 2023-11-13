import React from "react";
import { NextPage } from "next";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import { useRouter } from "next/router";
import styles from "../../components/register/registro.module.css";
import { Button, Box, Grid, Typography, Paper, Link } from "@mui/material";
import UserFields from "../../components/register/userFields";
import PetFields from '../../components/register/petFields'
import { useRegisterForm } from '../../components/register/useRegisterForm'

const Register: NextPage = () => {
  const formik = useRegisterForm();
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
        sx={{ padding: "5px" }}
      >
        Regístrate
      </Typography>
      <Paper elevation={8} className={styles.paper}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <UserFields formik={formik} />
            <PetFields formik={formik} />
          </Grid>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            className={styles.registerButton}
          >
            Crear cuenta
          </Button>
          <Box sx={{ width: "100%", textAlign: "right" }}>
            <Link
              href="#"
              underline="hover"
              sx={{ display: "block", marginTop: 2 }}
              onClick={handleRegisterLinkClick}
            >
              ¿Ya tenes cuenta?{" "}
              <span style={{ color: "#007FFF" }}> Inicia sesión</span>
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

(Register as any).Layout = LayoutAuth;

export default Register;
