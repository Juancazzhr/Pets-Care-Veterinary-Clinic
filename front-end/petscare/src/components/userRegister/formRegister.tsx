import { User, UserAuth0 } from "@/interfaces";
import { Box, Button, TextField } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputController from "./inputController";
import styles from "../../components/cliente/client.module.css"
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaFormRegister } from "../../rules";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../../services/userService";
import { useRouter } from "next/router";
import ReusableModal from "../reusableModal/modal";


const defaultValues = {
  firstName: '',
  lastName: '',
  address: '',
  phone: 0,
  email: '',
  password: '',
  rol: {
    id: 3,
    name: "client",
    description: null
  }
}

const FormRegister: FC = () => {

  const { control, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schemaFormRegister)
  });

  const { user } = useAuth0()
  const router = useRouter()
  const [dataForm, setDataForm] = useState<User>(defaultValues)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    message: "",
    isError: false,
    acceptButtonText: "",
  });
 
// MODAL 
  const handleModalClose = useCallback(() => {
  setIsModalOpen(false);
   }, []);
    
 const redirectToPetRegistration = useCallback(() => {
   setIsModalOpen(false);
   router.push("/registroMascotas");
    }, [router]);

// POST USER
  const onSubmit: SubmitHandler<any> = (data: any) => {
    setDataForm({
      ...dataForm,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      phone: data.phone,
      email: data.email,
      password: data.password
    })

    const dataRegister = {
      ...dataForm,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      phone: data.phone,
      email: data.email,
      password: data.password
    }

        
    const response = postUser(dataRegister)
    response.then((res) => {
      if (res.ok) {
        setModalInfo({
          title: "¡Bienvenid@!",
          message: "Tu cuenta ha sido creada con éxito.",
          isError: false,
          acceptButtonText: "registra tu mascota",
        });
        setIsModalOpen(true);
      };
    })
  }

  useEffect(() => {
    if (user) {
      setDataForm({ ...dataForm, email: user.email })
    }
  }, [user])

  console.log({ user });
  console.log({ dataForm });


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <InputController
        name='firstName'
        label='Nombre'
        type='text'
        defaultValue={dataForm.firstName}
        disabled= {false}
        control={control}
        error={errors.firstName ? true : false}
        message={errors.firstName?.message as string} />

      <InputController
        name='lastName'
        label='Apellido'
        type='text'
        defaultValue={dataForm.lastName}
        disabled= {false}
        control={control}
        error={errors.lastName ? true : false}
        message={errors.lastName?.message as string} />

      <InputController
        name='address'
        label='Dirección'
        type='text'
        defaultValue={dataForm.address}
        disabled= {false}
        control={control}
        error={errors.address ? true : false}
        message={errors.address?.message as string} />

      <InputController
        name='phone'
        label='Teléfono'
        type='text'
        defaultValue={dataForm.phone}
        disabled= {false}
        control={control}
        error={errors.phone ? true : false}
        message={errors.phone?.message as string} />

      <InputController
        name='email'
        label='Correo electrónico'
        type='text'
        defaultValue={dataForm.email}
        disabled= {false}
        control={control}
        error={errors.email ? true : false}
        message={errors.email?.message as string} />

      <InputController
        name='password'
        label='Contraseña'
        type='password'
        defaultValue={dataForm.password}
        disabled= {false}
        control={control}
        error={errors.password ? true : false}
        message={errors.password?.message as string} />

      <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-38px'}>
        <Button type='submit' variant="contained" className={styles.buttonSubmit}>Guardar</Button>
      </Box>

      <ReusableModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onAccept={redirectToPetRegistration}
        title={modalInfo.title}
        message={modalInfo.message}
        acceptButtonText={modalInfo.acceptButtonText}
      />
    </form>
  )

}

export default FormRegister