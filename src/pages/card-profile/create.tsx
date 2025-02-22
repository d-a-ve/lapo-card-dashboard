import { PageLayout } from "@/components/ layout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SelectInput } from "@/components/ui/select-input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CARD_SCHEMES, CURRENCY, URL_PATH_SEGMENTS } from "@/constants";
import {
  AddFeeDialog,
  addFeeSchema,
} from "@/domains/card-profile/add-fee-dialog";
import { DashboardCard } from "@/domains/home/dashboard-card";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronsUpDown, PlusIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

const branchBlackList = ["Head Office"];
const cardSchemes = Object.values(CARD_SCHEMES);
const currencies = Object.values(CURRENCY);

const createCardProfileSchema = z.object({
  cardName: z.string().min(1, "Card name is required"),
  binPrefix: z
    .string()
    .min(1, "Bin Prefix is required")
    .refine((val) => /^\d+$/.test(val), "Bin prefix must be numeric values"),
  cardScheme: z
    .enum(["", ...cardSchemes])
    .refine((val) => val.length > 0, "Card scheme is required."),
  expiration: z.string().min(1, "Expiration date is required."),
  description: z.string().optional(),
  currency: z
    .enum(["", ...currencies])
    .refine((val) => val.length > 0, "Card currency is required."),
  branchBlacklist: z
    .enum(["", ...branchBlackList])
    .refine((val) => val.length > 0, "Branch blacklist is required."),
  fees: z.array(addFeeSchema),
});

type CreateCardProfileSchemaType = z.infer<typeof createCardProfileSchema>;

export function CardProfileCreatePage() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const createCardProfileForm = useForm<CreateCardProfileSchemaType>({
    resolver: zodResolver(createCardProfileSchema),
    defaultValues: {
      cardName: "",
      binPrefix: "",
      cardScheme: "",
      expiration: "",
      description: "",
      currency: "",
      branchBlacklist: "",
      fees: [],
    },
  });

  const onSubmit = () => {
    navigate(`/${URL_PATH_SEGMENTS.CARD_PROFILE}`);
  };

  return (
    <PageLayout
      title="Create Profile"
      subtitle="Fill in profile details and add card fee."
    >
      <Form {...createCardProfileForm}>
        <form onSubmit={createCardProfileForm.handleSubmit(onSubmit)}>
          <DashboardCard className="mt-6 space-y-7 pb-7">
            <h2 className="text-lg font-medium">Profile Details</h2>
            <div className="grid grid-cols-2 grid-rows-[auto_auto_auto_auto] gap-x-[7.8125rem] gap-y-5">
              <FormField
                control={createCardProfileForm.control}
                name="cardName"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Card Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter card name"
                        {...field}
                        className={cn(fieldState.error && "border-destructive")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createCardProfileForm.control}
                name="binPrefix"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Bin Prefix*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="00000000"
                        {...field}
                        className={cn(fieldState.error && "border-destructive")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createCardProfileForm.control}
                name="cardScheme"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Card Scheme*</FormLabel>
                    <FormControl>
                      <SelectInput
                        options={cardSchemes}
                        placeholder="Verve"
                        selectName={field.name}
                        value={field.value}
                        changeHandler={field.onChange}
                        ref={field.ref}
                        triggerClassName={cn(
                          fieldState.error && "border-destructive",
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createCardProfileForm.control}
                name="expiration"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Expiration*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        {...field}
                        className={cn(fieldState.error && "border-destructive")}
                        rightIcon={<ChevronsUpDown className="size-5" />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createCardProfileForm.control}
                name="description"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        {...field}
                        className={cn(fieldState.error && "border-destructive")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createCardProfileForm.control}
                name="currency"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Currency*</FormLabel>
                    <FormControl>
                      <SelectInput
                        options={currencies}
                        placeholder="NGN"
                        selectName={field.name}
                        value={field.value}
                        changeHandler={field.onChange}
                        ref={field.ref}
                        triggerClassName={cn(
                          fieldState.error && "border-destructive",
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createCardProfileForm.control}
                name="branchBlacklist"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Branch Blacklist*</FormLabel>
                    <FormControl>
                      <SelectInput
                        options={branchBlackList}
                        placeholder="Head Office"
                        selectName={field.name}
                        value={field.value}
                        changeHandler={field.onChange}
                        ref={field.ref}
                        triggerClassName={cn(
                          fieldState.error && "border-destructive",
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </DashboardCard>
          <DashboardCard className="mt-4 min-h-64 space-y-6">
            <h2 className="text-lg font-medium">Fees</h2>
            <div className="space-y-3">
              <Button
                leftIcon={<PlusIcon className="size-5" />}
                label="Add Fee"
                size={"sm"}
                className="px-3"
                onClick={() => setOpen(true)}
              />
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[10.16rem] text-center">
                      Name
                    </TableHead>
                    <TableHead className="w-[10.16rem] text-center">
                      Value
                    </TableHead>
                    <TableHead className="w-[10.16rem] text-center">
                      Frequency
                    </TableHead>
                    <TableHead className="w-[10.16rem] text-center">
                      Currency
                    </TableHead>
                    <TableHead className="w-[10.16rem] text-center">
                      Impact
                    </TableHead>
                    <TableHead className="w-[10.16rem] text-center">
                      Account Pad
                    </TableHead>
                    <TableHead className="w-[10.16rem] text-center">
                      Account
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {createCardProfileForm.getValues("fees").length > 0 ? (
                    createCardProfileForm
                      .getValues("fees")
                      .map(
                        ({
                          feeName,
                          value,
                          currency,
                          feeFrequency,
                          feeImpact,
                          accountPad,
                          account,
                        }) => (
                          <TableRow key={feeName}>
                            <TableCell className="text-center">
                              {feeName}
                            </TableCell>
                            <TableCell className="text-center">
                              {value}
                            </TableCell>
                            <TableCell className="text-center">
                              {feeFrequency}
                            </TableCell>
                            <TableCell className="text-center">
                              {currency}
                            </TableCell>
                            <TableCell className="text-center">
                              {feeImpact}
                            </TableCell>
                            <TableCell className="text-center">
                              {accountPad}
                            </TableCell>
                            <TableCell className="text-center">
                              {account}
                            </TableCell>
                          </TableRow>
                        ),
                      )
                  ) : (
                    <TableRow>
                      <TableCell className="text-center opacity-0">a</TableCell>
                      <TableCell className="text-center opacity-0">a</TableCell>
                      <TableCell className="text-center opacity-0">a</TableCell>
                      <TableCell className="text-center opacity-0">a</TableCell>
                      <TableCell className="text-center opacity-0">a</TableCell>
                      <TableCell className="text-center opacity-0">a</TableCell>
                      <TableCell className="text-center opacity-0">a</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </DashboardCard>
          <div className="mt-9 max-w-[18.25rem]">
            <Button type="submit" label="Create Profile" className="w-full" />
          </div>
        </form>
      </Form>
      <AddFeeDialog
        open={open}
        setOpen={setOpen}
        setFeeValue={(fee) =>
          createCardProfileForm.setValue("fees", [
            ...createCardProfileForm.getValues("fees"),
            fee,
          ])
        }
      />
    </PageLayout>
  );
}
