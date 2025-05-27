import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import "./styles.css"
import { BsBell, BsFillPersonFill } from "react-icons/bs";
import { AuthContext } from "../../contexts/auth";

export default function HeaderCustom(){

    const { logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout();
    }


    const [seconds, setSeconds] = useState(0);

    // Inicia cronômetro ao carregar o componente
    useEffect(() => {
        const interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
        return () => clearInterval(interval); // limpa quando desmonta
    }, []);

    // Converte segundos para formato HH:MM:SS
    const formatTime = (s) => {
    const hrs = String(Math.floor(s / 3600)).padStart(2, '0');
    const mins = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const secs = String(s % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;};


    return(
        <header className="header">
            <div className="header-left">
                <h1 className="title">SGP</h1>
                <p className="subtitle">Sistema Gerenciador de Projetos</p>
            </div>

           {/*TEMPO DE SESSÃO: apenas visual, não está funcionando realmente*/} 
            <div className="header-center">
            <span className="session-timer">⏱ Sessão: {formatTime(seconds)}</span>
            </div>
    
            <div className="header-right">
                {/*
                <button className="icon-button" aria-label="Notificações">
          <BsBell size={25} />
                </button>
                */}
                <button className="icon-button" aria-label="Perfil">
          <BsFillPersonFill size={25}/>
                </button>
                <button className="logout-button" onClick={handleLogout}> Sair </button>

            </div>
        </header>
    )
}