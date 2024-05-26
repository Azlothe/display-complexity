import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CanvasPage from "./pages/CanvasPage";
import StaticAlgorithms from "./pages/StaticAlgorithms";
import RLHF from "./pages/RLHF";
import { IoMdSettings } from "react-icons/io";
import SettingsDialog from "./components/dialogs/settings/SettingsDialog";
import { useAppSelector } from "./redux/hooks";
import { getBottomBG, getTopBG } from "./redux/slices/settingsSlice";

function App() {
  const topBG: string = useAppSelector(getTopBG);
  const bottomBG: string = useAppSelector(getBottomBG);

  return (
    <div className="w-screen h-screen">
      <div className="fixed right-2 bottom-2 z-10">
        <SettingsDialog triggerContent={<IoMdSettings className="h-7 w-7" />} />
      </div>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={30} className="min-w-64">
          <div className="flex h-full items-center justify-center">
            <CanvasPage />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50} style={{ backgroundColor: topBG }}>
              <div className="flex h-full items-center justify-center p-6">
                <StaticAlgorithms />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={50}
              style={{ backgroundColor: bottomBG }}
            >
              <div className="flex h-full items-center justify-center p-6">
                <RLHF />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
