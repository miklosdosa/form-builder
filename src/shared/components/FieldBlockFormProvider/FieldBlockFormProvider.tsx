import { DefaultValues, FormProvider, useForm } from "react-hook-form";
import { PropsWithChildren, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

type FieldBlockFormProviderProps = {
  defaultValues?: DefaultValues<any>;
  validationSchema?: any;
};

const FieldBlockFormProvider = ({
  defaultValues,
  validationSchema,
  children,
}: PropsWithChildren<FieldBlockFormProviderProps>) => {
  const methods = useForm({
    defaultValues,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
  });

  useEffect(() => {
    if (defaultValues !== undefined) {
      methods.reset({ ...defaultValues });
    }
  }, [defaultValues, methods]);

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export { FieldBlockFormProvider };
