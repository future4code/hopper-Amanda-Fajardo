/*ra o usuário se candidatar à viagens, página que vai ter o formulário de inscrição*/

import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useState} from "react";
import axios from "axios";

import { countries } from "../../constants/countries";
import useRequestData from "../../hooks/useRequestData";
import {FaHandPointLeft} from 'react-icons/fa';
import { Home, Header,Div, DivForm, Form, Input, Button, Select, Option, Footer } from "./Styled";

function ApplicationForm() {
  const [idTrip, setTripId] = useState("");
  const [success, setSuccess] = useState(false);
 const [trips]= useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/amanda-fajardo-hopper/trips", {}) ;
  const navigate = useNavigate();

  

  const onChangeTripId = (event) => {
    setTripId(event.target.value);
  };
  const goToHome = () => {
    navigate("/tripsList");
  };

  

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const clearInput = () => {
    cleanFields()
    setTripId("")
  };

  const preventReload = (event) => {
    event.preventDefault();
    applyToTrip(form, idTrip, clearInput);
    console.log("Formulário enviado!", form);
    cleanFields();
  };

  const optionTrip =
  trips &&
  trips.trips.map((data) => {
    return <option key={data.id} value={data.id}>
    {data.name}
  </option> 

    
  });

  const applyToTrip = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/amanda-fajardo-hopper/trips/${idTrip}/apply`
    const headers = { "Content-Type": "application/json"}
    axios
      .post(url, form, {headers})
      .then((res) => {
        if(!setSuccess(res.data.success))
        alert("Incrição enviada com sucesso!");
        cleanFields();
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.message));
  };

 
  
 

  return (
    <Home>
      <Header>
      <button onClick={()=>goToHome()}>
      <FaHandPointLeft className='icon'/>
      </button>
      </Header>
     
      <Div>
      <DivForm>
        <h3>Inscreva-se para uma viagem </h3>
        <Form onSubmit={preventReload}>
          <Select defaultValue="" onChange={onChangeTripId}>
            <Option value="" disabled>
              Escolha uma viagem </Option>
              {optionTrip} 
          </Select>
          <Input
            name={"name"}
            value={form.name}
            placeholder="Nome"
            onChange={onChange}
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
          />
          <Input
            name={"age"}
            value={form.age}
            placeholder="Idade"
            onChange={onChange}
            type={"number"}
            min={18}
            required
          />

          <Input
            name={"applicationText"}
            value={form.applicationText}
            placeholder="Texto de Candidatura"
            onChange={onChange}
            pattern={"^.{3,}"}
            required
            title={"O texto deve ter no mínimo 3 caracteres"}
          />

          <Input
            name={"profession"}
            value={form.profession}
            placeholder="Profissão"
            onChange={onChange}
            pattern={"^.{5,}"}
            required
            title={"A profissão deve ter no mínimo 10 caracteres"}
          />

          <Select
            name={"country"}
            value={form.country}
            placeholder="País"
            onChange={onChange}
            required
          >
            <Option value={""} disabled>Escolha um país</Option> 
            {countries.map((item)=>{
              return <option value={item} key={item}>{item}</option>
            })}
          </Select>
          <Button type="submit">Enviar</Button>
        </Form>
      </DivForm>
      </Div>
      <Footer>
      <p>Projeto desenvolvido pela Aluna: Amanda Viana Fajardo</p>
      </Footer>
    </Home>
  );
}

export default ApplicationForm;
