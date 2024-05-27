import ImageHistory from "@/components/history/ImageHistory";
import { Button } from "../../ui/button";
import SelectFilter from ".././SelectFilter";

interface Props {
  center: { x: number; y: number };
  zoom: number;
}
const TopToolbar = ({ center, zoom }: Props) => {
  return (
    <>
      <b
        className="block -ml-2"
        style={{
          fontFamily: "Montserrat, sans-serif",
          textShadow:
            "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
        }}
      >
        <div className="flex flex-col">
          <span>
            Position: ({center.x}, {center.y})
          </span>
          <span>Zoom: {zoom.toPrecision(2)}x</span>
        </div>
      </b>

      <SelectFilter />
      <ImageHistory
        triggerContent={
          <Button className="-mr-2" variant="secondary">
            History
          </Button>
        }
      />
    </>
  );
};

export default TopToolbar;
