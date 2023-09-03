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
import { WhatCard, Cta } from ".";
import Image from "next/image";

const What = () => {
  return (
    <div className="text-center md:w-3/4 md:mx-auto mb-6">
      {/* <h2 className="text-3xl text-slate-700 mb-6">What we do</h2> */}
      <div className="flex flex-col  justify-center  p-6 md:px-32 lg:p-0 gap-6 lg:gap-0 w-full lg:flex-row lg:flex-wrap">
        <div
          className={`flex flex-col lg:flex-row shadow-lg  rounded-md lg:shadow-none lg:rounded-none h-full w-full bg-white lg:p-8 border-b`}
        >
          <div className="flex justify-center  rounded-t-md lg:rounded-none lg:flex-1">
            <Image
              src={"/tools.jpg"}
              alt="img"
              width={500}
              height={500}
              className="rounded-t-md lg:rounded-none"
            />
          </div>
          <div className="p-6 flex flex-col gap-6 items-center lg:justify-center lg:flex-1">
            <h2 className=" text-2xl">defect management system</h2>
            <p>
              {" "}
              It is paramount that system downtime onboard yachts is kept to an
              absolute minimum. Our comprehensive defect management system
              allows all crew members to quickly report defects they find around
              the vessel, assign them to the appropriate department/crewmember
              and track their progress.
            </p>
            <div className=" pb-6 w-2/4 flex justify-center mx-auto">
              <Cta text={"Learn more"} />
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col lg:flex-row-reverse shadow-lg rounded-md lg:shadow-none lg:rounded-none h-full w-full lg:p-8 border-b bg-white`}
        >
          <div className="flex justify-center  rounded-t-md lg:rounded-none lg:flex-1">
            <Image
              src={"/remote-eto.jpg"}
              alt="img"
              width={500}
              height={500}
              className="lg:rounded-none rounded-t-md"
            />
          </div>
          <div className="p-6 flex flex-col gap-6 items-center lg:justify-center lg:flex-1">
            <h2 className=" text-2xl">Remote ETO/AVIT service</h2>
            <p>
              You may not need a permanent ETO onboard, but constant support is
              imperative. In todays world your guests and owners expect only the
              best in terms of connectivity, entertainment and services. With
              our years of Superyacht and commercial ETO/AVIT experience, we are
              on hand 24/7 to ensure any downtime is kept to an absolute
              minimum.
            </p>
            <div className=" pb-6 w-2/4 flex justify-center mx-auto">
              <Cta text={"Learn more"} />
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col lg:flex-row shadow-lg rounded-md h-full w-full lg:shadow-none lg:rounded-none lg:p-8  bg-white`}
        >
          <div className="flex justify-center  rounded-t-md lg:rounded-none lg:flex-1">
            <Image
              src={"/files.jpg"}
              alt="img"
              width={500}
              height={500}
              className="rounded-t-md lg:rounded-none"
            />
          </div>
          <div className="p-6 flex flex-col gap-6 items-center lg:justify-center lg:flex-1">
            <h2 className=" text-2xl">Vessel maintenance handbook</h2>
            <p>
              We know all too well how frustrating it can be finding manuals,
              paperwork and history in the heat of equipment failure. Our vessel
              handbook software keeps all of your equipment specific
              documentation stored intuitively. We will work together to create
              the hierarchy you need.
            </p>
            <div className=" pb-6 w-2/4 flex justify-center mx-auto">
              <Cta text={"Learn more"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
