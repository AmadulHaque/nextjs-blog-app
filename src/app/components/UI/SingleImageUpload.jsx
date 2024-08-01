"use client";
import { useEffect, useState,useRef  } from "react";
import Image from "next/image";
import { PhotoIcon } from '@heroicons/react/24/solid'



export default function SingleImageUpload({name='image', title="photo", initialPhoto=null }) {
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        setImage(initialPhoto);
    }, [initialPhoto]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
    };
    
    const handleImageRemove = () => {
        setImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = null; 
        }
    };


    return (
    <>
        <div className="col-span-full">
            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
            {title}
            </label>
            <label  htmlFor="file-upload" >
                <input id="file-upload" name={name} type="file"   ref={fileInputRef}  onChange={handleImageChange} className="sr-only" />
                <div className=" relative cursor-pointer mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 h-[190px]" 
                    style={{
                        backgroundImage:`url(${image})`, 
                        zIndex: 1,
                        position: "relative",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                    > 
                    {
                        image != null ? 
                        <button type="button"  onClick={handleImageRemove} className="btn btn-danger close-button" style={{ background: "#ffffffc9", width: 50, height: 50, textAlign: "center", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center", color: "red", borderRadius: 9}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                                <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        :
                        <div className="text-center">
                            <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <span className="relative rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none ">
                                <span>Upload a file</span>
                            </span>
                            <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    }



                </div>
            </label>
        </div>
    </>
    )
}
