import { toast } from "react-toastify";
import { useRef, useEffect } from "react";
import { api } from "../../../../services/api";
import "./styles.css"

const Form = ({ onEdit, setOnEdit }) => {
  const ref = useRef();
  useEffect(() => {
    if (onEdit) {
      const student = ref.current;

      student.matricula.value = onEdit.num_matricula;
      student.nome.value = onEdit.nome;
      student.data_nasc.value = onEdit.data_nascimento;
      student.curso.value = onEdit.curso
      student.instituto.value = onEdit.instituto;
      student.codprojeto.value = onEdit.codprojeto;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = ref.current;
    if (
      !student.matricula.value ||
      !student.nome.value ||
      !student.curso.value ||
      !student.data_nasc.value ||
      !student.instituto.value ||
      !student.codprojeto.value
    ) {
      return alert("Preencha todos os campos!");
    }

    if (onEdit) {
      await api
        .put("/bolsistas/" + onEdit.num_matricula, {
          num_matricula: student.matricula.value,
          nome: student.nome.value,
          data_nascimento: student.data_nasc.value,
          curso: student.curso.value,
          instituto: student.instituto.value,
          codprojeto: student.codprojeto.value
        })
        .then(({ data }) => console.log(data))
        .catch(({ data }) => console.log(data));
    } else {
      await api
        .post('/bolsistas', {
          num_matricula: student.matricula.value,
          nome: student.nome.value,
          data_nascimento: student.data_nasc.value,
          curso: student.curso.value,
          instituto: student.instituto.value,
          codprojeto: student.codprojeto.value
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    student.matricula.value = "";
    student.nome.value = "";
    student.curso.value = "";
    student.data_nasc.value = "";
    student.instituto.value = "";
    student.codprojeto.value = "";

    setOnEdit(null);
  };

  return (

    <div className="container-form">
      <form onSubmit={handleSubmit} className="form">
          <div className="form-grid">

            <div className="form-group">
              <label htmlFor="matricula">Matrícula</label>
              <input className="form-input" name="matricula" id="matricula" type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="nome">Nome Completo do Bolsista</label>
              <input className="form-input" name="nome" id="nome" type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="curso">Curso</label>
              <input className="form-input" name="curso" id="curso" type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="instituto">Instituto</label>
              <select className="form-input" name="instituto" id="instituto" >
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

            <div className="form-group">
              <label htmlFor="data_nasc">Data de Nascimento</label>
              <input className="form-input" name="data_nasc" id="data_nasc" type="date" />
            </div>

            <div className="form-group">
              <label htmlFor="codproject">Código do Projeto </label>
              <input className="form-input" name="codproject" id="codproject" type="text" />
            </div>

          </div>

          <button type="submit" className="save-btn">Salvar</button>

      </form>


    </div>


  );
};


export default Form;