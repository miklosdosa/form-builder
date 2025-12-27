import { Controller, useFormContext } from "react-hook-form";
import { FieldGroup } from "../FieldGroup";
import { CheckboxField } from "../Fields";

const CheckboxGroupBlock = ({ definition, options }: any) => {
  const { control } = useFormContext();
  return (
    <FieldGroup label={definition.label}>
      <Controller
        name={definition.name}
        control={control}
        render={({ field }) => {
          const { value, onChange } = field;
          const handleCheckboxChange = (checkboxValue: string[]) => {
            if (value?.includes(checkboxValue)) {
              onChange(value.filter((v: string[]) => v !== checkboxValue));
            } else {
              onChange([...value, checkboxValue]);
            }
          };

          return (
            <>
              {options.map((option: any) => (
                <CheckboxField
                  key={option.id}
                  label={option.label}
                  {...field}
                  checked={value?.includes(option.value)}
                  onChange={() => handleCheckboxChange(option.value)}
                />
              ))}
            </>
          );
        }}
      />
    </FieldGroup>
  );
};

export { CheckboxGroupBlock };
