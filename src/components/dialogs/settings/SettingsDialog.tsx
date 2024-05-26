import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import BackgroundColor from "../content/settings/BackgroundColor";

type TriggerProps = {
  triggerContent: ReactNode;
};

const SettingsDialog = ({ triggerContent }: TriggerProps) => {
  return (
    <Dialog>
      <DialogTrigger>{triggerContent}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h3>Settings</h3>
          </DialogTitle>
        </DialogHeader>
        <BackgroundColor />
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
