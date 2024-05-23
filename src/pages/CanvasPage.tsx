import Canvas from "../components/canvas/Canvas.tsx";
import { useEffect, useState } from "react";
import VerticalToolbar from "../components/canvas/VerticalToolbar.tsx";
import HorizontalToolbar from "../components/canvas/HorizontalToolbar.tsx";
import { Tool } from "../data/types/CanvasTypes.ts";
import { Position } from "@/data/enums/ToolbarPosition.ts";

const DEFAULT_TOOL: Tool = "Pan";

function CanvasPage() {
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [tool, setTool] = useState<Tool>(DEFAULT_TOOL);

  const updateCenter = (newCenter: { x: number; y: number }) => {
    setCenter(newCenter);
  };

  const updateZoom = (zoom: number) => {
    setZoom(zoom);
  };

  const updateTool = (tool: Tool) => {
    setTool(tool);
  };

  useEffect(() => {
    console.log("switch to " + tool + " tool");
  }, [tool]);

  return (
    <>
      <div className="bg-gray-500 flex justify-center items-center w-full h-screen relative">
        <div className="absolute top-0 left-0 w-full">
          <HorizontalToolbar center={center} zoom={zoom} position={Position.TOP} />
        </div>

        <VerticalToolbar updateTool={updateTool} />

        <Canvas
          tool={tool}
          center={center}
          updateCenter={updateCenter}
          updateZoom={updateZoom}
        />
       <div className="absolute bottom-0 left-0 w-full">
          <HorizontalToolbar center={center} zoom={zoom} position={Position.BOTTOM} />
        </div> 
      </div>
    </>
  );
}

export default CanvasPage;
