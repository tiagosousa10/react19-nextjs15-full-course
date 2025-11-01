//components
import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

//css
import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Heading>
        Hello
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aut.</p>
    </>
  );
}
