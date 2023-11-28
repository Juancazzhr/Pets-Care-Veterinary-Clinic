import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import { useRouter } from "next/router";
import styles from "../../components/userRegister/registro.module.css";
import { Button, Box, Grid, Typography, Paper } from "@mui/material";
import PetFields from "../../components/petRegister/petRegister";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { PetRegisterForm } from "../../components/petRegister/petRegisterForm";
import { Pet, User } from "@/interfaces";
import ReusableModal from "../../components/reusableModal/modal";
import { Field } from "formik";
import { getUserByEmail, postPet } from "../../services/stepperService";

interface Props {  
  pet: Pet
  idCli: User
}

const RegisterPets: NextPage = () => {

  const formik = PetRegisterForm();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    message: "",
    isError: false,
    acceptButtonText: "",
  });

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const defineData = (values: Pet)=>{

    const user = localStorage.getItem('user')
    console.log(user);
    
    let tipo = 0;
    switch ( values.petType.typeName) {
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

    const dataPet : Pet = {
      name: values.name,
      size: values.size,
      clientId: 53,
      race: values.race,
      petType: {
        id: tipo,
        typeName: values.petType.typeName,
      }
    }
    return dataPet;

  }

  const postData =  useCallback((values: Pet) => {

    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.keys(values).length > 0) {
          const data = defineData(values)
          console.log(data);
          
          const response = postPet(data)
          console.log(response);
          
          response.then((res)=>{            
            resolve("Success");
          })
        } else {
          reject("Error");
        }
      }, 500)
    })
  }, [])
  
  const handleFormSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formik.setTouched({     
      [Field.name]: true
  });
  // Realiza la validación del formulario
  const formErrors = await formik.validateForm(formik.values);

  if (formik.isValid && Object.keys(formErrors).length === 0) {

    //postData(formik.values)
    const response = postPet(formik.values)
        response.then((res) => {
          if(res.ok){
            setModalInfo({
              title: "Felicidades!",
              message: "Tu mascota ha sido creada con éxito.",
              isError: false,
              acceptButtonText: "Continuar",
            });
            setIsModalOpen(true);
          }
      })
      .catch(async (error) => {
        // Manejar errores de la llamada de la API
        if((await response).status !== 400){

          setModalInfo({
            title: "Error",
            message: "Ocurrio un error al guardar los datos, intente mas tarde",
            isError: true,
            acceptButtonText: "/registroMascotas",
          });
          setIsModalOpen(true);
        }
      });
  } else {
    formik.errors;
  }
},
[]
);


  const redirectToPetRegistration = useCallback(() => {
    setIsModalOpen(false);
    router.push("/client");
  }, [router]);

  
  return (
    <Box className={styles.root}>
      <Typography
        color="primary"
        variant="h3"
        textAlign={"center"}
        fontWeight={700}
        sx={{ mb: "15px" }}
      >
        registra tu mascota
      </Typography>
      <Paper elevation={8} className={styles.paper}>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <PetFields formik={formik} />
          </Grid>
          <Box className={styles.addPets}>
            <AddCircleIcon color="primary" />
            <Typography color="primary" ml="10px" variant="body1">
              AGREGAR MASCOTA
            </Typography>
          </Box>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            className={styles.registerButton}
          >
            <ReusableModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onAccept={redirectToPetRegistration}
            title={modalInfo.title}
            message={modalInfo.message}
            acceptButtonText={modalInfo.acceptButtonText}
          />
            registrar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

(RegisterPets as any).Layout = LayoutAuth;

export default RegisterPets;


