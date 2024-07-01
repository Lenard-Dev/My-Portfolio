import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;

}

const ProjectCard = ({ src, title, description,  }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#7042f88b] max-w-[550px] max-h-[510px] items-center justify-center h-full w-full">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>

      
    </div>
  );
};

export default ProjectCard;