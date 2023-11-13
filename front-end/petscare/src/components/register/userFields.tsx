import React from "react";
import { TextField, Grid } from "@mui/material";
import { FormikProps } from "formik";
import { FormValues } from "./useRegisterForm";
import PasswordField from "./PasswordField";

const UserFields = ({ formik }: { formik: FormikProps<FormValues> }) => {
  return (
    <>
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
            formik.touched.user?.firstName && formik.errors.user?.firstName
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
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
          id="address"
          name="address"
          label="Dirección"
          value={formik.values.user.address}
          onChange={(event) =>
            formik.setFieldValue("user.address", event.target.value)
          }
          error={
            formik.touched.user?.address && Boolean(formik.errors.user?.address)
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
            formik.touched.user?.phone && Boolean(formik.errors.user?.phone)
          }
          helperText={formik.touched.user?.phone && formik.errors.user?.phone}
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
            formik.touched.user?.email && Boolean(formik.errors.user?.email)
          }
          helperText={formik.touched.user?.email && formik.errors.user?.email}
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
    </>
  );
};

export default UserFields;
