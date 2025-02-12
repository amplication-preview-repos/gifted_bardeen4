import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  name?: "Boutique" | "Department";
};
