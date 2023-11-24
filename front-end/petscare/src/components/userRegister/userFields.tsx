import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";
import { FormikProps } from "formik";
//import { FormValues } from "./userRegisterForm";
import PasswordField from "./PasswordField";
import { User } from "@/interfaces";

interface Props {  
  user: User
}

const UserFields = ({ formik }: { formik: FormikProps<Props> }) => {

  const [confirPass, setConfirPass]= useState("");
  let msg = "";

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="firstName"
          label="Nombre"
          value={formik.values?.firstName}
          onChange={(event: { target: { value: string; }; }) =>
            formik.setFieldValue("firstName", event.target.value)
          }
          error={
            formik.touched?.firstName &&
            Boolean(formik.errors?.firstName)
          }
          helperText={
            formik.touched?.firstName && formik.errors?.firstName
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Apellido"
          value={formik.values?.lastName}
          onChange={(event : { target: { value: string; }; }) =>
            formik.setFieldValue("lastName", event.target.value)
          }
          error={
            formik.touched?.lastName &&
            Boolean(formik.errors?.lastName)
          }
          helperText={
            formik.touched?.lastName && formik.errors?.lastName
          }
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          fullWidth
          id="address"
          name="address"
          label="Dirección"
          value={formik.values?.address}
          onChange={(event : { target: { value: string; }; }) =>
            formik.setFieldValue("address", event.target.value)
          }
          error={
            formik.touched?.address && Boolean(formik.errors?.address)
          }
          helperText={
            formik.touched?.address && formik.errors?.address
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Teléfono"
          value={formik.values?.phone}
          onChange={(event : { target: { value: number; }; }) =>
            formik.setFieldValue("phone", event.target.value)
          }
          error={
            formik.touched?.phone && Boolean(formik.errors?.phone)
          }
          helperText={formik.touched?.phone && formik.errors?.phone}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values?.email}
          onChange={(event: { target: { value: string; }; }) =>
            formik.setFieldValue("email", event.target.value)
          }
          error={
            formik.touched?.email && Boolean(formik.errors?.email)
          }
          helperText={formik.touched?.email && formik.errors?.email}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <PasswordField
          name="password"
          label="Contraseña"
          value={formik.values?.password}
          onChange={(event) =>
            formik.setFieldValue("password", event.target.value)
          }
          error={
            formik.touched?.password &&
            Boolean(formik.errors?.password)
          }
          helperText={
            formik.touched?.password && formik.errors?.password
              ? formik.errors?.password
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <PasswordField
          label="Confirmar contraseña"
          name="confirmPassword"
          value={formik.values.passw?.confirmPassword}
          onChange={(event) =>
            //setConfirPass(event.target.value)
            formik.setFieldValue("passw.confirmPassword", event.target.value)
          }
          error={
            
            formik.touched?.confirmPassword &&
            confirPass === formik.values?.password &&
            Boolean(formik.errors?.password)
          }
          helperText={
            formik.touched?.confirmPassword &&
            formik.errors?.confirmPassword
              ? formik.errors?.cconfirmPassword
              : ""
          }
        />
      </Grid>
    </>
  );
};

export default UserFields;
