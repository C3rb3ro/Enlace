import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;

  const width = {
    width: "350px",
  };
  return (
    <div className="card" style={width}>
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProp {
  title: String;
  text: string;
}

export function Cardbody(props: CardBodyProp) {
  const { title, text } = props;

  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}

export default Card;
