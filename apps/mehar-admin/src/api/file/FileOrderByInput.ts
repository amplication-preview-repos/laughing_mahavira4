import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  createdAt?: SortOrder;
  fileName?: SortOrder;
  fileUrl?: SortOrder;
  id?: SortOrder;
  taskId?: SortOrder;
  updatedAt?: SortOrder;
  uploadedBy?: SortOrder;
};
