"use client";

import React, { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "@/lib/constants";
import { fadeIn } from "@/lib/animations";
import { MotionDiv } from "@/components/utils/Motion";
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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  subject: z
    .string()
    .min(3, {
      message: "Subject must be at least 3 characters long.",
    })
    .max(64, {
      message: "Subject must be at max 64 characters long.",
    }),
  message: z
    .string()
    .min(3, {
      message: "Message must be at least 3 characters long.",
    })
    .max(2048, {
      message: "Message must be at max 2048 characters long.",
    }),
});

function ContactForm() {
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  async function onSubmit() {
    try {
      setIsSendingEmail(true);
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      toast.success("Successfully sent the mail!");
    } catch {
      toast.error("Something went wrong with sending the mail!");
    } finally {
      setIsSendingEmail(false);
    }
  }

  return (
    <MotionDiv {...fadeIn(5)}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-8 md:w-[27.5rem] max-md:w-72"
          ref={formRef}
        >
          {/* Name */}
          <FormField
            control={form.control}
            name="subject"
            disabled={isSendingEmail}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Order of a website"
                    {...field}
                    name="subject"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            disabled={isSendingEmail}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                    {...field}
                    name="message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button
            className="w-full"
            type="submit"
            value="Send"
            isLoading={isSendingEmail}
          >
            Send
          </Button>
        </form>
      </Form>
    </MotionDiv>
  );
}

export default ContactForm;
