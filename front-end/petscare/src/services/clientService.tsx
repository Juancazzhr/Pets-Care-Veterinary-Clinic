import { PetConsults } from "@/interfaces";
import { useState } from "react";

export const getPetsConsults = async () => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}pets/consults`) */
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/pets/consults`)
    const petsConsults = await response.json()
    return petsConsults;
}

export const getPetsConsultsByUserId = async (userId: number, data: PetConsults[])=>{

    const petsConsultsFiltered : PetConsults[] = []
    data.map((pet : PetConsults)=>{
        if (pet?.pet.clientId === userId){
            petsConsultsFiltered.push(pet)
        }
    })
    return petsConsultsFiltered;
}
