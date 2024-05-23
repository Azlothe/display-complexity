import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CanvasPage from "./pages/CanvasPage";
import StaticAlgorithms from "./pages/StaticAlgorithms";

function App() {
  return (
    <div className="w-screen h-screen">
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
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <StaticAlgorithms />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">RLHF</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>

        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
