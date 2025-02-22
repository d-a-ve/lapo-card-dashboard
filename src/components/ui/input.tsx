import { VariantProps, cva } from "class-variance-authority";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

export const inputVariants = cva(
  "relative px-3 py-2 flex items-center justify-center gap-2 rounded-lg transition-all select-none",
  {
    variants: {
      intent: {
        default:
          "border-solid border border-brand-input-border text-brand-title bg-white",
      },
      inputSize: {
        sm: "text-sm py-2",
        md: "text-base py-3",
        lg: "text-lg py-4",
      },
    },
    defaultVariants: {
      intent: "default",
      inputSize: "sm",
    },
  },
);

export interface InputVariants
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof inputVariants> {}

interface TextInputProps extends InputVariants {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeHolder?: string;
  isPasswordVisible?: boolean;
}

export const Input = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      leftIcon,
      rightIcon,
      type,
      isLoading,
      disabled,
      onChange,
      placeHolder,
      intent,
      inputSize,
      ...props
    },
    ref,
  ) => {
    const classNames = twMerge(
      inputVariants({ intent, inputSize }),
      className,
      disabled || isLoading ? "cursor-not-allowed border opacity-[.8]" : "",
    );
    return (
      <div className={classNames}>
        {leftIcon && leftIcon}
        <input
          onChange={onChange}
          type={type}
          className={twMerge(
            "hide-caret placeholder:text-brand-input-placeholder/90 w-full bg-transparent outline-none",
            (disabled ?? isLoading) ? "cursor-not-allowed" : "",
          )}
          placeholder={placeHolder ?? "Placeholder"}
          disabled={isLoading ?? disabled}
          ref={ref}
          {...props}
        />
        {rightIcon && rightIcon}
      </div>
    );
  },
);
Input.displayName = "Input";
