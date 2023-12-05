
export const getServices = async () => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}services`) */
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/services`)
    const services = await response.json()
    return services;
}

export const getServiceById = async (id: number) => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}services\${id}`) */
    const response = await fetch(`${process.env.PETSCARE_API_URL}services\${id}`)
    const service = await response.json()
    return service;
}
