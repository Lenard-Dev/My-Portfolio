"use client"
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "../../components/constants";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";
import SkillText from "./SkillText";
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../utils/motion'

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full w-full relative overflow-hidden mt-11"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />


      <motion.div
        variants={slideInFromLeft(0.5)}
        className='cursive text-[28px] text-white font-medium mt-[10px] text-center mb-[13px]'
      >
        Front End
      </motion.div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            skillName={image.skill_name}  
          >
           
          </SkillDataProvider>
        ))}
      </div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className='cursive text-[28px] text-white font-medium mt-[10px] text-center mb-[13px]'
      >
        Back End
      </motion.div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            skillName={image.skill_name}  
          />
        ))}
      </div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className='cursive text-[28px] text-white font-medium mt-[10px] text-center mb-[13px]'
      >
        Full Stack
      </motion.div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            skillName={image.skill_name}  
          />
        ))}
      </div>


      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;