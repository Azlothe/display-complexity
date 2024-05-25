import UploadImage from "@/components/dialogs/content/UploadImage";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Option } from "@/data/enums/UploadOption";
import { useAppDispatch } from "@/redux/hooks";
import { updateImgSrc } from "@/redux/slices/canvasSlice";
import { ReactNode, useState } from "react";

type TriggerProps = {
  triggerContent: ReactNode;
};

const UploadDialog = ({ triggerContent }: TriggerProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [url, setURL] = useState<string>("");
  const [option, setOption] = useState<Option | null>(null);

  const dispatch = useAppDispatch();
  const reader = new FileReader();

  const updateFile = (file: File) => {
    setUploadedFile(file);
  };

  const updateURL = (link: string) => {
    setURL(link);
  };

  const updateOption = (option: Option) => {
    setOption(option);
  };

  const handleUpdate = () => {
    console.log(uploadedFile, url, option);

    switch (option) {
      case Option.FILE:
        reader.onload = () => {
          dispatch(updateImgSrc(reader.result));
        };

        reader.readAsDataURL(uploadedFile!);

        break;
      case Option.URL:
        dispatch(updateImgSrc(url));
        break;
    }

    setUploadedFile(null);
    setURL("");
  };

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
        <UploadImage
          updateFile={updateFile}
          updateURL={updateURL}
          updateOption={updateOption}
          submitAction={
            <DialogClose>
              <Button
                type="submit"
                variant="outline"
                className="bg-black text-white"
                onClick={handleUpdate}
              >
                Submit
              </Button>
            </DialogClose>
          }
        />
      </DialogContent>
    </Dialog>
  );
};

export default UploadDialog;
