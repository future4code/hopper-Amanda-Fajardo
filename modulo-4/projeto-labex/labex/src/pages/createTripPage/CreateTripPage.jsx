/* Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  axios  from "axios";
import useForm from "../../hooks/useForm";
import {planets} from "../../constants/planets";

import {Home, Header, DivBtn, DivForm, Form, Select, Input,GoButton, InputData} from './Styled'


function CreateTrip() {
  const [idTrip, setIdTrip] = useState("");
  const [trips, setTrips] = useState();

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/adminTripsList");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  const { form, onChange, cleanFields } = useForm({
    name: "",
    description: "",
    planet: "",
    durationInDays: "",
    date: "",
  });

  const clearInput = () => {
    cleanFields();
    setIdTrip("");
  };
  const singUp = (event) => {
    event.preventDefault();
    sendApplication(form, idTrip, clearInput);
    console.log("Formulário enviado!", form);
    cleanFields();
  };

  const sendApplication = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/amanda-fajardo-hopper/trips`
    const headers = { auth: localStorage.getItem("token") }; 

  axios.post(url, form, { headers })
      .then((res) => {
        setTrips(res.data.trip);
        alert("Viagem Registrada!");
        cleanFields();
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.message));
  };

  return (
    <Home>
      <Header>

      </Header>
      <DivBtn>
        <button onClick={() => goToHome()}>Voltar</button>

        <button onClick={() => goToLogin()}>Logaut</button>
      </DivBtn>
      <DivForm>
        <h1>Criar viagens</h1>
        <Form onSubmit={singUp}>
          <Input
            name={"name"}
            value={form.name}
            placeholder="Nome"
            onChange={onChange}
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
          />
          <Select
            name={"planet"}
            value={form.planet}
            placeholder="Planeta"
            onChange={onChange}
            required
          >
            <option value={""} disabled>Escolha um Planeta</option>
            {planets.map((item)=>{
              return <option value={item} key={item}>{item}</option>
            })}
            </Select>
            <InputData
             name={"date"}
             value={form.date}
             placeholder="Texto de Candidatura"
             onChange={onChange}
             pattern={"^.{3,}"}
             required
             type={"date"}
            />

            <Input
            name={"description"}
            value={form.description}
            placeholder="Descrição"
            onChange={onChange}
            pattern={"^.{3,}"}
            required
            title={"A descrição deve ter no mínimo 3 caracteres"}
          />
           <Input
              name={"durationInDays"}
              value={form.durationInDays}
              placeholder="Duração da viagem"
              onChange={onChange}
              type="number"
              required
            />
            <GoButton type="submit">Criar</GoButton>
        </Form>
      </DivForm>
    </Home>
  );
}

export default CreateTrip;
