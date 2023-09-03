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

const Why = () => {
  return (
    <div className=" bg-cover bg-center bg-no-repeat bg-[url('/why-back.jpg')]">
      <div className="flex flex-col w-full h-full bg-[rgba(0,0,0,0.5)]">
        <div className=" p-6 md:p-20">
          <h2 className="text-3xl text-white text-center mb-6">
            A wealth of experience on hand 24/7...
          </h2>

          <div className="  md:p-0 text-center flex flex-col gap-6 flex-1 justify-center">
            {/* <p className="md:px-6 text-white">
              We know as well as anyone the technical challenges that
              Superyachts face, as we are all experienced ETO/AVIT's with years
              of experience on some of that worlds most prolific Superyachts. We
              can relate with your needs and requirements no matter the size of
              the vessel or the systems you're running.
            </p> */}
            <ul className="text-start italic text-lg md:px-12">
              <li className="text-white">- Owner/Guest demands</li>
              <li className="text-white">
                - Engineers without enough hours in the day
              </li>
              <li className="text-white">
                - System outage at the worst moment
              </li>
              <li className="text-white">- Time</li>
            </ul>
            <p className="md:px-6 text-white">
              Regardless of vessel size, the days of not needing ETO's are over.
              From our experience, at most you could tick 3 out of 4 items
              above; one you will never find! We are all highly experienced
              ETO/AVIT's with years of experience on some of the worlds most
              prolific Superyachts ranging from 50m to 140m+. Motor, Sail,
              Expedition, Private, Charter... we've seen it all and we can
              relate with your needs and requirements no matter the size of the
              vessel or the systems you're running.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
