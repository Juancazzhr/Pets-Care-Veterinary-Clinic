import { Pet, User } from '../../interfaces';
import { FC, useCallback, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, FormHelperText, Grid, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import { getUserByEmail } from "../../services/userService";
import { postPet } from "../../services/petService";
import InputController from "../userRegister/inputController";
import React from 'react';
import { validationSchema } from "../../rules";
import ReusableModal from "../reusableModal/modal";
import styles from '../userRegister/registro.module.css'
import { useRouter } from 'next/router';


const initialValues = {
    name: "",
    size: "",
    clientId: 0,
    petType: {
      id: 0,
      typeName: "",
    },
    race: ""
}

const PetRegisterForm: FC = () => {

  const { control, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const { user } = useAuth0()
  const router = useRouter()
  const [dataForm, setDataForm] = useState<Pet>(initialValues)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [size, setSize] = useState<string>('');
  const [petType, setpetType] = useState<string>('');
  const [modalInfo, setModalInfo] = useState({
    title: "",
    message: "",
    isError: false,
    acceptButtonText: "",
  });

  
  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
   }, []);
    
 const redirectToPetRegistration = useCallback(() => {
   setIsModalOpen(false);
   router.push("/client");
  }, []);

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);

    const dataUser = ()=>{
      if (user?.email === undefined) {
        // Manejar el caso en que no hay email
    } else {
        const dataUser = getUserByEmail(user.email);
        console.log(dataUser);
    }
    }
     /*  getUserByEmail(user?.email)*/
    console.log(dataUser); 

    let tipo = 0;
    switch ( petType) {
      case 'Felino' :
      tipo = 1
        break;
      case 'Canino' :
      tipo = 2
        break;
      case 'Aves' :
      tipo = 3
        break;
      case 'Equino':
      tipo = 4
        break;    
      default:
        break;
    }
    
    setDataForm({
      ...dataForm,
      name: data.name,
      size: size,
      clientId: 0,
      petType: {
        id: tipo,
        typeName: petType
      },
      race: data.race,
    })

    const dataPet = {
      ...dataForm,
      name: data.name,
      size: size,
      clientId: 0,
      petType: {
        id:tipo,
        typeName: petType
      },
      race: data.race,
    }

        
    const response = postPet(dataPet)
    response.then((res) => {
      if (res.ok) {
        setModalInfo({
          title: "¡Felicidades!",
          message: "Tu mascota ha sido creada con éxito.",
          isError: false,
          acceptButtonText: "Continuar",
        });
        setIsModalOpen(true);
      };
    })
  }

  // useEffect(() => {
  //   if (user) {
  //     setDataForm({ ...dataForm, email: user.email })
  //   }
  // }, [user])

  console.log({ user });
  console.log({ dataForm });

  return (
    <>
      <Grid item xs={12} xl={12}>
        <Typography color="primary" variant="h6">
          Mascota 1
        </Typography>
      </Grid>
      <Stack className={styles.bgBoxMascota}>
        <Grid container spacing={2} >
          <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} xl={6} >
            <InputController
              name='name'
              label='Nombre'
              type='text'
              defaultValue={dataForm.name}
              disabled={false}
              control={control}
              error={errors.name ? true : false}
              message={errors.name?.message as string} />
          </Grid>
          <Grid item xs={12} xl={6}>
            <InputController
              name='race'
              label='Raza'
              type='text'
              defaultValue={dataForm.race}
              disabled={false}
              control={control}
              error={errors.race ? true : false}
              message={errors.race?.message as string} />
          </Grid>
          <Grid item xs={12} xl={6} >
            <label className={styles.label}>Tamaño</label>
            <Select  
              className={styles.inputPet}
              labelId="mascota-tamano-label"
              id="size"
              name="size"
              value={size}
              onChange={(event) => setSize( event.target.value)}
              >
                <MenuItem  value="pequeño">pequeño</MenuItem>
                <MenuItem value="mediano">mediano</MenuItem>
                <MenuItem value="grande">grande</MenuItem>
              </Select>
              {/* <FormHelperText className={styles.help}>
              {errors.size?.message as string}
              </FormHelperText> */}
          </Grid>
          <Grid item xs={12} xl={6}>
          <label  className={styles.label} >Tipo</label>
            <Select
              className={styles.inputPet}
              labelId="mascota-tipo-label"
              id="petType"
              name="petType"
              value={petType}
              onChange={(event) => setpetType( event.target.value)} >
              <MenuItem value="Felino">Felino</MenuItem>
              <MenuItem value="Canino">Canino</MenuItem>
              <MenuItem value="Aves">Aves</MenuItem>
              <MenuItem value="Equino">Equino</MenuItem>
            </Select>
            {/* <FormHelperText className={styles.help}>
              {errors.petType?.message as string}              
              </FormHelperText> */}
          </Grid>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            className={styles.registerButton}
          >
            registrar
          </Button>
            <ReusableModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              onAccept={redirectToPetRegistration}
              title={modalInfo.title}
              message={modalInfo.message}
              acceptButtonText={modalInfo.acceptButtonText}
            />
          </form>
        </Grid>
      </Stack>
    </>
  )
}

export default PetRegisterForm