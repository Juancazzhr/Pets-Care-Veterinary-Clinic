import { PetConsults } from "@/interfaces";

export const getPetsConsults = async () => {
    const response = await fetch(`${process.env.BASE_URL_BACK}pets/consults`)
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
