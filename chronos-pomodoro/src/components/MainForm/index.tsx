import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../pages/Home";

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState((prevState) => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: "23:34",
      };
    });
  }
  return (
    <form action="" className="form">
      <div>
        <button type="button" onClick={handleClick}>
          Clicar
        </button>
      </div>
      <div className="formRow">
        <DefaultInput id="meuInput" type="text" labelText={"task"} />
      </div>

      <div className="formRow">
        <p>Proximo intervalo é de {state.config.shortBreakTime}</p>
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
