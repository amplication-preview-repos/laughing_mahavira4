import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  assignee?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  reporter?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
