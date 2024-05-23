import UploadImage from "@/components/dialogs/content/UploadImage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type TriggerProps = {
  triggerContent: ReactNode;
};

const UploadDialog = ({ triggerContent }: TriggerProps) => {
  return (
    <Dialog>
      <DialogTrigger>{triggerContent}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h4>Upload Image</h4>
          </DialogTitle>
          <DialogDescription>
            Accepted file formats: .png, .jpg, .svg
          </DialogDescription>
        </DialogHeader>
        <UploadImage />
      </DialogContent>
    </Dialog>
  );
};

export default UploadDialog;
