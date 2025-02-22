import { DistributiveOmit } from "@/types";
import { Check } from "lucide-react";
import { ComponentProps, ReactNode } from "react";

type CheckboxGroup<T extends { name: string; value: string }> =
  DistributiveOmit<ComponentProps<"input">, "name" | "type" | "checked"> & {
    renderCheckbox: (value: T, index: number) => ReactNode;
    values: T[];
    checked?: (value: T) => boolean;
  };

export function CheckboxGroup<TGroup extends { name: string; value: string }>({
  renderCheckbox,
  className,
  values,
  checked,
  ...props
}: CheckboxGroup<TGroup>) {
  return (
    <div className={className}>
      {values.map((value, i) => (
        <div className="relative" key={value.value}>
          <input
            type="checkbox"
            className="peer absolute inset-0 opacity-0"
            name={value.name}
            value={value.value}
            checked={checked ? checked(value) : undefined}
            {...props}
          />
          {renderCheckbox(value, i)}
        </div>
      ))}
    </div>
  );
}

export function CheckboxGroupItem({ children }: { children: ReactNode }) {
  return (
    <div className="peer-checked:first:text-brand-primary peer-focus-visible:ring-brand-primary [&_>_div]:border-brand-grey-300 peer-checked:[&_>_div]:border-brand-primary peer-checked:[&_>_div]:bg-brand-secondary flex w-fit items-center gap-2 rounded-lg border border-transparent py-2 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 first:[&_svg]:hidden peer-checked:first:[&_svg]:block">
      <div className="text-brand-primary flex size-5 shrink-0 items-center justify-center rounded-md border bg-white text-sm">
        <Check className="stroke-[10px]" />
      </div>
      <p className="text-brand-grey-800">{children}</p>
    </div>
  );
}
