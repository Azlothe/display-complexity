import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { useAppSelector } from "@/redux/hooks";
import { getImgSrc } from "@/redux/slices/canvasSlice";
import { downloadFromURL } from "@/services/DownloadService";
import { IoMdDownload } from "react-icons/io";

type TriggerProps = {
  triggerContent: ReactNode;
};

const SaveImage = ({ triggerContent }: TriggerProps) => {
  const { src } = useAppSelector(getImgSrc);

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerContent}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Save Image</DialogTitle>
          <DialogDescription>
            You can copy the image address or download the image.
          </DialogDescription>
        </DialogHeader>
        <span className="font-semibold">Image Address</span>
        <div className="flex flex-col w-full gap-3.5">
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-4">
              <Input defaultValue={src} readOnly />
            </div>
            <Button
              size="sm"
              className="px-3 bg-black text-white"
              variant="outline"
              onClick={() => navigator.clipboard.writeText(src)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={() => downloadFromURL(src, "image")}>
            <IoMdDownload className="mx-2" />
            Download
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SaveImage;
