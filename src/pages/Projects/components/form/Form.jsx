import { toast } from "react-toastify";
import { useRef, useEffect } from "react";
import { api } from "../../../../services/api";
import "./styles.css"

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
<<<<<<< HEAD:src/pages/Projects/components/Form.jsx
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Titulo do Projeto</Label>
        <Input name="titulo" />
      </InputArea>
      <InputArea>
        <Label>Data de Início</Label>
        <Input name="data_inicio" type="date" />
      </InputArea>
      <InputArea>
        <Label>Data de Término</Label>
        <Input name="data_termino" type="date" />
      </InputArea>
      <InputArea>
        <Label>Cod. Identificador</Label>
        <Input name="cod_coord" type="text" />
      </InputArea>
      <InputArea>
        <Label>Nome Coordenador(a)</Label>
        <Input name="nome_coord" type="text" />
      </InputArea>
      <InputArea>
        <Label>Instituto</Label>
        <Input name="instituto_coord" type="text" />
      </InputArea>
      <Button type="submit">SALVAR</Button>
    </FormContainer>
=======

    <div className="container-form">
   <form onSubmit={handleSubmit} className="form">
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
      <label htmlFor="cod_coord">Cód. Identificador</label>
      <input className="form-input" name="cod_coord" id="cod_coord" type="text" />
    </div>

    <div className="form-group">
      <label htmlFor="nome_coord">Nome do Coordenador(a)</label>
      <input className="form-input" name="nome_coord" id="nome_coord" type="text" />
    </div>

    <div className="form-group">
      <label htmlFor="instituto_coord">Instituto</label>
      <select className="form-input" name="instituto_coord" id="instituto_coord" >
        <option value="">Selecione um Instituto</option>
        <option value="CFI">CFI</option>
        <option value="ISCO">ISCO</option>
        <option value="IEG">IEG</option>
        <option value="ICTA">ICTA</option>
        <option value="ICS">ICS</option>
        <option value="ICED">ICED</option>
        <option value="IBEF">IBEF</option>
        <option value="IFII">IFII</option>
      </select>
    </div>
  </div>

  <button type="submit" className="save-btn">Salvar</button>
</form>

    </div>
   
>>>>>>> 8b071aa1ff15ed188927eb4718675620bfdd4081:src/pages/Projects/components/form/Form.jsx
  );
};


export default Form;