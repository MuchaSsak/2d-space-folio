import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import LoadingSpinner from "@/components/LoadingSpinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md bg-gradient-to-b from-[rgba(60,8,126,0.20)] via-[rgba(60,8,126,0.6)] to-[rgba(113,47,255,0.20)] shadow-[inset_0_0_0.75rem_#bf97ff55;] hover:shadow-[inset_0_0_0.75rem_#bf97ffbb;] hover:from-[rgba(60,8,126,0.40)] hover:via-[rgba(60,8,126,1)] hover:to-[rgba(113,47,255,0.40)] focus-visible:shadow-[inset_0_0_0.75rem_#bf97ffbb;] focus-visible:from-[rgba(60,8,126,0.40)] focus-visible:via-[rgba(60,8,126,1)] focus-visible:to-[rgba(113,47,255,0.40)] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-none text-secondary-foreground hover:bg-secondary/80 focus-visible:bg-secondary/80 focus-visible:ring-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, isLoading = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    // Loading spinner inside a loading button
    const children = isLoading ? (
      <>
        <LoadingSpinner />
        <span className="pl-2">{props.children}</span>
      </>
    ) : (
      props.children
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={props.disabled || isLoading}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
