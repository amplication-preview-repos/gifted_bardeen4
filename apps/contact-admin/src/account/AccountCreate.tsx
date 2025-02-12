import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectInput } from "react-admin";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
