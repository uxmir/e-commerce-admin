"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const CreateForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      img:null as File|null,
      category:"",
      price:"",
      sales_price:"",
      stock:"",
      status:""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("this feild is required"),
      img: Yup.mixed().required("This feild is required"),
      category: Yup.string().required("This feild is required"),
      price: Yup.number().required("This feild is required"),
      sales_price: Yup.string().required("This feild is required"),
      stock: Yup.string().required("This feild is required"),
      status: Yup.string().required("This feild is required"),
    }),
    onSubmit: async () => {},
  });
  return (
    <>
    <div>
    <form onSubmit={formik.handleSubmit}>
    <div className="flex flex-col sm:flex-row ">

    </div>
    </form>
    </div>
    </>
  );
};

export default CreateForm;
