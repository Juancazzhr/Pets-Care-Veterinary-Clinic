import React from "react";
import { NextPage } from "next";
import { useFormik } from "formik";
import { validationSchema } from "../../components/login_register/schema.form";
import PasswordField from "../../components/login_register/PasswordField";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import { useRouter } from "next/router";
import styles from "../../components/login_register/registro.module.css";
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
      user: {
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        rol: {
          id: 3,
          name: "client",
          description: null,
        },
      },
      pet: {
        petName: "",
        type: "",
        size: "",
        race: "",
      },
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

  console.log(formik.errors);
  

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
                name="firstName"
                label="Nombre"
                value={formik.values.user.firstName}
                onChange={(event) =>
                  formik.setFieldValue("user.firstName", event.target.value)
                }
                error={
                  formik.touched.user?.firstName &&
                  Boolean(formik.errors.user?.firstName)
                }
                helperText={
                  formik.touched.user?.firstName &&
                  formik.errors.user?.firstName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                /*  required */
                id="lastName"
                name="lastName"
                label="Apellido"
                value={formik.values.user.lastName}
                onChange={(event) =>
                  formik.setFieldValue("user.lastName", event.target.value)
                }
                error={
                  formik.touched.user?.lastName &&
                  Boolean(formik.errors.user?.lastName)
                }
                helperText={
                  formik.touched.user?.lastName && formik.errors.user?.lastName
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                /* required */
                id="address"
                name="address"
                label="Dirección"
                value={formik.values.user.address}
                onChange={(event) =>
                  formik.setFieldValue("user.address", event.target.value)
                }
                error={
                  formik.touched.user?.address &&
                  Boolean(formik.errors.user?.address)
                }
                helperText={
                  formik.touched.user?.address && formik.errors.user?.address
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Teléfono"
                value={formik.values.user.phone}
                onChange={(event) =>
                  formik.setFieldValue("user.phone", event.target.value)
                }
                error={
                  formik.touched.user?.phone &&
                  Boolean(formik.errors.user?.phone)
                }
                helperText={
                  formik.touched.user?.phone && formik.errors.user?.phone
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.user.email}
                onChange={(event) =>
                  formik.setFieldValue("user.email", event.target.value)
                }
                error={
                  formik.touched.user?.email &&
                  Boolean(formik.errors.user?.email)
                }
                helperText={
                  formik.touched.user?.email && formik.errors.user?.email
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PasswordField
                name="password"
                label="Contraseña"
                value={formik.values.user.password}
                onChange={(event) =>
                  formik.setFieldValue("user.password", event.target.value)
                }
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <PasswordField
                label="Confirmar contraseña"
                name="confirmPassword"
                value={formik.values.user.confirmPassword}
                onChange={(event) =>
                  formik.setFieldValue("user.confirmPassword", event.target.value)
                }
                error={
                  formik.touched.user?.confirmPassword &&
                  Boolean(formik.errors.user?.confirmPassword)
                }
                helperText={
                  formik.touched.user?.confirmPassword &&
                  formik.errors.user?.confirmPassword
                    ? formik.errors.user?.confirmPassword
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
                id="petName"
                name="petName"
                label="Nombre"
                value={formik.values.pet.petName}
                onChange={(event) =>
                  formik.setFieldValue("pet.petName", event.target.value)
                }
                error={
                  formik.touched.pet?.petName &&
                  Boolean(formik.errors.pet?.petName)
                }
                helperText={
                  formik.touched.pet?.petName && formik.errors.pet?.petName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                error={
                  formik.touched.pet?.type && Boolean(formik.errors.pet?.type)
                }
              >
                <InputLabel id="mascota-tipo-label">Seleccioná Tipo</InputLabel>
                <Select
                  labelId="mascota-tipo-label"
                  id="type"
                  name="type"
                  value={formik.values.pet.type}
                  onChange={(event) =>
                    formik.setFieldValue("pet.type", event.target.value)
                  }
                >
                  <MenuItem value="tipo1">perro</MenuItem>
                  <MenuItem value="tipo2">gato</MenuItem>
                  <MenuItem value="tipo3">conejo</MenuItem>
                  <MenuItem value="tipo4">tortuga</MenuItem>
                  <MenuItem value="tipo5">loro</MenuItem>
                  <MenuItem value="tipo6">hámster</MenuItem>
                  <MenuItem value="tipo7">otro</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.pet?.type && formik.errors.pet?.type}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="race"
                name="race"
                label="Raza"
                value={formik.values.pet.race}
                onChange={(event) =>
                  formik.setFieldValue("pet.race", event.target.value)
                }
                error={
                  formik.touched.pet?.race && Boolean(formik.errors.pet?.race)
                }
                helperText={formik.touched.pet?.race && formik.errors.pet?.race}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                error={
                  formik.touched.pet?.size && Boolean(formik.errors.pet?.size)
                }
              >
                <InputLabel id="mascota-tamano-label">
                  Seleccioná Tamaño
                </InputLabel>
                <Select
                  labelId="mascota-tamano-label"
                  id="size"
                  name="size"
                  value={formik.values.pet.size}
                  onChange={(event) =>
                    formik.setFieldValue("pet.size", event.target.value)
                  }
                >
                  <MenuItem value="tipo1">pequeño</MenuItem>
                  <MenuItem value="tipo2">mediano</MenuItem>
                  <MenuItem value="tipo3">grande</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.pet?.size && formik.errors.pet?.size}
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
