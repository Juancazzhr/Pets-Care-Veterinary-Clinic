import * as yup from "yup";

export const validationSchema = yup.object({
  user: yup.object({
    firstName: yup.string().required("El nombre es obligatorio"),
    lastName: yup.string().required("El apellido es obligatorio"),
    address: yup.string().required("La dirección es obligatoria"),
    phone: yup.string().required("El teléfono es obligatorio"),
    email: yup
      .string()
      .email("El email no es válido")
      .required("El email es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("contrasena")], "Las contraseñas deben coincidir")
      .required("La confirmación de contraseña es obligatoria"),
  }),
  pet: yup.object({
    petName: yup.string().required("El nombre de la mascota es requerido"),
    type: yup.string().required("El tipo es requerido"),
    size: yup.string().required("El tamaño es requerido"),
    race: yup.string().required("La raza es requerida"),
  }),
});
