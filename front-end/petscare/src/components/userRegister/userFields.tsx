// import React, { useState } from "react";
// import { TextField, Grid, styled } from "@mui/material";
// import { FormikProps } from "formik";
// import PasswordField from "./PasswordField";
// import { User } from "../../interfaces";

// interface Props {  
//   user: User
// }

// const UserFields = ({ formik }: { formik: FormikProps<User> }) => {

//   const [confirPass, setConfirPass]= useState("");
//   let msg = "";

//   return (
//     <>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           fullWidth
//           name="firstName"
//           label="Nombre"
//           value={formik.values?.firstName}
//           onChange={(event: { target: { value: string; }; }) =>
//             formik.setFieldValue("firstName", event.target.value)
//           }
//           helperText={
//             formik.errors?.firstName
//           }
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           fullWidth
//           id="lastName"
//           name="lastName"
//           label="Apellido"
//           value={formik.values?.lastName}
//           onChange={(event : { target: { value: string; }; }) =>
//             formik.setFieldValue("lastName", event.target.value)
//           }        
//           helperText={
//             formik.errors?.lastName
//           }
//         />
//       </Grid>
//       <Grid item xs={12} sm={12}>
//         <TextField
//           fullWidth
//           id="address"
//           name="address"
//           label="Dirección"
//           value={formik.values?.address}
//           onChange={(event : { target: { value: string; }; }) =>
//             formik.setFieldValue("address", event.target.value)
//           }
//           helperText={
//             formik.errors?.address
//           }
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           fullWidth
//           id="phone"
//           name="phone"
//           label="Teléfono"
//           value={formik.values?.phone}
//           onChange={(event : { target: { value: number; }; }) =>
//             formik.setFieldValue("phone", event.target.value)
//           }
//           helperText={formik.errors?.phone}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           fullWidth
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values?.email}
//           onChange={(event: { target: { value: string; }; }) =>
//             formik.setFieldValue("email", event.target.value)
//           }
//           helperText={formik.errors?.email}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <PasswordField
//           name="password"
//           label="Contraseña"
//           value={formik.values?.password}
//           onChange={(event) =>
//             formik.setFieldValue("password", event.target.value)
//           }
//           helperText={formik.errors?.password}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <PasswordField
//           label="Confirmar contraseña"
//           name="confirmPassword"
//           value={confirPass}
//           onChange={(event) =>
//             setConfirPass(event.target.value)
//           }
          
//           helperText={
//             confirPass != "" && formik.values?.password != confirPass
//               ? "Validar confirmación de la contraseña"
//               : ""
//           }
//         />
//       </Grid>
//     </>
//   );
// };

// export default UserFields;
