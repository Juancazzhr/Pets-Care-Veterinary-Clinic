import { User } from "@/interfaces";

export const postUser = async (data: User) => {
    const dataUser = JSON.stringify(data);    
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/client`, {
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
      },
      method: "POST",
      body: dataUser
    });  
    return await response;
  };
  
  export const updateUser = async (data: User) => {
    const dataUser = JSON.stringify(data);    
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/client`, {
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
      },
      method: "PUT",
      body: dataUser
    });  
    return await response;
  };
  
  
  export const getUserByEmail = async (email: string) => {
    const response = await fetch(`https://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/mail/${email}}`)
    const user = await response.json()
    return user;
}

  export const getUserById = async (id: number) => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}professionals`) */
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/${id}`)
    const user = await response.json()
    return user;
}


export const getProfessionals = async () => {
    /*  const response = await fetch(`${process.env.BASE_URL_BACK}professionals`) */
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/professionals`)
    const professionals = await response.json()
    return professionals;
}

export const getProfessionalById = async (id: number) => {
    const response = await fetch(`${process.env.PETSCARE_API_URL}professionals/${id}`)
    const professional = await response.json()
    return professional;
}
