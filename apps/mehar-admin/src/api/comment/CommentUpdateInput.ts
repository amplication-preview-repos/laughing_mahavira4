import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type CommentUpdateInput = {
  createdBy?: string | null;
  task?: TaskWhereUniqueInput | null;
  text?: string | null;
};
