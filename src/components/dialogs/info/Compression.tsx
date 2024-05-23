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

const Compression = ({ triggerContent }: TriggerProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        {triggerContent}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Compression</DialogTitle>
          <DialogDescription>How this works?</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Compression;
