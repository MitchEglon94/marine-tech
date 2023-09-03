// Copyright 2023 mitchelleglon
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cta } from ".";
import { useMenuContext } from "../context/menu.context";

const MobileMenu = () => {
  const { menu, setMenu, popout, setPopout } = useMenuContext();
  return (
    <div className="w-full h-full flex gap-20 flex-col p-6">
      <div
        className="w-full flex items-center justify-between"
        onClick={() => {
          setMenu(!menu);
          setPopout(0);
        }}
      >
        <Image src={`logo.svg`} alt={""} width={100} height={100} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div className="flex flex-col w-full gap-12 justify-center items-center content-center">
        <div
          className="w-full flex flex-col content-center justify-center items-center"
          onClick={() => {
            setMenu(!menu);
            setPopout(0);
          }}
        >
          <h2>Home</h2>
        </div>
        <div
          className="w-full flex flex-col content-center justify-center items-center"
          //   onClick={() => setMenu(!menu)}
          onClick={() => setPopout(1)}
        >
          <h2>Services</h2>
          <div
            className={`flex flex-col text-center p-4 gap-4 ${
              popout === 1 ? "flex" : "hidden"
            }`}
          >
            <Link
              href={"#"}
              onClick={() => {
                setMenu(!menu);
                setPopout(0);
              }}
            >
              <h3>Remote ETO services</h3>
            </Link>
            <Link href={"#"}></Link>
          </div>
        </div>
        <div
          className="w-full flex flex-col content-center justify-center items-center"
          onClick={() => setPopout(2)}
        >
          <h2>Products</h2>
          <div
            className={`flex flex-col text-center p-4 gap-4 ${
              popout === 2 ? "flex" : "hidden"
            }`}
          >
            <Link
              href={"#"}
              onClick={() => {
                setMenu(!menu);
                setPopout(0);
              }}
            >
              <h3>Defect Management Software</h3>
            </Link>
            <Link
              href={"#"}
              onClick={() => {
                setMenu(!menu);
                setPopout(0);
              }}
            >
              <h3>Vessel Maintenance Handbook</h3>
            </Link>
          </div>
        </div>
        <div
          onClick={() => {
            setMenu(!menu);
            setPopout(0);
          }}
        >
          <Cta text={"contact us"} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
