//components
import { Heading } from "./components/Heading";

//css
import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Heading attr={123} attr2={"String"}>
        Ola mundo 1
      </Heading>
      <Heading>Ola mundo 2</Heading>
      <Heading>Ola mundo 3</Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aut.</p>
    </>
  );
}
