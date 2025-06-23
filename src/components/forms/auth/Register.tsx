'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';
import { registerSchema } from './schemas';
import { Form, FormField } from '@/components/ui/form';
import { FieldRenderer } from '@/components/ui/bloom/field-renderer';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/bloom/password-input';
import { SubmitButton } from '@/components/forms';
import { register } from './actions';
import { useAsyncRunner } from '@/hooks/useAsyncRunner';
import { setErrorsInUseForm } from '@/lib/setErrorsInUseForm';

function Register() {
  const { run, isPending, isFailure, isSuccess, data, error } = useAsyncRunner({
    action: register,
  });
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
    await run(values);
  }

  if (axios.isAxiosError(error) && error?.response?.data?.message) {
    setErrorsInUseForm(form, error.response.data.message);
  }

  if (isSuccess) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <FormField
          control={form.control}
          name="name"
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
        <SubmitButton isLoading={isPending}>Submit</SubmitButton>
      </form>
    </Form>
  );
}
export default Register;
