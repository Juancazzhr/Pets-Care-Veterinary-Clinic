import { Pet } from "@/interfaces/pet";
import { Service } from "@/interfaces/servicios";
import { Dispatch, SetStateAction } from "react";

export const getPetsByIdUser = async () => {
    const response = await fetch(``) // Endpoint pendiente desde BACK
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

export const getServices = async (setter: Dispatch<SetStateAction<Service[] | undefined>>) => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}services`) */
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/services`)
    const services = await response.json()
    setter(services)
    return services;
}

export const getServiceById = async (id: number) => {
    const response = await fetch(`${process.env.PETSCARE_API_URL}services\${id}`)
    const service = await response.json()
    return service;
}

export const getProfessionals = async () => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}professionals`) */
    const response = await fetch(`${process.env.PETSCARE_API_URL}professionals`)
    const professionals = await response.json()
    return professionals;
}

export const getProfessionalById = async (id: number) => {
    const response = await fetch(`${process.env.PETSCARE_API_URL}professional\${id}`)
    const professional = await response.json()
    return professional;
}