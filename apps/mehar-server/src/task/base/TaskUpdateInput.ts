/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentUpdateManyWithoutTasksInput } from "./CommentUpdateManyWithoutTasksInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { FileUpdateManyWithoutTasksInput } from "./FileUpdateManyWithoutTasksInput";
import { EnumTaskPriority } from "./EnumTaskPriority";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { EnumTaskStatus } from "./EnumTaskStatus";

@InputType()
class TaskUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutTasksInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutTasksInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => FileUpdateManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => FileUpdateManyWithoutTasksInput)
  @IsOptional()
  @Field(() => FileUpdateManyWithoutTasksInput, {
    nullable: true,
  })
  files?: FileUpdateManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    enum: EnumTaskPriority,
  })
  @IsEnum(EnumTaskPriority)
  @IsOptional()
  @Field(() => EnumTaskPriority, {
    nullable: true,
  })
  priority?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumTaskStatus,
  })
  @IsEnum(EnumTaskStatus)
  @IsOptional()
  @Field(() => EnumTaskStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { TaskUpdateInput as TaskUpdateInput };
