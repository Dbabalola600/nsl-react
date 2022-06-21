import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

type FileInputProps = {
    errorMessage?: string;
    onChange?: (...event:any[])=>void;
    value?: any;
    placeholder?:string;
    id:string
}

function FileInput({errorMessage, onChange, value, placeholder, id}:FileInputProps) {
    const [fileValue, setFileValue ] = useState<File | null>(null);

    const handleFileChange:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setFileValue(e.target!.files![0])
    }

    const convertFileToBase64 = async () =>{
        return await new Promise((resolve, reject)=>{
            const newFileReader = new FileReader();
            newFileReader.readAsDataURL(fileValue!);
            newFileReader.onload = () => {
                onChange!(newFileReader.result);
            };

            newFileReader.onerror = () =>{
                setFileValue(null);
                onChange!(null);
                toast.error(`A problem occured while uploading ${fileValue?.name}. Please try again`)
            }
        })
    }

    useEffect(()=>{
        if(fileValue === null){
            return
        }
        convertFileToBase64()
        
    }, [fileValue])// eslint-disable-line

  return (
      <div className="w-full">
          <div className=" border-0 border-b-2 border-underlineColor">
              <label
                  htmlFor={"FileInput__" + id}
                  className={
                      "text-sm justify-between pr-10 mb-2 cursor-pointer w-full h-20 flex items-end bg-bgColor p-4 text-gray-400"
                  }
              >
                  {fileValue
                      ? `${placeholder} (` + fileValue.name + ")"
                      : placeholder}
                  <AiOutlineCloudUpload className="text-2xl" strokeWidth={50} />
              </label>
              <input
                  type="file"
                  onChange={handleFileChange}
                  id={"FileInput__" + id}
                  className="outline-none pb-4 hidden"
                  accept=".jpg,.png"
              />
          </div>
          {<p className="text-xs text-red-900 ">{errorMessage}</p>}
      </div>
  );
}

export default FileInput