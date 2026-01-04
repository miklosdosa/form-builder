import { IconButton, useDialog } from "@repo/ui";
import { Preview as FormPreview } from "../Preview/Preview";

const Preview = () => {
  const { open } = useDialog();
  return (
    <IconButton
      tooltipTitle="Preview"
      iconName="Launch"
      onClick={() =>
        open({
          title: "Preview",
          content: FormPreview,
          fullScreen: true,
          closeButton: "Close",
        })
      }
    />
  );
};

export { Preview };
