import * as yup from 'yup';

export const validationSchema = yup.object({
  nombre: yup.string().required('El nombre es obligatorio'),
  apellido: yup.string().required('El apellido es obligatorio'),
  direccion: yup.string().required('La dirección es obligatoria'),
  telefono: yup.string().required('El teléfono es obligatorio'),
  email: yup.string().email('El email no es válido').required('El email es obligatorio'),
  contrasena: yup.string().required('La contraseña es obligatoria'),
  confirmarContrasena: yup.string()
    .oneOf([yup.ref('contrasena')], 'Las contraseñas deben coincidir')
    .required('La confirmación de contraseña es obligatoria'),
  mascotaNombre: yup.string().required('El nombre de la mascota es requerido'),
  mascotaTipo: yup.string().required('El tipo es requerido'),
  mascotaRaza: yup.string().required('La raza es requerida'),
  mascotaTamano: yup.string().required('El tamaño es requerido'),
})
    