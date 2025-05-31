import { useState, useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import "./styles.css"

const LoginPage = () => {
  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassoword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    login(email, password)
  }

  return (
    <div className="container" id="login">
      <div className="form-box">

        <h1>LOGIN</h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <input className="form-input" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail" required/>
          <input className="form-input" type="password" name="password" id="password" value={password} onChange={(e) => setPassoword(e.target.value)} placeholder="Senha" required/>

        <button className="form-btn" type="submit">Entrar</button>

        </form>

        

        {/* <p class="text"><a href="#">Esqueceu a senha?</a> ou <a href="/register">Cadastro</a> </p> */}

      </div>
      
    </div>
  )
}

export default LoginPage
