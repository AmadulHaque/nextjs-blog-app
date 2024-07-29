"use server";
import { z } from 'zod';
import { revalidatePath } from "next/cache";
import { getSession } from '@/lib/session';

const userSchema = z.object({
    email   : z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
})





export async function LoginUser(formData) {
  
    const data = Object.fromEntries(formData.entries())

    const validation = userSchema.safeParse(data)
  
    if (!validation.success) {
      return { success: false, errors: validation.error.flatten().fieldErrors }
    }
  
    const userData = validation.data
  
    try {
        const response = await fetch('http://localhost:8000/api/oauth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
    
        if (!response.ok) {
            const resData = await response.json();
            return { success: false, errors:resData }
        }

        const {data} = await response.json();
    
        // Get session and update it
        const session = await getSession();
        session.userId = data.user.id;
        session.name = data.user.name;
        session.role = data.user.role;
        session.token = data.user.token;
        session.isLoggedIn = true;
        await session.save();

        revalidatePath('/');
      return { success: true, message: 'User login successfully', data:data.user }
    } catch (error) {
        console.log(error);
      return { success: false, errors: { global: 'An error occurred during login' } }
    }
     
}

