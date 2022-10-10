import axios from "axios";
import { useEffect, useState } from "react";
import { Cor,Cadeiras,Demos,Main,CadeiraOcupada } from "./style";


function CadeiraLivre({name,id,save,setSave,numero,setNumero}){
const [selecionado,setSelecionado] = useState(false) // Seleciona os assentos 
function marcarLugar(id,name){
  console.log(save.includes(id),numero.includes(name))

  if (selecionado === true ){
    setSelecionado(false) 
    setSave([...save.filter((ID)=> ID !== id )])
    setNumero([...numero.filter((ID)=> ID !== name)])
    
  }else {
    setSelecionado(true)
    setSave([...save,id])
    setNumero([...numero,name])
  }
  
}
 

return(
  <div onClick={()=> marcarLugar(id,name)}
   style={{cursor:"pointer", backgroundColor: `${ selecionado === false ?  "#C3CFD9" : "#1AAE9E" }` }}>
  <p> {name} </p> 
  </div>
)

}
function Cores (props){
const {cor,text} = props
return(
<Cor>
    <div style={{ backgroundColor: `${cor}`}}></div>
    <h1>{text}</h1>
</Cor>
)}


export default function Assento(props) {


  const {lugares, setLugares,save,setSave, numero, setNumero,sessaoID} = props
 

  useEffect(()=> {
  const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoID}/seats`)
  promise.then((resposta)=>{
setLugares(resposta.data.seats)
promise.catch((resposta)=>{
  console.log("DEU RUIM",resposta )
})
  })
  },[sessaoID]
  )

  return (
    <Main> 
    <Cadeiras>
    {lugares.map((L)=>{
const {id,name,isAvailable} = L;
return(
  isAvailable === true ? <CadeiraLivre isAvailable={isAvailable}  id= {id} name={name} key={id} save={save} setSave={setSave} numero={numero} setNumero={setNumero} /> 
  : 
  <CadeiraOcupada 
   key={id}
   style={{cursor:"not-allowed", backgroundColor: `${"#FBE192"}` }}> 
   <p onClick= {()=> {alert("Esse assento não esta disponível")}}> {name} </p>  
   </CadeiraOcupada>
)
    })}
    </Cadeiras>
    <Demos>
    <Cores cor = {"#1AAE9E" } text = {"Selecionado"} /> 
    <Cores cor = {"#C3CFD9"} text = {"Disponível"} /> 
    <Cores cor = {"#FBE192"} text = {"Indisponível"} /> 
    </Demos>
    </Main>
  );
}


