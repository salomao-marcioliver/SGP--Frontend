import { useState, useContext } from "react"
import "./styles.css"

const RegisterPage = () => {

    const [formData, setFormData] = useState({
      nome: "",
      setor: "",
      cargo: "",
      email: "",
      senha: "",
      confirmarSenha: "",
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não conferem!');
      return;
    }
    
    }

  return (
    <div className="container">
        <div className="form-box">
            <h1> Cadastro </h1>

            <form className="" onSubmit={handleSubmit}>

          <label>Nome Completo:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome Completo"
            className="form-input"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label>Setor:</label>
          <input
            type="text"
            name="setor"
            id="setor"
            placeholder="Setor"
            className="form-input"
            value={formData.setor}
            onChange={handleChange}
            required
          />

          <label>Cargo:</label>
          <input
            type="text"
            name="cargo"
            id="cargo"
            placeholder="Cargo"
            className="form-input"
            value={formData.cargo}
            onChange={handleChange}
            required
          />

          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            className="form-input"
            value={formData.senha}
            onChange={handleChange}
            required
          />

          <label>Confirmar Senha:</label>
          <input
            type="password"
            name="confirmarSenha"
            id="confirmarSenha"
            placeholder="Confirmar Senha"
            className="form-input"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
          />

                <button className= "form-btn" type="submit">Cadastrar</button>

            </form>            
        </div>

        <a href="/login">Voltar</a>
        
    </div>
  )
}

export default RegisterPage
