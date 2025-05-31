import { toast } from "react-toastify";
import { useRef, useEffect } from "react";
import { api } from "../../../../services/api";
import "./styles.css"
import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

const Form = ({ onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const project = ref.current;

      project.titulo.value = onEdit.titulo;
      project.data_inicio.value = onEdit.data_inicio;
      project.data_termino.value = onEdit.data_termino;
      project.cod_coord.value = onEdit.codcoord
      project.nome_coord.value = onEdit.nome_coord;
      project.instituto_coord.value = onEdit.instituto_coord;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const project = ref.current;
    if (
      !project.titulo.value ||
      !project.data_inicio.value ||
      !project.data_termino.value ||
      !project.cod_coord.value ||
      !project.nome_coord.value ||
      !project.instituto_coord.value
    ) {
      return alert("Preencha todos os campos!");
    }

    if (onEdit) {
      await api
        .put("/projetos/" + onEdit.codprojeto, {
          titulo: project.titulo.value,
          data_inicio: project.data_inicio.value,
          data_termino: project.data_termino.value,
          codcoord: project.cod_coord.value,
          nome_coord: project.nome_coord.value,
          instituto_coord: project.instituto_coord.value
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await api
        .post('/projetos', {
          titulo: project.titulo.value,
          data_inicio: project.data_inicio.value,
          data_termino: project.data_termino.value,
          codcoord: project.cod_coord.value,
          nome_coord: project.nome_coord.value,
          instituto_coord: project.instituto_coord.value
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    project.titulo.value = "";
    project.data_inicio.value = "";
    project.data_termino.value = "";
    project.cod_coord.value = "";
    project.nome_coord.value = "";
    project.instituto_coord.value = "";

    setOnEdit(null);
  };


  return (
    <div className="container-form">
      <form ref={ref} onSubmit={handleSubmit} className="form">
        <div className="form-grid">

          <div className="form-group">
            <label htmlFor="titulo">Título do Projeto</label>
            <input className="form-input" name="titulo" id="titulo" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="data_inicio">Data de Início</label>
            <input className="form-input" name="data_inicio" id="data_inicio" type="date" />
          </div>

          <div className="form-group">
            <label htmlFor="data_termino">Data de Término</label>
            <input className="form-input" name="data_termino" id="data_termino" type="date" />
          </div>

          <div className="form-group">
            <label htmlFor="cod_coord">Cod. Identificador</label>
            <input className="form-input" name="cod_coord" id="cod_coord" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="nome_coord">Nome Coordenador(a)</label>
            <input className="form-input" name="nome_coord" id="nome_coord" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="instituto_coord">Instituto</label>
            <input className="form-input" name="instituto_coord" id="instituto_coord" type="text" />
          </div>

        </div>

        <button type="submit" className="save-btn">Salvar</button>
      </form>
    </div>

  );
};


export default Form;