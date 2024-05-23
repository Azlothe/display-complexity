import { Button } from "@/components/ui/button";

const StaticAlgorithms = () => {
  return (
    <div>
      <h3 className="text-center m-6">Display Complexity Calculations</h3>
      <div className="flex flex-row gap-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-center text-gray-600">10</h1>
          <Button variant="secondary">Compression</Button> 
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-center text-gray-600">10</h1>
          <Button variant="secondary">Image Segmentation</Button>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-center text-gray-600">10</h1>
          <Button variant="secondary">Brightest</Button>
        </div>
      </div>
    </div>
  );
};

export default StaticAlgorithms;
