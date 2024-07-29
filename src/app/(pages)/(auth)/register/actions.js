'use server'

import { z } from 'zod';

// Define a schema for validation
const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
});

export async function submitForm(formData) {
  let rawFormData = {};

  if (formData instanceof FormData) {
    rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
    };
  } else {
    rawFormData = formData;
  }

  // Validate the form data
  const validationResult = schema.safeParse(rawFormData);

  if (!validationResult.success) {
    // Return validation errors
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  // If validation is successful, process the data
  console.log('Form Submitted:', rawFormData);

  // Return a success message
  return { message: 'Form submitted successfully!' };
}
