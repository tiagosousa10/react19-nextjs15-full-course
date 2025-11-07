import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export function Cycles() {
  const { state } = useTaskContext();

  const cycleSteps = Array.from({ length: state.currentCycle });
  console.log("🚀 ~ Cycles ~ cycleSteps:", cycleSteps);

  const cycleDescriptionMap = {
    workTime: "Foco",
    shortBreakTime: "Pausa curta",
    longBreakTime: "Pausa longa",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos: </span>

      <div className={styles.cycleDots}>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indica de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indica de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
