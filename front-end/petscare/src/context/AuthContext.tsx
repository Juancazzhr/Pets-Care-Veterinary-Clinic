import { User } from "@/interfaces";
import { ReactNode, createContext, useEffect, useState } from "react";

interface ContextProps {
  auth: boolean
  handleAuth: (jwt: string) => void
  userLog: User | undefined
}

interface ChildrenProps {
  children: ReactNode
}

const AuthContext = createContext<ContextProps>({} as ContextProps);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [auth, setAuth] = useState(false);
  const [userLog, setUserLog] = useState<User>();

  const urlAPI = `${process.env.BASE_URL}/users`;

  const getUser = (url:string, token:string) => {

    const settings = {
      method: "GET",
      headers: {
        /* authorization: "Bearer " + token, */
      },
    };
    fetch(url, settings)
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

  };

  useEffect(() => {
    userLog?.id && setAuth(true);
  }, [userLog])

  const handleAuth = (jwt: string) => {
    if (auth) {
      localStorage.removeItem("jwt");
      setAuth(false);
    } else {
      localStorage.setItem("jwt", JSON.stringify(jwt));
      getUser(urlAPI, jwt);
    }
  };

  const data = { auth, handleAuth, userLog };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;