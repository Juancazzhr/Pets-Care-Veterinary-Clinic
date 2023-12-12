import { Pet } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";


export const postPet = async (data: Pet) => {    
    const dataPet = JSON.stringify(data);    
       
    const response = await fetch(`${process.env.BASE_URL_BACK}pets`, {
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
      },
      method: "POST",
      body: dataPet
    });  
    return await response;
  };


export const getPetsByUserId = async (id: number | undefined) => {
    const response = await fetch(`${process.env.BASE_URL_BACK}pets/users/${id}`)
    const pets = await response.json()
    return pets;
}

export const getPetById = async (id: number, setter: Dispatch<SetStateAction<Pet | undefined>>) => {
    const response = await fetch(
        `${process.env.BASE_URL_BACK}pets/${id}`);
    const pet = await response.json()
    setter(pet)
    return pet;
}