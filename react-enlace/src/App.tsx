import Card, { Cardbody } from "./components/Card";
import List from "./components/List";

function App() {
  const lista = ["Goku", "Tangiro", "Eren"];

  return (
    <Card>
      <Cardbody title="Hola Mundo" text="Este es el texto" />
      <List data={lista} />
    </Card>
  );
}

export default App;
