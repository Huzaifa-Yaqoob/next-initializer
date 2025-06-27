'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { loginSchema } from './schemas';
import { Form, FormField } from '@/components/ui/form';
import { FieldRenderer } from '@/components/ui/bloom/field-renderer';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/bloom/password-input';
import { SubmitButton } from '@/components/forms';
import { useAsyncRunner } from '@/hooks/useAsyncRunner';
import { login } from '@/components/forms/auth/actions';
import { useEffect } from 'react';
import axios from 'axios';
import { setErrorsInUseForm } from '@/lib/setErrorsInUseForm';

export default function LogIn() {
  const { run, isPending, isFailure, isSuccess, data, error } = useAsyncRunner({
    action: login,
  });
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (axios.isAxiosError(error) && error?.response?.data?.message) {
      setErrorsInUseForm(form, error.response.data.message);
    }
  }, [isFailure, error, form]);

  // Submitter
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    await run(values);
  }

  if (isSuccess) {
    console.log(data);
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
        <SubmitButton isLoading={isPending}>Submit</SubmitButton>
      </form>
    </Form>
  );
}
