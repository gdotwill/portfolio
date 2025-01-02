'use client'

import {
    cloudSkills,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
  
const Cloud = () => {
    return (
      <section
        id='cloud'
        className="flex flex-col items-center justify-center h-full mb-100 relative overflow-hidden"
        style={{ transform: "scale(0.9" }}
      >
        {/* <div className="">
            <motion.div
            variants={slideInFromTop}
            className="text-[40px] font-medium text-center text-gray-200"
            >
            Cloud Certification
            </motion.div>
        </div> */}

        {/* <SkillText header='Cloud Certfication' /> */}

        <h1 className="justify-center my-4 m-auto text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Cloud Certification
        </h1>
  
        <div className="flex flex-row justify-around  py-10 flex-wrap gap-5 items-center">
          {cloudSkills.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        

      </section>
    );
  };
  
  export default Cloud;