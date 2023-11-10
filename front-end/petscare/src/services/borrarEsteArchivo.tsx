import { useState } from "react";
  
  /***** REGISTRO *****/

  interface Settings{
    method: string;
    body: string;
    headers: {
        "Content-Type": string;
    };
}

  const [successRegister, setSuccessRegister] = useState(false);
  const urlAPI = `${process.env.BASE_URL}/users`;
  
  function realizarRegistro(settings: Settings) {
    fetch(`${URL_BASE}/usuario`, settings)
      .then((response) => {
     //   console.log({response});
        if (!response.ok) {
          setFailure(true);
        } else {
          return response.json();
        }
      })
      .then((data) => {
      //  console.log({data});
        if (data) {
          setSuccessRegister(true);
        }
      })
      .catch((err) => {
        console.log("Promesa rechazada:");
        console.log({err});
      });
  }



  const handleSubmitRegister = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    const payload = {
      nombre: form.fName,
      apellido: form.surname,
      ciudad: form.city,
      password: form.password,
      email: form.email,
      roles: [
        {
          id: 2,
        },
      ],
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };
   
    setErrorsFree(Object.values(errors).find(error => error !== ""));

    console.log({errorsFree});

    if (errorsFree === undefined) {
      console.log({ errors });
      realizarRegistro(settings);
    } else {
      console.log("No se pudo completar el registro");
    }
  };