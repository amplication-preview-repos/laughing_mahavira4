import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type FileWhereInput = {
  fileName?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  id?: StringFilter;
  task?: TaskWhereUniqueInput;
  uploadedBy?: StringNullableFilter;
};
