//import { useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Filme from "../Filme/Filme";
import GlobalStyle from "../GlobalStyle";
import Home from "../Home/Home";





export default function App() {
  //const [FilmeID, setFilmeID] = useState()

//   function id(idf){
// setFilmeID(idf)

//   }




    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/filme/:filmeID"  element={ <Filme/> }></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }