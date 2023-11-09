import React from "react";
import { NextPage } from "next";
import { useFormik } from "formik";
import { validationSchema } from "../../components/login_register/schema.form";
import PasswordField from "../../components/login_register/PasswordField";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import { useRouter } from "next/router";
import styles from "./registro.module.css";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Box,
  Grid,
  TextField,
  Typography,
  Paper,
  Link,
} from "@mui/material";

const Register: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      direccion: "",
      telefono: "",
      email: "",
      contrasena: "",
      confirmarContrasena: "",
      mascotaNombre: "",
      mascotaTipo: "",
      mascotaRaza: "",
      mascotaTamano: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const router = useRouter();

  const handleRegisterLinkClick = (event: React.MouseEvent) => {
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
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="nombre"
                name="nombre"
                label="Nombre"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                helperText={formik.touched.nombre && formik.errors.nombre}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="apellido"
                name="apellido"
                label="Apellido"
                value={formik.values.apellido}
                onChange={formik.handleChange}
                error={
                  formik.touched.apellido && Boolean(formik.errors.apellido)
                }
                helperText={formik.touched.apellido && formik.errors.apellido}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                required
                id="Direccion"
                name="direccion"
                label="Dirección"
                value={formik.values.direccion}
                onChange={formik.handleChange}
                error={
                  formik.touched.direccion && Boolean(formik.errors.direccion)
                }
                helperText={formik.touched.direccion && formik.errors.direccion}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="telefono"
                name="telefono"
                label="Teléfono"
                value={formik.values.telefono}
                onChange={formik.handleChange}
                error={
                  formik.touched.telefono && Boolean(formik.errors.telefono)
                }
                helperText={formik.touched.telefono && formik.errors.telefono}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PasswordField
                required
                label="Contraseña"
                name="contrasena"
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <PasswordField
                required
                label="Confirmar contraseña"
                name="confirmarContrasena"
                value={formik.values.confirmarContrasena}
                handleChange={formik.handleChange}
                error={
                  formik.touched.confirmarContrasena &&
                  Boolean(formik.errors.confirmarContrasena)
                }
                helperText={
                  formik.touched.confirmarContrasena &&
                  formik.errors.confirmarContrasena
                    ? formik.errors.confirmarContrasena
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography color="primary" variant="h6">
                Tu Mascota
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="mascotaNombre"
                name="mascotaNombre"
                label="Nombre"
                value={formik.values.mascotaNombre}
                onChange={formik.handleChange}
                error={
                  formik.touched.mascotaNombre &&
                  Boolean(formik.errors.mascotaNombre)
                }
                helperText={
                  formik.touched.mascotaNombre && formik.errors.mascotaNombre
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                required
                fullWidth
                error={
                  formik.touched.mascotaTipo &&
                  Boolean(formik.errors.mascotaTipo)
                }
              >
                <InputLabel id="mascota-tipo-label">Seleccioná Tipo</InputLabel>
                <Select
                  labelId="mascota-tipo-label"
                  id="mascotaTipo"
                  name="mascotaTipo"
                  value={formik.values.mascotaTipo}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="tipo1">Perro</MenuItem>
                  <MenuItem value="tipo2">Gato</MenuItem>
                  <MenuItem value="tipo3">Conejo</MenuItem>
                  <MenuItem value="tipo4">Otro</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.mascotaTipo && formik.errors.mascotaTipo}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="mascotaRaza"
                name="mascotaRaza"
                label="Raza"
                value={formik.values.mascotaRaza}
                onChange={formik.handleChange}
                error={
                  formik.touched.mascotaRaza &&
                  Boolean(formik.errors.mascotaRaza)
                }
                helperText={
                  formik.touched.mascotaRaza && formik.errors.mascotaRaza
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                error={
                  formik.touched.mascotaTamano &&
                  Boolean(formik.errors.mascotaTamano)
                }
              >
                <InputLabel id="mascota-tamano-label">
                  Seleccioná Tamaño
                </InputLabel>
                <Select
                  labelId="mascota-tamano-label"
                  id="mascota-tamano-label"
                  name="mascotaTamano"
                  value={formik.values.mascotaTamano}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="tipo1">Pequeño</MenuItem>
                  <MenuItem value="tipo2">Mediano</MenuItem>
                  <MenuItem value="tipo3">Grande</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.mascotaTamano && formik.errors.mascotaTamano}
                </FormHelperText>
              </FormControl>
            </Grid>
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
