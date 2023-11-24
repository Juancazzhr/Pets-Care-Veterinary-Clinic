export const getImage = async (imagen : string) =>{
    const response = await fetch(`https://petscare.s3.amazonaws.com/slider/${imagen}.jpg`)
    const img = await response.url
    return img;
}
