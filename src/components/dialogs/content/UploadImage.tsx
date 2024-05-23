import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const UploadImage = () => {
  return (
    <>
      <div className="flex w-full items-center gap-3">
        <Input id="picture" type="file" accept=".png,.jpg,.svg" />
        <Button type="submit" variant="outline" className="bg-black text-white" >
          Submit
        </Button>
      </div>
    </>
  );
};

export default UploadImage;
