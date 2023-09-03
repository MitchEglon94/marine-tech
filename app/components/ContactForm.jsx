import React from "react";
import Image from "next/image";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <form>
      <div className="p-12 flex flex-col justify-center content-center items-center">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="w-full flex justify-center">
            <Image src={"/logo.svg"} alt="logo" width={200} height={200} />
          </div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Contact Us
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Get in touch with us to discuss our services further and tailor a
            package to suit your needs
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 border-slate-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="service"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Service
              </label>
              <div className="mt-2">
                <select
                  id="service"
                  name="service"
                  className="block w-full rounded-md  border-slate-900 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Defect Management System</option>
                  <option>Remote ETO Service</option>
                  <option>Vessel Maintenance Handbook</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                type="text"
                name="message"
                id="message"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-full bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
