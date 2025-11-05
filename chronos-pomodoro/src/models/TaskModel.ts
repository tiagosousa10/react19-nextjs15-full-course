import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; //qnd o timer chega ao final
  interruptDate: number | null; //qnd o timer é interrompido
  type: keyof TaskStateModel["config"];
};
