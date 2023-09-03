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
import { Cta } from ".";

const Hero = () => {
  return (
    <div className="w-screen h-[90vh] md:h-screen bg-cover bg-center bg-no-repeat bg-[url('/hero-img.jpg')] flex content-center items-center justify-center  relative  ">
      <div className="flex flex-col content-center items-center justify-center text-center w-full h-full bg-[rgba(0,0,0,0.4)]">
        <h1 className="text-white text-3xl md:w-3/4 italic pb-6 px-8">
          {" "}
          Bespoke software and support solutions to optimise vessel efficiency
          and guest experience
        </h1>
        <Cta text={"Get started"} />
        {/* <p>
          We create bespoke software solutions to optimise vessel and crew
          efficiency
        </p> */}
      </div>
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L30,154.7C60,149,120,139,180,149.3C240,160,300,192,360,181.3C420,171,480,117,540,112C600,107,660,149,720,149.3C780,149,840,107,900,90.7C960,75,1020,85,1080,74.7C1140,64,1200,32,1260,26.7C1320,21,1380,43,1410,53.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
