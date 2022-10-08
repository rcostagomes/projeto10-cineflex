import { Header, Title, Filmes } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function MovieList() {
  const [AllFilmes, setAllFilmes] = useState([]);
  const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
  useEffect(() => {
    const promise = axios.get(URL);
    promise.then((resposta) => {
      const { data } = resposta;
      setAllFilmes(data);
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  return (
    <div>
      {AllFilmes.map((R) => {
        const { id, title, posterURL } = R;
        return (
          <div key={id}>
            <Link to={`/sessao/${id}`}>
              <img src={posterURL} alt={title} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default function Filme() {
  return (
    <>
      <Header>
      <Link to={"/"}> <h1> CINEFLEX </h1></Link>
      </Header>
      <Title>
        <h1>Selecione o filme </h1>
      </Title>
      <Filmes>
        <MovieList />
      </Filmes>
    </>
  );
}
