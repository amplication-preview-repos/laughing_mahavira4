import { Comment } from "../comment/Comment";
import { File } from "../file/File";
import { Project } from "../project/Project";

export type Task = {
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  files?: Array<File>;
  id: string;
  priority?: "Option1" | null;
  project?: Project | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
