import React, { useCallback } from "react";
import { NextPage } from "next";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Box, Paper, Typography, Link, Button, TextField } from "@mui/material";
import PasswordField from "../../components/userRegister/PasswordField";
import { validationSchema } from "../../components/userRegister/userSchema.form";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import styles from "../../components/login/login.module.css";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      user: {
        email: "",
        password: "",
      },
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleRegisterLinkClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/registro");
  }, [router]);
  
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("user.email", e.target.value);
  }, [formik]);
  
  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("user.password", e.target.value);
  }, [formik]);

  return (
    <Box className={styles.root}>
      <Typography
        variant="h3"
        color="primary"
        fontWeight={700}
        sx={{ mb: "5px" }}
      >
        inicia sesión
      </Typography>
      <Paper elevation={8} className={styles.paper}>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.user.email}
            onChange={handleEmailChange}
            error={
              formik.touched.user?.email && Boolean(formik.errors.user?.email)
            }
            helperText={formik.touched.user?.email && formik.errors.user?.email}
          />
          <PasswordField
            label="Contraseña"
            name="password"
            value={formik.values.user.password}
            onChange={handlePasswordChange}
            error={
              formik.touched.user?.password &&
              Boolean(formik.errors.user?.password)
            }
            helperText={
              formik.touched.user?.password && formik.errors.user?.password
                ? formik.errors.user?.password
                : ""
            }
          />
          <Box sx={{ textAlign: "left" }}>
            ¿Olvidaste tu contraseña?{" "}
            <Link href="#" underline="hover">
              Recupérala
            </Link>
          </Box>
          <Button
            type="submit"
            variant="contained"
            className={styles.submitButton}
          >
            iniciar sesión
          </Button>
          <Box sx={{ textAlign: "right" }}>
            ¿Aún no tienes cuenta?{" "}
            <Link href="#" underline="hover" onClick={handleRegisterLinkClick}>
              Regístrate
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

(LoginPage as any).Layout = LayoutAuth;

export default LoginPage;
