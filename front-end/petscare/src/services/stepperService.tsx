import { AppointmentInput, Pet, User } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";

export const getPetsByUserId = async (id: number) => {
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/pets/users/${id}`)
    const pets = await response.json()
    return pets;
}

export const getPetById = async (id: number, setter: Dispatch<SetStateAction<Pet | undefined>>) => {
    const response = await fetch(
        `http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/pets/${id}`);
    const pet = await response.json()
    setter(pet)
    return pet;
}

export const getServices = async () => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}services`) */
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/services`)
    const services = await response.json()
    return services;
}

export const getServiceById = async (id: number) => {
    const response = await fetch(`${process.env.PETSCARE_API_URL}services\${id}`)
    const service = await response.json()
    return service;
}

export const getUserById = async (id: number) => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}professionals`) */
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/${id}`)
    const professionals = await response.json()
    return professionals;
}


export const getProfessionals = async () => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}professionals`) */
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/professionals`)
    const professionals = await response.json()
    return professionals;
}

export const getProfessionalById = async (id: number) => {
    const response = await fetch(`${process.env.PETSCARE_API_URL}professionals/${id}`)
    const professional = await response.json()
    return professional;
}


export const postAppointment = async (data: AppointmentInput) => {

    const dataAppointment = JSON.stringify(data);

    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/appointments`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: dataAppointment
    });

    return await response;
};

  export const postUser = async (data: User) => {
    const dataUser = JSON.stringify(data);    
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/client`, {
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
      },
      method: "POST",
      body: dataUser
    });
  
    return await response;
  };

  export const postPet = async (data: Pet) => {
    
    const dataPet = JSON.stringify(data);    
    console.log(data);
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/pets`, {
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
      },
      method: "POST",
      body: dataPet
    });
  
    return await response;
  };

  export const getUserByEmail = async (email: string) => {
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/mail${email}}`)
    const professional = await response.json()
    return professional;
}