import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { Helmet } from "react-helmet";
import * as Yup from "yup";

const Post = () => {
  const handleSubmit = async (values, { resetForm }) => {
    await axios.post("/menu", values);
    resetForm();
  };

  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title> Admin-post</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Formik
        initialValues={{
          image: "",
          name: "",
          description: "",
          price: "",
        }}
        validationSchema={Yup.object({
          image: Yup.string().required("Image is required"),
          name: Yup.string().required("Name is required"),
          description: Yup.string().required("Description is required"),
          price: Yup.string().required("Price is required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>
              <Field
                type="text"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required=""
                name="image"
              />
              <ErrorMessage name="image" />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <Field
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                name="name"
              />
              <ErrorMessage name="name" />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                despription
              </label>
              <Field
                type="text"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                name="description"
              />
              <ErrorMessage name="description" />
            </div>
            <div className="mb-5">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <Field
                type="text"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                name="price"
              />
              <ErrorMessage name="price" />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Post;
