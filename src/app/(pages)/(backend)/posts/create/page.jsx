"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Select from "@/app/components/UI/Select";
import { Button } from "@/app/components/UI/Button";
import { useRouter } from "next/navigation";
import SingleImageUpload from "@/app/components/UI/SingleImageUpload";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CreatePost } from "@/app/(pages)/actions/post";
import { CategoryList } from "@/app/(pages)/actions/category";

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
  const [state, setState] = useState({ message: "", errors: {} });
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(1);
  const router = useRouter();
  const [content, setContent] = useState("");

  const handleStatusFilter = (event) => {
    setStatus(event.value);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const { data } = await CategoryList(1, "", 1, "500");
      setCategories(data.categories);
    
    } catch (error) {
      console.error("Error fetching payment information : ", error);
    }
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("status", status);
    formData.append("content", content);
    let img = formData.get("thumbnail");
    if (!img.name) {
      formData.delete("thumbnail");
    }

    // Set loading to true
    setLoading(true);

    const response = await CreatePost(formData);

    console.log(response);
    

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
                <label  htmlFor="title"  className="block text-sm font-medium leading-6 text-gray-900"> Post title</label>
                <div className="mt-2">
                  <input  id="title"  name="title"  type="text"  placeholder="Post title..."  autoComplete="address-level2"  className="pl-2  py-1.5  block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                {state.errors.title && (
                  <p className="text-red-700">{state.errors.title}</p>
                )}
              </div>


              <div className="sm:col-span-2 sm:col-start-1 mb-2">
                <label  htmlFor="short_description"  className="block text-sm font-medium leading-6 text-gray-900"> Post description</label>
                <div className="mt-2">
                  <textarea  id="short_description"  name="short_description"  type="text"  placeholder="Description..."  autoComplete="address-level2"  className="pl-2  py-1.5  block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
                {state.errors.short_description && (
                  <p className="text-red-700">{state.errors.short_description}</p>
                )}
              </div>


              <div className="sm:col-span-2 sm:col-start-1">
                <label  htmlFor="status"  className="block text-sm font-medium leading-6 text-gray-900">
                  Post Status
                </label>
                <div className="mt-2">
                  <Select  items={items}  defaultValue={0}  onchange={handleStatusFilter}/>
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


              <div className="flex sm:col-span-2 sm:col-start-1 mt-3">
                  <div className="w-[50%]">
                    <SingleImageUpload name="thumbnail" title=" Category photo" />
                    {state.errors.thumbnail && (
                      <p className="text-red-700">{state.errors.thumbnail}</p>
                    )}
                  </div>
                  <div className="w-[50%]">
                      <div className="col-span-full">
                        <label htmlFor="cover-photo" className=" pl-[25px] block text-sm font-bold leading-6 text-gray-900"> Categories </label>
                        {state.errors.category_id && (
                          <p className="text-red-700">{state.errors.category_id}</p>
                        )}
                        <div className=" p-[25px] h-[300px] overflow-scroll">
                          {
                            categories?.map((item,index)=>(
                              <div key={index} className="relative flex gap-x-3 p-2">
                                <div className="flex h-6 items-center">
                                  <input id={`category${item.id}`} name="category_id[]" value={item.id} type="checkbox" className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                </div>
                                <div className="text-sm leading-6">
                                  <label htmlFor={`category${item.id}`} className=" cursor-pointer font-medium text-gray-900"> {item.name} </label>
                               
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                  </div>
              </div>
              

              <div className=" pb-12 flex">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3 ">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input type="hidden" name="allow_comments" value={0} />
                        <input id="allow_comments" name="allow_comments" value={1} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="allow_comments" className="font-medium text-gray-900"> Allow Comments </label>
                          {state.errors.allow_comments && (
                            <p className="text-red-700">{state.errors.allow_comments}</p>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input type="hidden" name="is_featured" value={0} />
                          <input id="is_featured" name="is_featured" value='1' type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="is_featured" className="font-medium text-gray-900"> isFeatured </label>
                          {state.errors.is_featured && (
                            <p className="text-red-700">{state.errors.is_featured}</p>
                          )}
                        </div>
                      </div>
                  </div>
                </div>
              </div>


              <div className="sm:col-span-2 sm:col-start-1 mb-2">
                <label  htmlFor="tags"  className="block text-sm font-medium leading-6 text-gray-900"> Post tags</label>
                <div className="mt-2">
                  <input  id="tags"  name="tags[]"  type="text"  placeholder="Post tags..."  autoComplete="address-level2"  className="pl-2  py-1.5  block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                {state.errors.tags && (
                  <p className="text-red-700">{state.errors.tags}</p>
                )}
              </div>

            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link  href="/categories"  className="text-sm font-semibold leading-6 text-gray-900"> Cancel </Link>
            <Button classes="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600v"
              loading={loading}
              title="save" />
          </div>
        </div>
      </form>
    </>
  );
}
