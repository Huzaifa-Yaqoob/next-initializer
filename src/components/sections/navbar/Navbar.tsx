import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavLink from "./NavLink";
import NavSheet from "./NavSheet";

export default function Navbar() {
  return (
    <>
      <NavSheet />
      <div className="hidden md:block md:order-2">
        <NavLink />
      </div>
      <h1 className="text-xl font-black md:order-1">Logo</h1>
      <Button type="button" className="md:order-3" asChild>
        <Link href={"/auth"}>Sig In</Link>
      </Button>
    </>
  );
}
