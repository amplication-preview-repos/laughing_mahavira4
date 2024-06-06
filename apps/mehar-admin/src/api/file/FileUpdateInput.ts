import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type FileUpdateInput = {
  fileName?: string | null;
  fileUrl?: string | null;
  task?: TaskWhereUniqueInput | null;
  uploadedBy?: string | null;
};
