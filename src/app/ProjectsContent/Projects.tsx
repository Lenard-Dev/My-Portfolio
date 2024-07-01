import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 items-center justify-center">
        <a href={'/TriRide'}>
          <ProjectCard
            src="/triride-banner.png"
            title="Tri-Ride Passenger App"
            description="A tricycle booking mobile application. Fetch a tricycle ride from the comfort of your own home!"
          />
          <div className="group relative transition-transform duration-300 active:scale-95 md:mr-6 w-fit h-auto  ">
            <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
              <span className='block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80'>
                <a href="/TriRide">
                  Learn more...
                </a>
              </span>
            </button>
          </div>
        </a>
        <a href={'/TriRideDriver'}>
          <ProjectCard
            src="/triride-banner-driver.png"
            title="Tri-Ride Driver App"
            description="A tricycle fetching Application for Tri-Ride Drivers"
          />
          <div className="group relative transition-transform duration-300 active:scale-95 md:mr-6 w-fit h-auto ">
            <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
              <span className='block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80'>
                <a href="/TriRideDriver">
                  Learn more...
                </a>

              </span>
            </button>
          </div>
        </a>
      </div>


    </div >
  );
};

export default Projects;