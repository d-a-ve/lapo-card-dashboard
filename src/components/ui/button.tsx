import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import {
  ButtonHTMLAttributes,
  ComponentProps,
  DetailedHTMLProps,
  ReactNode,
} from "react";

const buttonVariants = cva(
  "relative px-4 py-3 flex items-center justify-center rounded-sm text-white font-medium leading-[1.2em] disabled:bg-opacity-40 disabled:cursor-not-allowed transition-all duration-150 ease-in cursor-pointer",
  {
    variants: {
      intent: {
        primary: "bg-primary border border-primary hover:bg-primary-300 hover:text-primary",
      },
      size: {
        sm: "text-xs py-2",
        md: "text-sm py-2.5",
        lg: "text-base py-3",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  },
);

interface ButtonVariants
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonVariants> {}

type WithLabel = {
  label: string;
  children?: undefined;
};

type WithChildren = {
  label?: undefined;
  children: ReactNode;
};

type LabelAndChildren = WithLabel | WithChildren;
interface IButtonProps extends ButtonVariants {
  className?: ComponentProps<"div">["className"];
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  spinnerColor?: string;
  spinnerSize?: string | number;
  contentClassName?: string;
}

export type ButtonProps = IButtonProps & LabelAndChildren;

function Button({
  isLoading,
  disabled,
  leftIcon,
  rightIcon,
  className,
  spinnerSize,
  label,
  children,
  contentClassName,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={(isLoading ?? disabled) || disabled}
      className={cn(buttonVariants(props), className)}
      {...props}
    >
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
        <svg
          width={spinnerSize ?? "20"}
          height={spinnerSize ?? "20"}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "animate-spin transition delay-[.2]",
            isLoading ? "visible opacity-100" : "hidden opacity-0",
          )}
        >
          <path
            fill="currentColor"
            d="M12 21a9 9 0 1 1 6.18-15.55a.75.75 0 0 1 0 1.06a.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 0 1 1.5 0a9 9 0 0 1-9 9Z"
          />
        </svg>
      </div>
      <p
        className={cn(
          "flex items-center justify-center gap-2",
          isLoading ? "opacity-0" : "opacity-100",
          contentClassName,
        )}
      >
        {leftIcon}
        {label ? label : children}
        {rightIcon && (
          <span
            style={{
              opacity: isLoading ? 0 : 1,
            }}
          >
            {rightIcon}
          </span>
        )}
      </p>
    </button>
  );
}

export default Button;
