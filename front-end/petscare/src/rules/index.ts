import * as yup from "yup";

export const schemaStepperData = yup
  .object({

    serviceData: yup
      .number()
      .required(),  
    professionalData: yup
      .number()
      .required(),
    dateData: yup
    .date().default(() => new Date())
  })
  .required();


  export const schemaFormRegister = yup
  .object({
    firstName: yup
    .string()
    .required("Nombre es un campo requerido")
    .min(3, "El nombre debe tener un mínimo de 3 caracteres")
    .max(20, "El nombre debe tener un máximo de 20 caracteres"),
    lastName: yup
    .string()
    .required("Apellido es un campo requerido")
    .min(3, "El apellido debe tener un mínimo de 3 caracteres")
    .max(10, "El apellido debe tener un máximo de 10 caracteres"),
    address: yup
    .string()
    .required("Dirección es un campo requerido")
    .min(3, "La dirección debe tener un mínimo de 3 caracteres"),
    phone: yup
    .number()
    .required("Teléfono es un campo requerido")
    .min(3, "El teléfono debe tener un mínimo de 3 caracteres"),
    email: yup
    .string()
    .required("Email es un campo requerido")
    .email("El correo no es válido")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
    password: yup
    .string()
    .required("La contraseña es un campo requerido")
    .min(8, "La contraseña debe tener mínimo 8 dígitos")  
      })
  .required();

  
  export const validationSchema = yup
  .object({
    name: yup
    .string()
    .required("Nombre es un campo requerido")
    .min(3, "El nombre debe tener un mínimo de 3 caracteres")
    .max(20, "El nombre debe tener un máximo de 20 caracteres"),
    race: yup
    .string()
    .required("La raza es un campo requerido"), 
      })
  .required();


