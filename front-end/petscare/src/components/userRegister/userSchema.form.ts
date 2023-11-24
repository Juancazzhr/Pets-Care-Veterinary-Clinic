import * as yup from "yup";

export const validationSchema = yup.object({  
    firstName: yup.string().required("El nombre es obligatorio"),
    lastName: yup.string().required("El apellido es obligatorio"),
    address: yup.string().required("La dirección es obligatoria"),
    phone: yup.string().required("El teléfono es obligatorio"),
    email: yup
      .string()
      .email("El email no es válido")
      .required("El email es obligatorio"),
    password: yup.string()
    .required("La contraseña es obligatoria"),
  })
  const passw = yup.object({
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas deben coincidir")
    .required("La confirmación de contraseña es obligatoria"),  

})
