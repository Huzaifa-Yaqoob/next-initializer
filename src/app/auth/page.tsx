import Link from "next/link";
import Register from "@/components/forms/auth-forms/Register";
import LogIn from "@/components/forms/auth-forms/LogIn";
import { Button } from "@/components/ui/button";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function Auth({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // In next js 15 it`s essential to use await before accessing any kind of params
  const { auth } = await searchParams;
  return (
    <main className="m-auto">
      <div className="flex items-center flex-col justify-center min-w-[340px] md:min-w-[500px] space-y-8">
        <h1 className="text-6xl font-bold">
          {auth === "register" ? "Register" : "Log In"}
        </h1>
        {auth === "register" ? <Register /> : <LogIn />}
        <>
          {auth === "register" ? (
            <span className="text-left w-full">
              Don`t have an account?{" "}
              <Button variant={"link"} className="h-fit p-0 text-base" asChild>
                <Link href={"/auth"}>Log in</Link>
              </Button>
            </span>
          ) : (
            <span className="text-left w-full">
              Already have an account?{" "}
              <Button variant={"link"} className="h-fit p-0 text-base" asChild>
                <Link href={"/auth?auth=register"}>Register</Link>
              </Button>
            </span>
          )}
        </>
      </div>
    </main>
  );
}
