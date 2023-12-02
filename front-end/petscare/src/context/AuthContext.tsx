import { User } from "@/interfaces";
import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode, createContext, useEffect, useState } from "react";

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

 

  const getUser = (email:any, isAuth: boolean) => {

    const urlAPI = `${process.env.BASE_URL_BACK}users/mail${email}}`;

    if(isAuth){
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
 

  const data = { userLog };

  console.log({userLog});
  

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;