
export const getServices = async () => {
    const response = await fetch(`${process.env.BASE_URL_BACK}services`)
    const services = await response.json()
    return services;
}

export const getServiceById = async (id: number) => {
    const response = await fetch(`${process.env.BASE_URL_BACK}services/${id}`)
    const service = await response.json()
    return service;
}
