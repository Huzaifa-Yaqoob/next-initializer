import { UseFormReturn, FieldValues, Path } from 'react-hook-form';

export function setErrorsInUseForm<TFieldValues extends FieldValues>(
  form: UseFormReturn<TFieldValues>,
  errorObj: Record<string, string[]>
): void {
  form.clearErrors();

  // Iterate over keys in a typesafe way
  (Object.keys(errorObj) as Path<TFieldValues>[]).forEach((fieldName) => {
    const messages = errorObj[fieldName];
    if (!messages || messages.length === 0) return;

    const msg = messages.join(', ');

    form.setError(fieldName, {
      type: 'manual',
      message: msg.charAt(0).toUpperCase() + msg.slice(1),
    });
  });
}
