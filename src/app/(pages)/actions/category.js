"use server";

import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export async function CategoryList(page = 1, search = "", status = "", perPage=15 ) {
  try {
    const session = await getSession();

    const response = await fetch(
      `http://localhost:8000/api/categories?page=${page}&search=${search}&status=${status}&perPage=${perPage}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: session.token ? `Bearer ${session.token}` : "",
        },
      }
    );

    const resData = await response.json();

    if (!response.ok) {
      return { success: false, errors: resData };
    }

    // Revalidate the necessary path
    revalidatePath("/categories");

    return {
      success: true,
      message: "All categories successfully",
      data: resData.data,
    };
  } catch (error) {
    return {
      success: false,
      errors: { global: "An error occurred during categories fetch" },
    };
  }
}

export async function CategorShow(id) {
  try {
    const session = await getSession();

    const response = await fetch(`http://localhost:8000/api/categories/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: session.token ? `Bearer ${session.token}` : "",
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      return { success: false, errors: resData };
    }

    // Revalidate the necessary path
    revalidatePath("/categories");

    return {
      success: true,
      message: "Category show successfully",
      data: resData.data,
    };
  } catch (error) {
    return {
      success: false,
      errors: { global: "An error occurred during categories fetch" },
    };
  }
}

export async function CreateCategory(formData) {
  const session = await getSession();
  try {
    const response = await fetch("http://localhost:8000/api/categories", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: session.token ? `Bearer ${session.token}` : "",
      },
      body: formData,
    });

    const resData = await response.json();

    if (!response.ok) {
      return resData;
    }

    // Revalidate the necessary path
    revalidatePath("/categories");

    return {
      success: true,
      message: "Category created successfully",
      data: [],
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      errors: { global: "An error occurred during category" },
    };
  }
}

export async function UpdateCategory(formData, id) {
  const session = await getSession();
  try {
    const response = await fetch("http://localhost:8000/api/categories/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: session.token ? `Bearer ${session.token}` : "",
      },
      body: formData,
    });

    const resData = await response.json();

    if (!response.ok) {
      return resData;
    }

    // Revalidate the necessary path
    revalidatePath("/categories");

    return { success: true, message: "Category update successfully", data: [] };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      errors: { global: "An error occurred during category" },
    };
  }
}

export async function CategorDelete(id) {
  try {
    const session = await getSession();

    const response = await fetch(`http://localhost:8000/api/categories/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: session.token ? `Bearer ${session.token}` : "",
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      return { success: false, errors: resData };
    }

    // Revalidate the necessary path
    revalidatePath("/categories");

    return {
      success: true,
      message: "Category deleted successfully",
      data: [],
    };
  } catch (error) {
    return {
      success: false,
      errors: { global: "An error occurred during categories deleted" },
    };
  }
}
