export const getPetsConsults = async () => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}pets/consults`) */
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/pets/consults`)
    const petsConsults = await response.json()
    return petsConsults;
}