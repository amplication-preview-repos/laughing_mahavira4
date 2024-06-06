import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type FileCreateInput = {
  fileName?: string | null;
  fileUrl?: string | null;
  task?: TaskWhereUniqueInput | null;
  uploadedBy?: string | null;
};
