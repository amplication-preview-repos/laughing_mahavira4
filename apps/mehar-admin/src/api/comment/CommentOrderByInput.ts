import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  taskId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
