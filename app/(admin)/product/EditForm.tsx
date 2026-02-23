"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/app/components/ui/Input/Input";
import Button from "@/app/components/ui/Button/Button";
import FileUpload from "@/app/components/ui/FileUpload/FileUpload";
import Heading from "@/app/components/ui/HeadingComponent/Heading";
import { useFileUpload } from "@/app/CustomHooks/useFlieUpload";
interface formProps {
  close?: () => void;
  values:any
}
const EditForm: React.FC<formProps> = ({ close,values }) => {
  const {preview,handleFileChange,handleImageToString}=useFileUpload()
  const formik = useFormik({
    initialValues:values,
    enableReinitialize:true, 
    validationSchema: Yup.object({
      name: Yup.string().required("this feild is required"),
      img: Yup.mixed().required("This feild is required"),
      category: Yup.string().required("This feild is required"),
      price: Yup.number()
        .typeError("must be number")
        .required("This feild is required"),
      sales_price: Yup.number()
        .typeError("must be number")
        .required("This feild is required"),
      stock: Yup.number()
        .typeError("must be number")
        .required("This feild is required"),
      status: Yup.string().required("This feild is required"),
    }),
    onSubmit: async (values) => {
    const base64Image= await handleImageToString(values,"img")
     //api is here
     const finalPayload = { 
      ...values, 
      img: base64Image 
    };
    console.log("Final Data for Server:", finalPayload);
    },
  });
  return (
    <>
      <div>
        <Heading headingValue="Create Product" />
        <form onSubmit={formik.handleSubmit} className="space-y-4 mt-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <Input
                label=" ProductName"
                inputName="name"
                inputType="text"
                placeholder="Enter Here...."
                {...formik.getFieldProps("name")}
                errors={formik.errors.name && formik.touched.name}
                errorValue={`${formik.errors.name}`}
              />
            </div>
            <div className="w-full">
              <Input
                label="Category"
                inputName="category"
                inputType="text"
                placeholder="Enter Here...."
                {...formik.getFieldProps("category")}
                errors={formik.errors.category && formik.touched.category}
                errorValue={`${formik.errors.category}`}
              />
            </div>
          </div>
          <FileUpload
            errors={formik.errors.img && formik.touched.img}
            errorsValue={`${formik.errors.img}`}
            fileName={`${(formik?.values?.img as File)?.name || "dummy image"}`}
            preview={preview || formik?.values?.img}
            onChange={(e)=>handleFileChange(e,"img",formik.setFieldValue)}
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <Input
                label=" Price"
                inputName="price"
                inputType="number"
                placeholder="0"
                {...formik.getFieldProps("price")}
                errors={formik.errors.price && formik.touched.price}
                errorValue={`${formik.errors.price}`}
              />
            </div>
            <div className="w-full">
              <Input
                label="Sales Price"
                inputName="sales_price"
                inputType="number"
                placeholder="0"
                {...formik.getFieldProps("sales_price")}
                errors={formik.errors.sales_price && formik.touched.sales_price}
                errorValue={`${formik.errors.sales_price}`}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <Input
                label="Stock"
                inputName="stock"
                inputType="number"
                placeholder="0"
                {...formik.getFieldProps("stock")}
                errors={formik.errors.stock && formik.touched.stock}
                errorValue={`${formik.errors.stock}`}
              />
            </div>
            <div className="w-full">
              <Input
                label="Status"
                inputName="status"
                inputType="text"
                placeholder="Enter Here...."
                {...formik.getFieldProps("status")}
                errors={formik.errors.status && formik.touched.status}
                errorValue={`${formik.errors.status}`}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-5 w-full">
            <Button
              width="!w-full"
              colorProps="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-600 text-gray-600 dark:text-white"
              onEvent={close}
              buttonType="button"
            >
              Cancell
            </Button>
            <Button width="!w-full" buttonType="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditForm;
