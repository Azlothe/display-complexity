import { ReactNode } from "react";
import { Input } from "../../ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Option } from "@/data/enums/UploadOption";

type UploadImageProps = {
  updateFile: (file: File) => void;
  updateURL: (link: string) => void;
  updateOption: (option: Option) => void;
  submitAction: ReactNode;
};

const UploadImage = ({
  updateFile,
  updateURL,
  updateOption,
  submitAction,
}: UploadImageProps) => {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger onClick={() => updateOption(Option.FILE)}>
            <h4>File Upload</h4>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex w-full items-center gap-3">
              <Input
                id="picture"
                type="file"
                accept=".png,.jpg,.svg"
                onChange={(e) => {
                  if (e.target.files) updateFile(e.target.files[0]);
                }}
              />
              {submitAction}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger onClick={() => updateOption(Option.URL)}>
            <h4>URL Link</h4>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex w-full items-center gap-3">
              <Input
                placeholder="Enter Image URL Link"
                className="m-1"
                onChange={(e) => updateURL(e.target.value)}
              />
              {submitAction}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default UploadImage;
