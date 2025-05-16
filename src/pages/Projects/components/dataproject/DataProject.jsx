import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { api } from "../../../../services/api";
import './styles.css';


/* DADOS DE TESTE */
/*
const Data = () => {
  const [projects, setProjects] = useState([
    {
      codprojeto: 1,
      titulo: "Plataforma de Gestão de Dados",
      data_inicio: "2025-01-10",
      data_termino: "2025-12-20",
      nome_coord: "Dra. Ana Souza",
      instituto_coord: "ICTI"
    },
    {
      codprojeto: 2,
      titulo: "Monitoramento Ambiental com IoT",
      data_inicio: "2025-03-01",
      data_termino: "2025-09-30",
      nome_coord: "Dr. Carlos Lima",
      instituto_coord: "IEG"
    },
    {
      codprojeto: 3,
      titulo: "Sistema de Apoio à Decisão",
      data_inicio: "2025-02-15",
      data_termino: "2025-11-15",
      nome_coord: "Profa. Maria Clara",
      instituto_coord: "ICED"
    },
    {
      codprojeto: 4,
      titulo: "Aplicativo de Saúde Pública",
      data_inicio: "2025-04-01",
      data_termino: "2025-10-01",
      nome_coord: "Dr. João Almeida",
      instituto_coord: "ICSE"
    }
  ]);

  const setOnEdit = () => {};

*/

const Data = ({ projects, setProjects, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await api
      .delete("/projetos/" + id)
      .then(({ data }) => {
        const newArray = projects.filter((p) => p.codprojeto !== id);
        setProjects(newArray);
        toast.success(data)
      }).catch(({ data }) => {
        toast.error(data)
      });
    setOnEdit(null)
  }


  return (
    <div className="table-container">   

      <div className="table-wrapper">
      <table className="neo-table">        
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Data de Início</th>
            <th>Data de Término</th>
            <th>Coordenador(a)</th>
            <th>Instituto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((item, i) => (
            <tr key={i}>
              <td>{item.codprojeto}</td>
              <td>{item.titulo}</td>
              <td>{item.data_inicio}</td>
              <td>{item.data_termino}</td>
              <td>{item.nome_coord}</td>
              <td>{item.instituto_coord}</td>
              <td>
                <div className="action-buttons">
                  <button
                        onClick={() => handleEdit(item)}
                        className="icon-button"
                        title="Editar"
                      >
                        <FaEdit />
                  </button>
                      <button
                        onClick={() => handleDelete(item.codprojeto)}
                        className="icon-button"
                        title="Excluir"
                      >
                        <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="link-container">
        <Link to="/">Ir para Home</Link>
      </div>
    </div>
  )
}

export default Data;