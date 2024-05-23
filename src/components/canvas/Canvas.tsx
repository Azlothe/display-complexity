import { useState } from "react";
import {
  P5CanvasInstance,
  ReactP5Wrapper,
  SketchProps,
} from "@p5-wrapper/react";
import { Tool, RGB } from "../../data/types/CanvasTypes";
import { Image } from "p5";
import { condensePixelArray } from "@/scripts/PixelMapper";

const DEFAULT_CENTER = { x: 0, y: 0 };
const DEFAULT_TOOL: Tool = "Pan";
const BG_COLOR: RGB = {
  r: 255,
  g: 255,
  b: 255,
};

interface Props {
  tool: Tool;
  center: { x: number; y: number };
  updateCenter: (center: { x: number; y: number }) => void;
  updateZoom: (zoom: number) => void;
}

function Canvas({ tool, center, updateCenter, updateZoom }: Props) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseMove, setIsMouseMove] = useState(false);
  const [isMouseScroll, setIsMouseScroll] = useState(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);
    setIsMouseScroll(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setIsMouseScroll(false);
  };

  const handleMouseMove = () => {
    if (isMouseDown) {
      setIsMouseMove(!isMouseMove);
    }
  };

  const handleMouseScroll = () => {
    setIsMouseScroll(!isMouseScroll);
  };

  return (
    <>
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleMouseScroll}
      >
        <ReactP5Wrapper
          sketch={sketch}
          pcenter={center}
          updateCenter={updateCenter}
          updateZoom={updateZoom}
          isMouseMove={isMouseMove}
          isMouseScroll={isMouseScroll}
          tool={tool}
        />
      </div>
    </>
  );
}

interface CustomCanvasProps extends SketchProps {
  pcenter: { x: number; y: number };
  updateCenter: (newCenter: { x: number; y: number }) => void;
  updateZoom: (zoom: number) => void;
  isMouseMove: boolean;
  isMouseScroll: boolean;
  tool: Tool;
}

function sketch(p5: P5CanvasInstance<CustomCanvasProps>) {
  let isP5Init = false;
  const center = DEFAULT_CENTER;
  let tool: Tool = DEFAULT_TOOL;

  let scaleFactor = 1;

  let hasChanged = true;

  const imgSrc: string =
    "https://static.vecteezy.com/system/resources/previews/025/220/125/non_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg";
  let img: Image;

  function handleImage(img: Image) {
    console.log(img);
    p5.image(img, center.x, center.y);
  }

  p5.preload = () => {
    img = p5.loadImage(imgSrc);
  };

  // run once on mount
  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    p5.background(BG_COLOR.r, BG_COLOR.g, BG_COLOR.b);
    p5.frameRate(60);
    isP5Init = true;
    img.loadPixels();
    console.log(condensePixelArray(img.pixels));
  };

  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
    p5.background(BG_COLOR.r, BG_COLOR.g, BG_COLOR.b);
  };

  // loops continuously
  p5.draw = () => {
    if (!hasChanged) return;

    if (tool === "Pan") {
      p5.background(BG_COLOR.r, BG_COLOR.g, BG_COLOR.b);
    }

    // zoom
    p5.scale(scaleFactor);

    // panning
    p5.translate(center.x, center.y);

    console.log("ran");
    handleImage(img);

    hasChanged = false;
  };

  p5.mouseDragged = () => {
    hasChanged = true;

    if (!isP5Init) return;

    if (p5.mouseButton === p5.LEFT) {
      switch (tool) {
        case "Pan":
          center.x += p5.mouseX - p5.pmouseX;
          center.y += p5.mouseY - p5.pmouseY;
          return;
      }
    }
  };

  p5.mouseWheel = (event: WheelEvent) => {
    scaleFactor *= event.deltaY < 0 ? 1.05 : 0.95;
    hasChanged = true;
  };

  p5.updateWithProps = (props: CustomCanvasProps) => {
    const newX = center.x === 0 ? 0 : -center.x;
    const newY = center.y === 0 ? 0 : -center.y;

    if (tool === "Pan" && props.isMouseMove) {
      if (newX !== props.pcenter.x && newY !== props.pcenter.y) {
        props.updateCenter({ x: newX, y: newY });
      }
    }

    if (props.isMouseScroll) {
      props.updateZoom(scaleFactor);
    }

    tool = props.tool;
  };
}

export default Canvas;
