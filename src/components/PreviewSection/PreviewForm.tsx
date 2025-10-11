import { useFormContext } from "react-hook-form";
import { FieldBlock } from "../../shared/components/FieldBlock";
import { Button } from "../../shared/components/Button";
import { Stack } from "@mui/material";
// import hash from "object-hash";
import { DisplayRules, FormDefinition } from "../../shared/types";

type PreviewFormProps = {
  fields: FormDefinition;
  displayRules?: DisplayRules;
};

const PreviewForm = ({ fields, displayRules }: PreviewFormProps) => {
  // const formKey = hash(fields);
  const methods = useFormContext();
  const { handleSubmit } = methods;

  const handleValid = (data: unknown) => {
    alert(JSON.stringify(data));
  };

  const handleInvalid = (data: any) => {
    const errors = Object.keys(data).map((key) => ({
      field: key,
      type: data[key].type,
    }));
    console.log(JSON.stringify(errors));
  };

  return (
    <form
      /* key={formKey} */ onSubmit={handleSubmit(handleValid, handleInvalid)}
    >
      <Stack direction="column" spacing={2}>
        {fields.map((field) => (
          <FieldBlock
            key={field.id}
            definition={field}
            displayRules={displayRules?.[field.name]}
          />
        ))}
        <div>
          <Button label="Submit" type="submit" />
        </div>
      </Stack>
    </form>
  );
};

export { PreviewForm };
