export const getServices = async () => {
   /*  const response = await fetch(`${process.env.BASE_URL_BACK}services`) */
    const response = await fetch(`${process.env.PETSCARE_API_URL}services`)
    const services = await response.json()
    return services;
}
