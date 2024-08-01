'use server'

import { getSession } from "@/lib/session";
import { revalidatePath } from 'next/cache';

export async function CategorList(page = 1, search = '', status = '') {
  try {
    const session = await getSession();

    const response = await fetch(`http://localhost:8000/api/categories?page=${page}&search=${search}&status=${status}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': session.token ? `Bearer ${session.token}` : '',
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      return { success: false, errors: resData };
    }

    // Revalidate the necessary path
    revalidatePath('/categories');

    return { success: true, message: 'All categories successfully', data: resData.data };
  } catch (error) {
    return { success: false, errors: { global: 'An error occurred during categories fetch' } };
  }
}
