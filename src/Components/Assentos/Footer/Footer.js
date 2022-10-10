import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Footer(props) {
  const {sessaoID,TitleF,setTitleF,DayF,setDayF,Date,setDate, hora ,setHora }= props;
  const [banner, setBanner] = useState([]);
 

useEffect(()=> {
  const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoID}/seats`)
  promise.then((resposta)=>{
  setBanner(resposta.data.movie.posterURL)
  setTitleF(resposta.data.movie.title)
  setDayF(resposta.data.day.weekday)
  setDate(resposta.data.day.date)
  setHora(resposta.data.name)
promise.catch((resposta)=>{
  console.log("DEU RUIM",resposta )
})
  })
  },[sessaoID]
  )
  return (
    <BannerFilme>
      <div>
        <img src={banner} alt={TitleF} />
      </div>
      <h1>
        {TitleF} - {DayF} - {Date} - {hora}
      </h1>
    </BannerFilme>
  );
}

const BannerFilme = styled.div`
  width: 100%;
  height: 117px;
  display: flex;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  align-items: center;
  div {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 89px;
    left: 10px;
    bottom: 14px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  img {
    width: 48px;
    height: 72px;
    left: 18px;
    bottom: 23px;
  }
  h1 {
    margin-left: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
  }
`;
