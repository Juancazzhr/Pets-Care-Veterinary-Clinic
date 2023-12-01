import { Pet } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";


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