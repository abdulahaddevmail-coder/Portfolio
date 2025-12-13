"use client";
import { useCallback, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { FormInput } from "@/app/common/components/text-input";

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  phoneNumber: "",
};

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const form = useForm({ defaultValues: defaultValues, mode: "all" });
  const { control, formState, reset, handleSubmit } = form;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useCallback(() => {
    if (!formRef.current) return;
    setIsSubmitting(true);
    toast.promise(
      emailjs
        .sendForm("service_i45sxd9", "template_a77ek0k", formRef.current, "Ob8_6uXsIY_YZsNpE")
        .then(() => {
          reset(defaultValues);
          setIsSubmitting(false);
        })
        .catch((error) => {
          setIsSubmitting(false);
          if (typeof error === "string") toast.error(error);
          throw error;
        }),
      {
        pending: "Sending email...",
        success: "Email sent successfully!",
      }
    );
  }, [formRef, reset]);

  return (
    <Form {...form}>
      {/* eslint-disable-next-line react-hooks/refs */}
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col md:flex-row md:items-start gap-4">
          <FormInput
            control={control}
            name="name"
            label="Name"
            rules={{ required: "Name is required" }}
            placeholder="John Doe"
            className="w-[49%]"
          />
          <FormInput
            control={control}
            name="email"
            label="Email"
            placeholder="example@email.com"
            rules={{
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" },
            }}
            className="w-[49%]"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-start gap-4">
          <FormInput
            control={control}
            name="phoneNumber"
            label="Phone number"
            placeholder="(246) 432 - 3644"
            rules={{ required: "Phone number is required" }}
            className="w-[49%]"
          />
          <FormInput
            control={control}
            name="subject"
            label="Subject"
            placeholder="ex. Project name"
            rules={{ required: "Subject is required" }}
            className="w-[49%]"
          />
        </div>
        <FormInput
          control={control}
          type="textarea"
          name="message"
          label="Leave a message"
          rules={{ required: "Message is required" }}
          placeholder="Please write your message..."
        />
        <div className="footer">
          <button
            type="submit"
            disabled={isSubmitting || !formState.isValid}
            className="bg-black/80 transition-all hover:bg-black hover:-translate-y-1 text-white font-bold px-6 py-3.5 rounded-full md:w-fit text-sm grid place-items-center"
          >
            Send Message
          </button>
        </div>
      </form>
    </Form>
  );
};
