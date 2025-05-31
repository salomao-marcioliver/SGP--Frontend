import { useState, useEffect } from "react"
import DataProject from './components/dataproject/DataProject'
import { api } from '../../services/api'
import Form from "./components/form/Form"
import HeaderCustom from "../../components/header/header";
import styled from "styled-components"

const Title = styled.h2`
text-align: center;
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [onEdit, setOnEdit] = useState(null)

  useEffect(() => {
    api
      .get('/projetos')
      .then((response) => setProjects(response.data))
      .catch((err) => {
        console.log(api.defaults.headers.Authorization)
        console.log(err)
      })
  }, [projects])

  return (
    <div> 
      
      <HeaderCustom/>
      <Title>Projetos</Title>

      <div className="container">
        <div className="form-container">
          <Form onEdit={onEdit} setOnEdit={setOnEdit}/>
        </div>

        <div>
          <DataProject projects={projects} setProjects={setProjects} setOnEdit={setOnEdit}/>
        </div>
      
      </div>

    </div>
    
  )

}

export default Projects

