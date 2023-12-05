"use client"

import { User } from "@/interfaces";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { ReactNode, createContext, useEffect, useMemo, useState, useContext } from "react";

interface ContextProps {
  userLog: User | undefined
}

interface ChildrenProps {
  children: ReactNode
}

const AuthContext = createContext<ContextProps>({} as ContextProps);

const AuthProvider = ({ children }: ChildrenProps) => {

  const { isAuthenticated, user } = useAuth0();
  const [userLog, setUserLog] = useState<User>();

  const router = useRouter()
 

  const getUser = (email:any, isAuth: boolean) => {

   /*  const urlAPI = `${process.env.BASE_URL_BACK}users/mail/${email}}`; */

    const urlAPI = `http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/mail/${email}`;

    if(isAuth && router.asPath !== '/registro' ){
      fetch(urlAPI)
      .then((response) => {
        console.log(response);
        if (response.ok !== true) {
          alert("No se pudo consultar Usuario");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setUserLog(data)
        }
      });
    }

  };

  useEffect(() => {
  getUser(user?.email, isAuthenticated)  
  
  }, [isAuthenticated])
 

  const data = useMemo(
    () =>({
      userLog
    }),
    [userLog]
  );

console.log({userLog});

 
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;

