'use client';
import React from 'react';
import { RxLinkedinLogo } from 'react-icons/rx';

const LinkedInLink = () => {
  const handleClick = () => {
    window.open('www.linkedin.com/in/john-lenard-ramos-86263a28b', '_blank');
  };

  return (
    <p
      className="flex flex-row items-center my-[15px] cursor-pointer"
      onClick={handleClick}
    >
      <RxLinkedinLogo />
      <span className="text-[15px] ml-[6px]">Linkedin</span>
    </p>
  );
};

export default LinkedInLink;