import { CommentCreateNestedManyWithoutTasksInput } from "./CommentCreateNestedManyWithoutTasksInput";
import { FileCreateNestedManyWithoutTasksInput } from "./FileCreateNestedManyWithoutTasksInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  comments?: CommentCreateNestedManyWithoutTasksInput;
  description?: string | null;
  dueDate?: Date | null;
  files?: FileCreateNestedManyWithoutTasksInput;
  priority?: "Option1" | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
