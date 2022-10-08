//import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assentos from "../Assentos/Assentos";
import GlobalStyle from "../GlobalStyle";
import Filme from "../Filme/Filme";
import Sessão from "../Sessão/Sessão";
import Sucesso from "../Sucesso/Sucesso";
import { useState } from "react";

export default function App() {
  const [Horarios, setHorarios] = useState([]);
  


  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filme />}></Route>
          <Route path="/sessao/:filmeID" element={<Sessão Horarios={Horarios} setHorarios={setHorarios} />}></Route>
          <Route path="/assentos/:sessaoID" element={<Assentos />}></Route>
          <Route path="/sucesso" element={<Sucesso Horarios={Horarios} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
