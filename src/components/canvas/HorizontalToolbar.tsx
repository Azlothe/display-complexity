import Toolbar from "@mui/material/Toolbar";
import TopToolbar from "./toolbarContent/TopToolbar";
import { Position } from "@/data/enums/ToolbarPosition";
import BottomToolbar from "./toolbarContent/BottomToolbar";

interface Props {
  center: { x: number; y: number };
  zoom: number;
  position: Position;
}

function HorizontalToolbar({ center, zoom, position }: Props) {
  const renderContent = () => {
    switch (position) {
      case Position.TOP:
        return <TopToolbar center={center} zoom={zoom} />;
      case Position.BOTTOM:
        return <BottomToolbar />;
      default:
        return <></>;
    }
  };
  return (
    <>
      <Toolbar
        sx={{
          backgroundColor: "rgba(255, 184, 26, 0)",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          color: "#121212",
        }}
      >
        {renderContent()}
      </Toolbar>
    </>
  );
}

export default HorizontalToolbar;
