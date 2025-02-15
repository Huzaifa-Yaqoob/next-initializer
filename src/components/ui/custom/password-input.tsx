import * as React from "react";
import { EyeOff, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "../input";

function PasswordInput({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className={cn("flex items-center border rounded-md", className)}>
      <Input
        type={showPassword ? "text" : "password"}
        className="border-none focus-visible:ring-0 shadow-none"
        {...props}
      />
      {showPassword ? (
        <EyeOff
          size={18}
          className="cursor-pointer opacity-50 mr-2"
          onClick={() => {
            setShowPassword(false);
          }}
        />
      ) : (
        <Eye
          size={18}
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
