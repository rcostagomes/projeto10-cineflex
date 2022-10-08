import { Link } from "react-router-dom";
import { Horas, Options } from "./style";
export default function Horario({ Horarios }) {
  return (
    <>
      {Horarios.map((H) => {
        const { weekday, showtimes, id, date } = H;
        return (
          <Options key={id}>
            <h1>
              {weekday} {" - "} {date}
            </h1>

            <Horas>
              {showtimes.map((s) => {
                const { id, name } = s;
                return (
                  <Link key={id} to={`/assentos/${id}`}>
                    <div> {name}</div>
                  </Link>
                );
              })}
            </Horas>
          </Options>
        );
      })}
    </>
  );
}
