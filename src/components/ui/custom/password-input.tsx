import * as React from "react";
import { TablerEye } from "@/components/svgs/TablerEye";
import { TablerEyeClosed } from "@/components/svgs/TablerEyeClosed";
import { cn } from "@/lib/utils";
import { Input } from "../input";

function PasswordInput({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div
      className={cn(
        "flex items-center border border-input rounded-md ring-ring/10 focus-within:ring-4 focus-within:outline",
        className
      )}
    >
      <Input
        type={showPassword ? "text" : "password"}
        className="border-none focus-visible:ring-0 focus-visible:outline-0 shadow-none"
        {...props}
      />
      {showPassword ? (
        <TablerEyeClosed
          width={20}
          height={20}
          className="cursor-pointer opacity-50 mr-2"
          onClick={() => {
            setShowPassword(false);
          }}
        />
      ) : (
        <TablerEye
          width={20}
          height={20}
          className="cursor-pointer opacity-50 mr-2"
          onClick={() => {
            setShowPassword(true);
          }}
        />
      )}
    </div>
  );
}

export { PasswordInput };
