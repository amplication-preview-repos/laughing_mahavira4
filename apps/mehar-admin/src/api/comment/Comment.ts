import { Task } from "../task/Task";

export type Comment = {
  createdAt: Date;
  createdBy: string | null;
  id: string;
  task?: Task | null;
  text: string | null;
  updatedAt: Date;
};
