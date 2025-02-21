import { HugeiconsMenu06 } from "@/components/svgs";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import NavLink from "./NavLink";

export default function NavSheet() {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="md:hidden">
        <HugeiconsMenu06 />
      </DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle className="sr-only">Nav Sheet</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-scroll p-4 h-full">
          <NavLink />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
