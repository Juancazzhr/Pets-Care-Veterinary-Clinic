import { NextPage } from "next";
import { useFormik } from "formik";
import PasswordField from "../../components/userRegister/PasswordField";
import { validationSchema } from "../../components/userRegister/userSchema.form";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import { useRouter } from "next/router";
import styles from "../../components/login/login.module.css";
import { Button, TextField, Typography, Box, Link, Paper } from "@mui/material";

const LoginPage: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      user: {
        email: "",
        password: "",
      },
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
            onChange={(event) =>
              formik.setFieldValue("user.email", event.target.value)
            }
            error={
              formik.touched.user?.email && Boolean(formik.errors.user?.email)
            }
            helperText={formik.touched.user?.email && formik.errors.user?.email}
          />
          <PasswordField
            label="Contraseña"
            name="password"
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
          <Box className={styles.boxTextLink} sx={{ textAlign: "left" }}>
            ¿Olvidaste tu contraseña?{" "}
            <Link href="#" underline="hover" sx={{}}>
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
          <Box className={styles.boxTextLink} sx={{ textAlign: "right" }}>
            ¿Aún no tenés cuenta?{" "}
            <Link href="#" underline="hover" onClick={handleRegisterLinkClick}>
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
