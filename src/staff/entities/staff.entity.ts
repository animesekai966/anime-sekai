import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Staff } from "src/@generated/staff/staff.model";
import { BasePage } from "src/util.graphql";

@ObjectType()
export class StaffPage extends BasePage {
  @Field(() => [Staff])
  staff: Staff[];
}
