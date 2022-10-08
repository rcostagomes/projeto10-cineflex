import axios from "axios";
import styled from "styled-components"
export default function Inputs(props){

const {cpf, setCpf, nome ,navigate, setNome, Date, TitleF,save,numero,hora } = props
function enviarDados(event) {
    event.preventDefault();
    const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
      ids: save,
      name: nome,
      cpf: cpf,
    });
    promise.then((response) => {
      navigate("/sucesso", { state: { TitleF, Date,  save, nome, cpf ,numero,hora } });
    });
    promise.catch((err) => alert("deu ruim"));
  }

console.log(cpf)
console.log(nome)
return(
<Main>

<form onSubmit={enviarDados}>   
<h1> Nome do comprador: </h1>
<Input type="text" name="text" placeholder="Digite seu nome..." required onChange={(e)=> setNome(e.target.value) }></Input>
<h1> CPF do comprador: </h1>
<Input type="text" name="text" placeholder="Digite seu CPF..." required onChange={(e)=> setCpf(e.target.value) } ></Input>
<Button type="submit" >Reservar assento(s)</Button> 
</form>

</Main>


)
}

const Main  = styled.div`
 width: 100%;
 margin-top: 40px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 form{
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 h1{
margin-top: 20px;
margin-left: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
 }
`

const Input = styled.input`
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
margin-left: 10px;
width: 327px;
height: 51px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
`
const Button = styled.button`
cursor: pointer;
margin-top: 20px;
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
color: white;
margin-bottom: 100px;

`