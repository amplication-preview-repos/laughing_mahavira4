import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  files?: FileListRelationFilter;
  id?: StringFilter;
  priority?: "Option1";
  project?: ProjectWhereUniqueInput;
  status?: "Option1";
  title?: StringNullableFilter;
};
