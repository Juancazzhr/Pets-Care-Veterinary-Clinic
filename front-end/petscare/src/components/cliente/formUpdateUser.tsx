import { User, UserAuth0 } from "@/interfaces";
import { Box, Button, TextField } from "@mui/material";
import { FC, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputController from "../userRegister/inputController";
import styles from "../../components/cliente/client.module.css"
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaFormRegister } from "../../rules";
import { useAuth0 } from "@auth0/auth0-react";
import { updateUser } from "../../services/userService";
import { useRouter } from "next/router";
import ReusableModal from "../reusableModal/modal";


const FormUpdateUser: FC = () => {

  const { user} = useAuth0()
  const [userID, setUserID] = useState()
  const { control, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schemaFormRegister),
    defaultValues: async () => {
      const response: any = await fetch(`${process.env.BASE_URL_BACK}users/mail/${user?.email}`)
      const dataUser = await response.json()
      setUserID(dataUser.id)
      return dataUser
    }
  });

     
  const router = useRouter()
  const [dataForm, setDataForm] = useState<User>()
  const [isDisabled, setIsDisabled] = useState(true)
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
    /*   router.push("/"); */
  }, [router]);


  // UPDATE USER
  const onSubmit: SubmitHandler<any> = (data: any) => {

        setDataForm({
          ...dataForm,
          id: userID,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phone: data.phone,
          email: data.email,
          password: data.password,
          rol:{
            id: 3,
            name: "client",
            description: null
          }
        })
    
        const dataUserUpdated = {
          ...dataForm,
          id: userID,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phone: data.phone,
          email: data.email,
          password: data.password,
          rol:{
            id: 3,
            name: "client",
            description: null
          }
        }
                             
        const response = updateUser(dataUserUpdated)
        response.then((res) => {
                 
          if (res.ok) {
            console.log('se actualizo');
            
            setModalInfo({
              title: "¡Excelente!",
              message: "Tus datos se actualizaron exitosamente.",
              isError: false,
              acceptButtonText: "ok",
            });
            onToggle()
            setIsModalOpen(true);
          };
        })
  }


// TOGGLE DISABLED / ENABLE FIELDS
 const onToggle = ()=>{
  setIsDisabled(!isDisabled)
 }


  return (
    <form >

      <InputController
        name='firstName'
        label='Nombre'
        type='text'
        defaultValue=''
        disabled= {isDisabled}
        control={control}
        error={errors.firstName ? true : false}
        message={errors.firstName?.message as string} />

      <InputController
        name='lastName'
        label='Apellido'
        type='text'
        defaultValue=''
        disabled= {isDisabled}
        control={control}
        error={errors.lastName ? true : false}
        message={errors.lastName?.message as string} />

      <InputController
        name='address'
        label='Dirección'
        type='text'
        defaultValue=''
        disabled= {isDisabled}
        control={control}
        error={errors.address ? true : false}
        message={errors.address?.message as string} />

      <InputController
        name='phone'
        label='Teléfono'
        type='text'
        defaultValue=''
        disabled= {isDisabled}
        control={control}
        error={errors.phone ? true : false}
        message={errors.phone?.message as string} />

      <InputController
        name='email'
        label='Correo electrónico'
        type='text'
        defaultValue=''
        disabled= {isDisabled}
        control={control}
        error={errors.email ? true : false}
        message={errors.email?.message as string} />

     
      <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-38px'}>
        {isDisabled ? 
        <Button onClick={onToggle} variant="contained" className={styles.buttonSubmit}>Editar datos</Button>
        :
        <Button onClick={handleSubmit(onSubmit)} variant="contained" className={styles.buttonSubmit}>Guardar cambios</Button>
      }
        
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

export default FormUpdateUser
