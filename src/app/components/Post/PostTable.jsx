"use client";
import React, { useState } from "react";
import Image from "next/image";
import no_photo from "@/app/assets/images/no_photo.jpg";
import Link from "next/link";
import Alert from "../UI/Alert";
import { CategorDelete } from "@/app/(pages)/actions/category";
import toast from "react-hot-toast";

export default function PostTable({ data }) {
  const [status, setStatus] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleDelete = (id) => {
    setCurrentId(id);
    setStatus(true);
  };

  const handleConfirmDelete = async () => {
    // const response = await CategorDelete(currentId);
    // if (response.success) {
    //   setStatus(false);
    //   toast.success(response.message);
    // }
  };

  const formattedDate = (value) => {
    const date = new Date(value);

    const options = {
      // weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
      // hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  return (
    <>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
            <th className="px-6 py-3 text-left font-medium">
              <input
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                type="checkbox"
              />
            </th>
            <th className="px-6 py-3 text-left font-medium">Image</th>
            <th className="px-6 py-3 text-left font-medium">Title</th>
            <th className="px-6 py-3 text-left font-medium">Author</th>
            <th className="px-6 py-3 text-left font-medium">created at</th>
            <th className="px-6 py-3 text-left font-medium">Status</th>
            <th className="px-6 py-3 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="px-6 whitespace-no-wrap border-b border-gray-200">
                <input
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  type="checkbox"
                  value={index + 1}
                />
              </td>

              <td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12">
                    <Image
                      src={item.thumbnail ? item.thumbnail : no_photo.src}
                      width="100"
                      height="100"
                      className="  w-[100%] h-[100%]"
                      alt={item.slug}
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">
                  {item.title}
                </div>
              </td>
              <td className="px-6 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">
                  {item.user?.name}
                </div>
              </td>
              <td className="px-6 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">
                  {formattedDate(item.created_at)}
                </div>
              </td>
              <td className="px-6 whitespace-no-wrap border-b border-gray-200">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${item.status == 1 ? "bg-green-100 text-green-800" : ""}
                  ${item.status == 2 ? "bg-yellow-100 text-yellow-800" : ""}
                  ${item.status == 3 ? "bg-red-100 text-red-800" : ""}`}
                >
                  {item.status_label}
                </span>
              </td>
              <td className="px-6 whitespace-no-wrap border-b border-gray-200">
                <div className="flex gap-2">
                  <Link href={"/posts/" + item.id}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </Link>
                  <button onClick={() => handleDelete(item.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                      <path
                        fillRule="evenodd"
                        d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {status && (
        <Alert
          status={status}
          setStatus={setStatus}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
    </>
  );
}
