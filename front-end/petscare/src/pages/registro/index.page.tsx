import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import { useRouter } from "next/router";
import styles from "../../components/userRegister/registro.module.css";
import { Button, Box, Grid, Typography, Paper, Link } from "@mui/material";
import UserFields from "../../components/userRegister/userFields";
import { FormValues, useRegisterForm,} from "../../components/userRegister/userRegisterForm";
import ReusableModal from "../../components/reusableModal/modal";

const Register: NextPage = () => {
  const formik = useRegisterForm();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    message: "",
    isError: false,
    acceptButtonText: "",
  });

  const handleRegisterLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      router.push("/login");
    },
    [router]
  );

  // Definición de la función simulateApiCall, esto cambiaria por la llamada a la API
  const simulateApiCall = useCallback((values: FormValues) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.keys(values).length > 0) {
          resolve("Success");
        } else {
          reject("Error");
        }
      }, 500);
    });
  }, []);

  const handleFormSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      formik.setTouched({
        user: {
          firstName: true,
          lastName: true,
          address: true,
          phone: true,
          email: true,
          password: true,
          confirmPassword: true,
        },
      });

      // Realiza la validación del formulario
      const formErrors = await formik.validateForm(formik.values);

      if (formik.isValid && Object.keys(formErrors).length === 0) {
        simulateApiCall(formik.values)
          .then(() => {
            setModalInfo({
              title: "¡Bienvenid@!",
              message: "Tu cuenta ha sido creada con éxito.",
              isError: false,
              acceptButtonText: "registra tu mascota",
            });
            setIsModalOpen(true);
          })
          .catch((error) => {
            // Manejar errores de la llamada de la API
            console.log(error);
            setModalInfo({
              title: "",
              message: "",
              isError: true,
              acceptButtonText: "",
            });
            setIsModalOpen(true);
          });
      } else {
        console.log("error", formErrors);
      }
    },
    [formik, simulateApiCall]
  );

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const redirectToPetRegistration = useCallback(() => {
    setIsModalOpen(false);
    router.push("/registroMascotas");
  }, [router]);

  return (
    <Box className={styles.root}>
      <Typography
        color="primary"
        variant="h3"
        textAlign={"center"}
        fontWeight={700}
        sx={{ mb: "15px" }}
      >
        registrate
      </Typography>
      <Paper elevation={8} className={styles.paper}>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <UserFields formik={formik} />
          </Grid>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            className={styles.registerButton}
          >
            Crear cuenta
          </Button>
          <ReusableModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onAccept={redirectToPetRegistration}
            title={modalInfo.title}
            message={modalInfo.message}
            acceptButtonText={modalInfo.acceptButtonText}
          />
          <Box className={styles.boxTextLink}>
            ¿Ya tenes cuenta?{" "}
            <Link href="#" underline="hover" onClick={handleRegisterLinkClick}>
              <span style={{ color: "#007FFF" }}>Inicia sesión</span>
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

(Register as any).Layout = LayoutAuth;

export default Register;
