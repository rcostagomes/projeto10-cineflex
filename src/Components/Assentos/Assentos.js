
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Assento from "./Assento/Assento";
import Footer from "./Footer/Footer";
import Inputs from "./input/Inputs";
import { Header, Title } from "./style";
export default function Assentos() {
  const [lugares, setLugares] = useState([]); // Pegas os lugares na API para fazer o map
  const [TitleF, setTitleF] = useState([]);  // Pega o titulo do Filme
  const [DayF,setDayF]= useState([]); // Pega o dia do filme 
  const [Date,setDate] = useState([]);// Pega a data do filme 
  const [nome, setNome] = useState(""); // Pega o nome do usuário
  const [cpf, setCpf] = useState(""); // Pega o cpf do usuário 
  const [save, setSave] = useState([]); // Salva o id dos filmes selecionados
  const [numero, setNumero]= useState([]); // Salva o numero do(os) assentos
  const [hora,setHora]= useState(); 
  const navigate = useNavigate();
  const { sessaoID } = useParams();
  return (
    <>
      <Header>
      <Link to={"/"}> <h1> CINEFLEX </h1></Link>
      </Header>
      <Title>
        <h1>Selecione o(s) assento(s)</h1>
      </Title>
      <Assento sessaoID={sessaoID}  lugares={lugares} setLugares={setLugares} save={save} setSave={setSave} numero={numero} setNumero={setNumero}  />
      <Inputs nome={nome} hora={hora} setNome={setNome} cpf={cpf} setCpf={setCpf} TitleF={TitleF} DayF={DayF}  Date={Date} save={save} navigate={navigate} numero={numero} setNumero={setNumero} />
      <Footer sessaoID={sessaoID} hora={hora} setHora={setHora} TitleF={TitleF} setTitleF={setTitleF} DayF={DayF} setDayF ={setDayF} Date={Date} setDate={setDate} />
    </>
  );
}
