import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
