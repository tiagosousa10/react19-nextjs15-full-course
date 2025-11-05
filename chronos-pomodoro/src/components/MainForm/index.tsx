import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";

export function MainForm() {
  return (
    <form action="" className="form">
      <div className="formRow">
        <DefaultInput id="meuInput" type="text" labelText={"task"} />
      </div>

      <div className="formRow">
        <p>Proximo intervalo é de 25min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
