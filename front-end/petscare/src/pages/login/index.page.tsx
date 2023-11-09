import { NextPage } from "next";
import { useFormik } from "formik";
import PasswordField from "../../components/login_register/PasswordField";
import { validationSchema } from "../../components/login_register/schema.form";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import { useRouter } from "next/router";
import styles from "../../components/login_register/login.module.css";
import { Button, TextField, Typography, Box, Link, Paper } from "@mui/material";




const LoginPage: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      contrasena: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const router = useRouter();

  const handleRegisterLinkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push("/registro");
  };

  return (
    <Box className={styles.root}>
      <Typography variant="h3" color="primary">
        Inicia sesión
      </Typography>
      <Paper elevation={8} className={styles.paper}>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <PasswordField
            label="Contraseña"
            name="contrasena"
            required
            value={formik.values.contrasena}
            handleChange={formik.handleChange}
            error={
              formik.touched.contrasena && Boolean(formik.errors.contrasena)
            }
            helperText={
              formik.touched.contrasena && formik.errors.contrasena
                ? formik.errors.contrasena
                : ""
            }
          />
          <Box sx={{ width: "100%", textAlign: "left" }}>
            <Link
              href="#"
              underline="hover"
              sx={{ display: "block", marginTop: 2 }}
            >
              ¿Olvidaste tu contraseña?{" "}
              <span style={{ color: "#007FFF" }}> Recuperala</span>
            </Link>
          </Box>
          <Button
            type="submit"
            variant="contained"
            className={styles.submitButton}
          >
            iniciar sesión
          </Button>
          <Box sx={{ width: "100%", textAlign: "right" }}>
            <Link
              href="#"
              underline="hover"
              sx={{ display: "block", marginTop: 2 }}
              onClick={handleRegisterLinkClick}
            >
              ¿Aún no tenés cuenta?{" "}
              <span style={{ color: "#007FFF" }}> Registrate</span>
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

(LoginPage as any).Layout = LayoutAuth;

export default LoginPage;
