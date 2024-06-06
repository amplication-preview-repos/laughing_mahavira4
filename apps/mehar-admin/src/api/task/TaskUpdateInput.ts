import { CommentUpdateManyWithoutTasksInput } from "./CommentUpdateManyWithoutTasksInput";
import { FileUpdateManyWithoutTasksInput } from "./FileUpdateManyWithoutTasksInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  comments?: CommentUpdateManyWithoutTasksInput;
  description?: string | null;
  dueDate?: Date | null;
  files?: FileUpdateManyWithoutTasksInput;
  priority?: "Option1" | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
