import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

   const [error, setError] = useState(null); // armazenar erros

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false)
  }, [])

  const login = async (email, password) => {

    try{
      setError(null) // limpa erro anterior

      //Criar uma session
      const response = await createSession(email, password)

      const loggedUser = response.data.user;
      const token = response.data.token;

      localStorage.setItem("user", JSON.stringify(loggedUser))
      localStorage.setItem("token", token)

      api.defaults.headers.Authorization = `Bearer ${token}`;
      //api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log("aqui é o teste", api.defaults.headers.Authorization)

      setUser(loggedUser)
      navigate("/")

    } catch(errorResponse){
      console.error("Erro no login:", errorResponse)

      if (errorResponse.response) {
        const status = errorResponse.response.status
        const message = errorResponse.response.data.err

        if (status === 404 || status === 401) {
          setError(message) // mostra erro vindo da API
        } else {
          setError("Erro ao tentar conectar. Tente novamente.")
        }
      } else {
        setError("Erro de conexão. Verifique sua internet.")
      }
    }

  }

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login")
  }
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  )
}

