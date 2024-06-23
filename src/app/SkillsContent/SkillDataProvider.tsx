"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    skillName: string;
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({skillName, src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt={skillName}
            />
            <p className={'text-[15] text-white font-medium mt-[10px] text-center mb-[13px] '}>{skillName}</p>
        </motion.div>
    )
}

export default SkillDataProvider