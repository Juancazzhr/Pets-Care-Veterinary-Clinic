export const getPetsByIdUser = async () => {
    const response = await fetch(``) // Endpoint pendiente desde BACK
    const pets = await response.json()
    return pets;
}

export const getServices = async () => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}services`) */
     const response = await fetch(`${process.env.PETSCARE_API_URL}services`)
     const services = await response.json()
     return services;
 }
 
 export const getProfessionals = async () => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}professionals`) */
     const response = await fetch(`${process.env.PETSCARE_API_URL}professionals`)
     const professionals = await response.json()
     return professionals;
 }

 