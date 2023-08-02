import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

type Props = {
  control: any;
  label: string ;
  labelClassName?: string;
  name: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
};

const CustomCheckbox = (props: Props) => {
  const {
    control,
    label,
    name = "",
    className = "",
    labelClassName = "",
    description = "",
    descriptionClassName = "",
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(
            "flex flex-row items-start justify-start space-x-4 ",
            className
          )}
        >
          <FormControl className="mt-2">
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className={cn("space-x-0 space-y-0", labelClassName)}>
              {label}
            </FormLabel>
            <FormDescription className={cn("", descriptionClassName)}>
              {description}
            </FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
};

export default CustomCheckbox;
