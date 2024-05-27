import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  getCurrentIndex,
  getHistoryLength,
  getImagesSrc,
  setCurrentIndex,
} from "@/redux/slices/canvasSlice";

type TriggerProps = {
  triggerContent: ReactNode;
};

const ImageHistory = ({ triggerContent }: TriggerProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(useAppSelector(getCurrentIndex));

  const count = useAppSelector(getHistoryLength);
  const images = useAppSelector(getImagesSrc);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const dispatch = useAppDispatch();

  return (
    <Drawer>
      <DrawerTrigger>{triggerContent}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Image History</DrawerTitle>
          <DrawerDescription>
            Click on an image to display it on the canvas.
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-full flex flex-col justify-center items-center">
          <Carousel
            setApi={setApi}
            className="w-5/6"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="w-full">
              {images.map((src, index) => (
                <DialogClose asChild>
                  <CarouselItem
                    key={index}
                    className="basis-1/5 cursor-pointer"
                    onClick={() => dispatch(setCurrentIndex(index))}
                  >
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center justify-center gap-4 p-4">
                        <img src={src}></img>
                        <span className="text-xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </DialogClose>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Image {current} of {count}
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ImageHistory;
