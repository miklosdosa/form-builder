import { useFormContext } from "react-hook-form";
import { useBoundStore } from "../../store/formEditorStore";
import { useEffect } from "react";

const useSetFormErrors = () => {
  const errors = useBoundStore((state) => state.errors);
  const { setError } = useFormContext();

  useEffect(() => {
    errors.forEach((error) => {
      setError(error.propertyName as string, { message: error.code });
    });
  }, [errors, setError]);

  return { errors };
};

export { useSetFormErrors };
