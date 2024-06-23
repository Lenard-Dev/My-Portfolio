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
            src="/Passenger_WelcomePage.png"
            title="Tri-Ride Passenger App"
            description="A tricycle booking mobile application. Fetch a tricycle ride from the comfort of your own home!"
          />
        </a>
        <a href={'/TriRideDriver'}>
          <ProjectCard
            src="/Driver_WelcomePage.png"
            title="Tri-Ride Driver App"
            description="A tricycle fetching Application for Tri-Ride Drivers"
          />
        </a>
      </div>

     
    </div >
  );
};

export default Projects;