import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import HeaderCustom from "../../components/header/header";
import CardMenu from "../../components/cardmenu/cardmenu";
import { BsPeopleFill, BsFolder2Open, BsArrowBarRight } from "react-icons/bs";

import "./styles.css"

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

      <div className="card-container">
        <CardMenu
          to="/projetos"
          icon={BsFolder2Open}
          title="Projetos"
          description="Gerencie e visualize projetos com bolsas"
        />

        <CardMenu
          to="/bolsistas"
          icon={BsPeopleFill}
          title="Bolsistas"
          description="Cadastre e acompanhe os bolsistas"
        />

      </div>
    </div>
  )
}

export default Home;