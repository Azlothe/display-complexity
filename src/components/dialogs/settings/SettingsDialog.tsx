import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import BackgroundColor from "../content/settings/BackgroundColor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h4>Background Color</h4>
            </AccordionTrigger>
            <AccordionContent>
              <BackgroundColor />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
