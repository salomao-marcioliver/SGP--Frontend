import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import HeaderCustom from "../../components/header";

function Home() {
  
  {/*
  const { logout } = useContext(AuthContext)
  const handleLogout = () => {
    logout();
  }
  */}
  return (
    <div>

      <HeaderCustom/>

      <div className="container">

        <Link to='/projetos'>Ir para Área de Projetos</Link>
        <br />
        <Link to='/bolsistas'>Ir para Área de Bolsistas</Link>
        <br />
        <br />

      </div>
    </div>
  )
}

export default Home;