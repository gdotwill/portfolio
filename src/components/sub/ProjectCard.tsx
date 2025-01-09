import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment     
// @ts-ignore
const ProjectCard = ({ imgUrl, title, description, previewUrl, stacks }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <hr className="mt-5 mb-5"/>
        <div style={{ display: 'ruby' }}>
            { stacks.map((stack: { id: React.Key | null | undefined; stackUrl: string | StaticImport; }) => (
            <Image
              key={stack.id}
              src={stack.stackUrl}
              // src="/react.png"
              alt="stack image"
              width={30}
              height={30}
              className="flex mr-5"
            />
          ))
        }

        </div>
       
      </div>
    </div>
  );
};

export default ProjectCard;
