'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const userSchema = z.object({
  name    : z.string().min(3, { message: 'Username must be at least 3 characters long' }),
  email   : z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  address : z.string().min(6, { message: 'address must be at least 6 characters long' }),
})

export async function registerUser(formData) {
  const data = Object.fromEntries(formData.entries())

  const validation = userSchema.safeParse(data)

  if (!validation.success) {
    return { success: false, errors: validation.error.flatten().fieldErrors }
  }

  const userData = validation.data

  try {
    const response = await fetch('http://localhost:8000/api/oauth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });

    const resData = await response.json();

    if (!response.ok) {
      return { success: false, errors: resData }
    }

    // Revalidate the necessary path
    revalidatePath('/register')

    return { success: true, message: 'User registered successfully', data:[] }
  } catch (error) {
    return { success: false, errors: { global: 'An error occurred during registration' } }
  }
}
