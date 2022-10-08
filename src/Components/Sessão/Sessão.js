import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer/Footer";
import Horario from "./Horario/Horario";
import { Header, Title } from "./style";
export default function Sessão(props) {
  const {Horarios, setHorarios} = props
  const [Banner, setBanner] = useState({});
  const { filmeID } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeID}/showtimes`
    );

    promise.then((resposta) => {
      const { days, title, posterURL } = resposta.data;
      setHorarios(days);
      setBanner({ title, posterURL });
    });
  }, [filmeID]);

  return (
    <>
      <Header>
      <Link to={"/"}> <h1> CINEFLEX </h1></Link>
      </Header>
      <Title>
        <h1> Selecione o horário</h1>
      </Title>

      <Horario Horarios={Horarios} />

      <Footer Banner={Banner} />
    </>
  );
}
