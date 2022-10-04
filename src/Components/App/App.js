import { BrowserRouter,Route,Routes } from "react-router-dom";
import Filme from "../Filme/Filme";
import GlobalStyle from "../GlobalStyle";
import Home from "../Home/Home";



export default function App() {
  
    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/filme" element={ <Filme/> }></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }