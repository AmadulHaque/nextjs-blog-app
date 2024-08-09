"use client";

import { useState } from "react";
import Link from "next/link";
import Select from "@/app/components/UI/Select";
import { Button } from "@/app/components/UI/Button";
import { useRouter } from "next/navigation";
import { CreateCategory } from "@/app/(pages)/actions/category";
import SingleImageUpload from "@/app/components/UI/SingleImageUpload";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const items = [
  {
    title: "Published",
    value: 1,
    image: null,
  },
  {
    title: "Pending",
    value: 2,
    image: null,
  },
  {
    title: "InActive",
    value: 3,
    image: null,
  },
];

export default function Page() {
  // Updated function name to 'Page'
  const [state, setState] = useState({ message: "", errors: {} });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(1);
  const router = useRouter();
  const [content, setContent] = useState("");

  const handleStatusFilter = (event) => {
    setStatus(event.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("status", status);
    let img = formData.get("image");
    if (!img.name) {
      formData.delete("image");
    }

    // Set loading to true
    setLoading(true);

    const response = await CreateCategory(formData);

    if (response.success) {
      setState({ message: response.message, errors: {} });

      // 1.0 second wait before router push
      setTimeout(() => {
        router.push("/categories");
      }, 1000);
    } else {
      const errors = response.errors;
      setState({ message: "", errors: errors });
    }

    setLoading(false);
    return;
  };

  // const handleImageUpload = () => {
  //   const input = document.createElement("input");
  //   input.setAttribute("type", "file");
  //   input.setAttribute("accept", "image/*");
  //   input.click();

  //   input.onchange = async () => {
  //     const file = input.files[0];
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       const quill = document.querySelector(".ql-editor");
  //       const range = quill.getSelection(true);
  //       quill.insertEmbed(range.index, "image", reader.result);
  //       quill.setSelection(range.index + 1);
  //     };

  //     reader.readAsDataURL(file);
  //   };
  // };

  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ], 
    },
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="m-auto  sm:w-[50%] space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 ">
              {state.message && (
                <p className="mt-5 text-center text-green-500 ">
                  {state.message}
                </p>
              )}
              <div className="sm:col-span-2 sm:col-start-1 mb-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {" "}
                  Category Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Category name..."
                    autoComplete="address-level2"
                    className="pl-2  py-1.5  block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {state.errors.name && (
                  <p className="text-red-700">{state.errors.name}</p>
                )}
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {" "}
                  Category Status{" "}
                </label>
                <div className="mt-2">
                  <Select
                    items={items}
                    defaultValue={0}
                    onchange={handleStatusFilter}
                  />
                </div>
                {state.errors.status && (
                  <p className="text-red-700">{state.errors.status}</p>
                )}
              </div>

              <div className="sm:col-span-2 sm:col-start-1 mt-3">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Content
                </label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                />
              </div>

              <div className="sm:col-span-2 sm:col-start-1 mt-3">
                {/* <input type="file" name='image' /> */}

                <SingleImageUpload title=" Category photo" />

                {state.errors.image && (
                  <p className="text-red-700">{state.errors.image}</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link
              href="/categories"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {" "}
              Cancel{" "}
            </Link>
            <Button
              classes="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600v"
              loading={loading}
              title="save"
            />
          </div>
        </div>
      </form>
    </>
  );
}
