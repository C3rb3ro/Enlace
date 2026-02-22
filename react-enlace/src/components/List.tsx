import { MouseEvent } from "react";

type Props = {
  data: String[];
};

function List({ data }: Props) {
  const hadleClick = (e: MouseEvent) => console.log(e);

  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li onClick={hadleClick} key={elemento} className="list-group-item">
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
