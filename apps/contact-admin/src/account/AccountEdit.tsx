import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectInput } from "react-admin";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="name"
          label="name"
          choices={[
            { label: "boutique", value: "Boutique" },
            { label: "department", value: "Department" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
