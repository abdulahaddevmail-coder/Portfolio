"use client";

import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";

import { Input, Textarea } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface FormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  rules?: RegisterOptions<T>;
  placeholder?: string;
  type?: string;
  className?: string;
}

export function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  rules = {},
  placeholder,
  type = "text",
  className,
}: FormInputProps<T>) {
  return (
    <FormField
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && <FormLabel className="font-bold text-base ml-1">{label}</FormLabel>}
          <FormControl>
            {type === "textarea" ? (
              <Textarea {...field} rows={4} maxLength={5000} className={className} placeholder={placeholder} />
            ) : (
              <Input {...field} type={type} placeholder={placeholder} className={className} />
            )}
          </FormControl>
          <FormMessage className="ml-2"></FormMessage>
        </FormItem>
      )}
    />
  );
}
