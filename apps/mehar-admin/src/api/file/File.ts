import { Task } from "../task/Task";

export type File = {
  createdAt: Date;
  fileName: string | null;
  fileUrl: string | null;
  id: string;
  task?: Task | null;
  updatedAt: Date;
  uploadedBy: string | null;
};
