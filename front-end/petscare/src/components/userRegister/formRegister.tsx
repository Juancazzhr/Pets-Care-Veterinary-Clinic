import { User, UserAuth0 } from "@/interfaces";
import { TextField } from "@mui/material";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputController from "./inputController";


const defaultValues = {
  firstName: '',
  lastName: '',
  address: '',
  phone: null,
  email: '',
  password: '',
  rol: {
    id: 3,
    name: "client",
    description: null
  }
}

interface Props{
  user: UserAuth0
}

const FormRegister: FC<Props> = ({user}) => {


  console.log(user?.email);

  const { control, formState: { errors }, handleSubmit } = useForm(/* {
    resolver: yupResolver(schemaRegister)
} */);

  const onSubmit: SubmitHandler<any> = (data) => {

  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <InputController
        name='firstName'
        label='Nombre'
        type='text'
        defaultValue=''
        control={control}
        error={errors.firstname ? true : false}
        message={errors.firstname?.message as string} />

      <InputController
        name='lastName'
        label='Apellido'
        type='text'
        defaultValue=''
        control={control}
        error={errors.lastName ? true : false}
        message={errors.lastName?.message as string} />

      <InputController
        name='address'
        label='Dirección'
        type='text'
        defaultValue=''
        control={control}
        error={errors.address ? true : false}
        message={errors.address?.message as string} />

      <InputController
        name='phone'
        label='Teléfono'
        type='text'
        defaultValue=''
        control={control}
        error={errors.phone ? true : false}
        message={errors.phone?.message as string} />

      <InputController
        name='email'
        label='Correo electrónico'
        type='text'
        defaultValue={user?.email}
        control={control}
        error={errors.email ? true : false}
        message={errors.email?.message as string} />


      <InputController
        name='password'
        label='Contraseña'
        type='password'
        defaultValue=''
        control={control}
        error={errors.password ? true : false}
        message={errors.password?.message as string} />
    </form>
  )

}

export default FormRegister