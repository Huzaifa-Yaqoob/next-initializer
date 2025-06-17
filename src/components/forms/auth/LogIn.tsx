'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// code files
import { loginSchema } from './schemas';
import { Form, FormField } from '@/components/ui/form';
import { FieldRenderer } from '@/components/ui/bloom/field-renderer';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/bloom/password-input';
import { SubmitButton } from '@/components/forms';

export default function LogIn() {
  // Form definition
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Submitter
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
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
              <PasswordInput placeholder="password" {...field} />
            </FieldRenderer>
          )}
        />
        <SubmitButton isLoading={true}>Submit</SubmitButton>
      </form>
    </Form>
  );
}
