import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type CommentCreateInput = {
  createdBy?: string | null;
  task?: TaskWhereUniqueInput | null;
  text?: string | null;
};
