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
import { ChatRoomWhereUniqueInput } from "../../chatRoom/base/ChatRoomWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MessageCreateInput {
  @ApiProperty({
    required: false,
    type: () => ChatRoomWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChatRoomWhereUniqueInput)
  @IsOptional()
  @Field(() => ChatRoomWhereUniqueInput, {
    nullable: true,
  })
  chatRoom?: ChatRoomWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sender?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  sentAt?: Date | null;
}

export { MessageCreateInput as MessageCreateInput };
