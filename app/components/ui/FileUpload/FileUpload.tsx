"use client";
import React from "react";
import { Upload } from "lucide-react";
interface fileProps {
  errors: any;
  preview: any;
  fileName: string;
  errorsValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FileUpload: React.FC<fileProps> = ({
  errors,
  preview,
  fileName,
  errorsValue,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor="file" className="relative cursor-pointer block">
        <div
          className={`w-full h-32 rounded-lg flex flex-col justify-center items-center border border-dashed my-5 
            ${errors ? "border-red-600" : "border-gray-600 dark:border-white"}`}
        >
          {preview ? (
            <div className="flex flex-col items-center gap-2">
              <img
                src={preview}
                alt="preview"
                className="h-20 w-20 object-cover rounded"
              />
              <span className="text-xs">{fileName}</span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="mb-2" />
              <span className="text-sm text-center text-gray-500">
                Click to upload image (png.jpg,jpeg)
              </span>
            </div>
          )}

          <input
            id="file"
            name="img"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onChange}
          />
        </div>
        {errors && (
          <p className="text-red-600 text-sm mt-[-10px]">{errorsValue}</p>
        )}
      </label>
    </div>
  );
};

export default FileUpload;
