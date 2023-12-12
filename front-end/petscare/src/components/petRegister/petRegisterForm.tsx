import { Pet } from '../../interfaces';
import { FC, useCallback, useContext, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormControl,  InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { postPet } from "../../services/petService";
import InputController from "../userRegister/inputController";
import React from 'react';
import { validationSchema } from "../../rules";
import ReusableModal from "../reusableModal/modal";
import styles from '../userRegister/registro.module.css'
import { useRouter } from 'next/router';
import AuthContext from '../../context/AuthContext';


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

  const { userLog } = useContext(AuthContext);
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
    router.push("/");
  }, []);

  const onSubmit: SubmitHandler<any> = (data: any) => {

    let tipo = 0;
    switch (petType) {
      case 'Felino':
        tipo = 1
        break;
      case 'Canino':
        tipo = 2
        break;
      case 'Aves':
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
      clientId: userLog?.id as number,
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
      clientId: userLog?.id as number,
      petType: {
        id: tipo,
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


  console.log({ dataForm });

  return (
    <>
      <Stack className={styles.bgBoxMascota}>
        <Typography color="primary" variant="h6">
          Mascota
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputController
            name='name'
            label='Nombre'
            type='text'
            defaultValue={dataForm.name}
            disabled={false}
            control={control}
            error={errors.name ? true : false}
            message={errors.name?.message as string} />

          <InputController
            name='race'
            label='Raza'
            type='text'
            defaultValue={dataForm.race}
            disabled={false}
            control={control}
            error={errors.race ? true : false}
            message={errors.race?.message as string} />

          <FormControl className={styles.formControl} >
            <InputLabel id="mascota-tipo-label">Tamaño</InputLabel>
            <Select
              className={styles.inputPet}
              labelId="mascota-tamano-label"
              id="size"
              name="size"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            >
              <MenuItem value="pequeño">pequeño</MenuItem>
              <MenuItem value="mediano">mediano</MenuItem>
              <MenuItem value="grande">grande</MenuItem>
            </Select>
            {/* <FormHelperText className={styles.help}>
              {errors.size?.message as string}
              </FormHelperText> */}
          </FormControl>

          <FormControl className={styles.formControl} >
            <InputLabel id="mascota-tipo-label">Tipo</InputLabel>
            <Select
              className={styles.inputPet}
              labelId="mascota-tipo-label"
              id="petType"
              name="petType"
              value={petType}
              onChange={(event) => setpetType(event.target.value)} >
              <MenuItem value="Felino">Felino</MenuItem>
              <MenuItem value="Canino">Canino</MenuItem>
              <MenuItem value="Aves">Aves</MenuItem>
              <MenuItem value="Equino">Equino</MenuItem>
            </Select>
            {/* <FormHelperText className={styles.help}>
              {errors.petType?.message as string}              
              </FormHelperText> */}
          </FormControl>

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
      </Stack>
    </>
  )
}

export default PetRegisterForm