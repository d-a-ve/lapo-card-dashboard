import Button from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";

export function CardProfilePage() {
  return (
    <div className="space-y-2.5">
      <div className="space-y-1">
        <h1 className="text-lg font-bold">Card Profile</h1>
        <p className="text-sm">Create, view and edit card profiles here.</p>
      </div>
      <Separator />
      <div className="flex items-center justify-between gap-4">
        <input />
        <Button
          leftIcon={<PlusIcon className="size-5" />}
          label="Add Profile"
        />
      </div>
      <Separator />
    </div>
  );
}
