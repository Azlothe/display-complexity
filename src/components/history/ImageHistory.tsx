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
import { useAppSelector } from "@/redux/hooks";
import { getImagesSrc } from "@/redux/slices/historySlice";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type TriggerProps = {
  triggerContent: ReactNode;
};

const ImageHistory = ({ triggerContent }: TriggerProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const images = useAppSelector(getImagesSrc);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Drawer>
      <DrawerTrigger>{triggerContent}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Image History</DrawerTitle>
          <DrawerDescription>
            Click on an image to show it on the main page.
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
                <CarouselItem key={index} className="basis-1/5">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center gap-4 p-4">
                      <img src={src}></img>
                      <span className="text-xl font-semibold">
                        Image {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
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
