import { Link, useLocation } from "react-router-dom";
import { Header, Title,Main, Inicio } from "./style";
export default function Sucesso() {
  const navigate = useLocation();

  const {state} = navigate
  const {TitleF,cpf,nome,Date,numero,hora} = state
  console.log(state)
  console.log(navigate)
  return (
    <>
      <Header>
         <Link to={"/"}> <h1> CINEFLEX </h1></Link>
      </Header>
      <Title>
        <h1>Pedido feito com sucesso! </h1>
      </Title>
      <Main>
      <h1> Filme e sessão </h1>
      <h2>{TitleF} </h2>
      <h2>{Date} - {hora} </h2>
      <h1> Ingressos </h1>
      {numero.map((n,i)=>{return (<h2 key={i} >Assento {n}  </h2>)})} 
      <h1> Comprador </h1>
      <h2><strong>Nome:</strong> {nome} </h2>
      <h2><strong>CPF:</strong>{cpf}</h2>
      </Main>
      <Link to={"/"}> <Inicio>Voltar pra Home</Inicio></Link>
    </>
  );
}
