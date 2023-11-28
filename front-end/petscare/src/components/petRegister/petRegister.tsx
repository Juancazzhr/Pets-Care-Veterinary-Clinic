import React, { useCallback, useState } from "react";
import {
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  Stack
} from "@mui/material";
import { Field, FormikProps } from "formik";
import styles from '../userRegister/registro.module.css'
import { Pet } from "@/interfaces";

interface Props {  
  pet: Pet
}

const PetFields = ({ formik }: { formik: FormikProps<Pet> }) => {
  

  return (
    <>
      <Grid item xs={12} sm={12}>
        <Typography color="primary" variant="h6">
          Mascota 1
        </Typography>
      </Grid>
      <Stack className={styles.bgBoxMascota}>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Nombre"
              value={formik.values?.name}
              onChange={(event: { target: { value: string; }; }) =>
                formik.setFieldValue("name", event.target.value)
              }
              error={
                formik.touched?.name && Boolean(formik.errors?.name)
              }
              helperText={formik.touched?.name && formik.errors?.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              error={formik.touched?.petType && Boolean(formik.errors?.petType)}
            >
              <InputLabel id="mascota-tipo-label">Seleccioná Tipo</InputLabel>
              <Select
                labelId="mascota-tipo-label"
                id="petType"
                name="petType"
                value={formik.values?.petType}
                onChange={(event: { target: { value : {}; }}) =>{
                formik.setFieldValue("petType", event.target.value)
                  
                }}
              >
                <MenuItem value="Felino">Felino</MenuItem>
                <MenuItem value="Canino">Canino</MenuItem>
                <MenuItem value="Aves">Aves</MenuItem>
                <MenuItem value="Equino">Equino</MenuItem>
              </Select>
              {/* <FormHelperText>
                {formik.touched?.petType && formik.errors?.petType}
              </FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="race"
              name="race"
              label="Raza"
              value={formik.values?.race}
              onChange={(event: { target: { value: string; }; }) =>
                formik.setFieldValue("race", event.target?.value)
              }
              error={formik.touched?.race && Boolean(formik.errors?.race)}
              helperText={formik.touched?.race && formik.errors?.race}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              error={formik.touched?.size && Boolean(formik.errors?.size)}
            >
              <InputLabel id="mascota-tamano-label">Seleccioná Tamaño</InputLabel>
              <Select
                labelId="mascota-tamano-label"
                id="size"
                name="size"
                value={formik.values?.size}
                onChange={(event: { target: { value: string; }; }) =>
                  formik.setFieldValue("size", event.target.value)
                }
              >
                <MenuItem value="pequeño">pequeño</MenuItem>
                <MenuItem value="mediano">mediano</MenuItem>
                <MenuItem value="grande">grande</MenuItem>
              </Select>
              <FormHelperText>
                {formik.touched?.size && formik.errors?.size}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default PetFields;