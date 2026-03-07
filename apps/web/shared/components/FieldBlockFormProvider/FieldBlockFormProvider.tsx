"use client";
import { DefaultValues, FormProvider, useForm } from "react-hook-form";
import { PropsWithChildren, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

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
    resolver: validationSchema ? zodResolver(validationSchema) : undefined,
  });

  useEffect(() => {
    console.log("defaultValues", defaultValues);
    if (defaultValues !== undefined) {
      methods.reset({ ...defaultValues });
    }
  }, [defaultValues, methods]);

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export { FieldBlockFormProvider };
