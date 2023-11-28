import { User } from "@/interfaces";
import { TextField } from "@mui/material";
import { FC } from "react";

import style from './client.module.css'

interface Props {
    user: User
  }

export const FormCliente: FC<Props> = ({user}) => {
    return(
        <form >
            <TextField
            required
            className={style.form}
            color="success"
            id="standard-required"
            label="Nombre"
            defaultValue="Nombre"
            variant="standard"
            />
            <TextField
            required
            className={style.form}
            id="standard-required"
            label="Apellido"
            defaultValue="Apellido"
            variant="standard"
            disabled
          />
          <TextField
            required
            className={style.form}
            id="standard-required"
            label="Dirección"
            defaultValue="Dirección"
            variant="standard"
            disabled
          />
          <TextField
            required
            className={style.form}
            id="standard-required"
            label="Telefono"
            defaultValue="Telefono"
            variant="standard"
            disabled
          />
          <TextField
            required
            className={style.form}
            id="standard-required"
            label="Correo"
            defaultValue="Correo"
            variant="standard"
            disabled
          />
          <TextField
            required
            className={style.form}
            id="standard-required"
            label="Contraseña"
            defaultValue="Contraseña"
            variant="standard"
            disabled
          />
          </form>
    )

}