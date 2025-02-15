"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "./schemas";
import { Form, FormField } from "@/components/ui/form";
import FieldRenderer from "@/components/ui/custom/field-wrapper";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/custom/password-input";
import LoadingButton from "@/components/loadings/LoadingButton";

export default function Register() {
  // Form definition
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FieldRenderer label="Username">
              <Input placeholder="your name" {...field} />
            </FieldRenderer>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FieldRenderer label="Email">
              <Input placeholder="your email" {...field} />
            </FieldRenderer>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FieldRenderer label="Password">
              <PasswordInput
                placeholder="Choose a strong password"
                {...field}
              />
            </FieldRenderer>
          )}
        />
        <LoadingButton type="submit" isLoading={false}>
          Submit
        </LoadingButton>
      </form>
    </Form>
  );
}
