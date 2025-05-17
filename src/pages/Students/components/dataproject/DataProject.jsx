import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { api } from "../../../../services/api";
import './styles.css';


/*DADOS DE TESTE*/
/*
const Data = () => {
  const [students, setStudents] = useState([
    {
      num_matricula: 20230001,
      nome: "Alice Souza",
      curso: "Engenharia Florestal",
      instituto: "ICBIO",
      codprojeto: "PJT001",
      titulo: "Mapeamento de Vegetação Nativa",
      nome_coord: "Dr. João Mendes"
    },
    {
      num_matricula: 20230002,
      nome: "Bruno Oliveira",
      curso: "Ciência da Computação",
      instituto: "ICTI",
      codprojeto: "PJT002",
      titulo: "Sistema de Educação Digital",
      nome_coord: "Profa. Maria Clara Dias"
    },
  ]);

  const setOnEdit = () => {};
*/

  
  const Data = ({ students, setStudents, setOnEdit }) => {

  const handleEdit = (item) => {
    setOnEdit(item);
  };
  

  const handleDelete = async (id) => {
    await api
      .delete("/bolsistas/" + id)
      .then(({ data }) => {
        const newArray = students.filter((p) => p.num_matricula !== id);
        setStudents(newArray);
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
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>Instituto</th>
            <th>Projeto</th>
            <th>Coordenador(a)</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {students.map((item, i) => (
            <tr key={i}>
              <td>{item.num_matricula}</td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
              <td>{item.instituto}</td>
              <td>{item.codprojeto} - {item.titulo}</td>
              <td>{item.nome_coord}</td>
              <td>
                <div className="action-buttons">
                  <button
                        onClick={() => handleEdit(item)}
                        className="icon-button"
                        title="Editar">
                        <FaEdit />
                  </button>
                  <button
                        onClick={() => handleDelete(item.num_matricula)}
                        className="icon-button"
                        title="Excluir">
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