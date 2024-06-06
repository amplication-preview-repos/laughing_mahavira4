import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TicketWhereInput = {
  assignee?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  reporter?: StringNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
