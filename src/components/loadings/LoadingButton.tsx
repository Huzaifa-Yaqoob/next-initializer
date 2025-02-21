import { HugeiconsLoading03 } from "../svgs";
import { cx } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "../ui/button";

export default function LoadingButton({
  className,
  isLoading,
  loadingText = "Loading...",
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading: boolean;
    children?: React.ReactNode;
    loadingText?: string;
  }) {
  return (
    <Button
      type="submit"
      className={
        isLoading
          ? cx("disabled:cursor-wait disabled:pointer-events-auto", className)
          : className
      }
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <LoadingChildren text={loadingText} /> : children}
    </Button>
  );
}

export function LoadingChildren({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-2">
      <HugeiconsLoading03 className="animate-spin" />
      {text}
    </span>
  );
}
