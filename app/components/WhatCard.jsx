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
import Image from "next/image";
import { Cta } from ".";

const WhatCard = ({ title, text, url, direction }) => {
  return (
    <div
      className={`flex flex-col lg:${direction} shadow-lg rounded-md h-full w-full hover:scale-110 transition duration-200 ease-out hover:shadow-md bg-white`}
    >
      <Image
        src={url}
        alt="img"
        width={500}
        height={500}
        className="w-full  rounded-t-md"
      />
      <div className="p-6 flex flex-col gap-6 items-center ">
        <h3 className=" text-2xl">{title}</h3>
        <p>{text}</p>
        <div className="mt-auto pb-6 w-2/4 flex justify-center mx-auto">
          <Cta text={"Learn more"} />
        </div>
      </div>
    </div>
  );
};

export default WhatCard;
