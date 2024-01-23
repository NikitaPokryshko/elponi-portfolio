'use-client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const ANIMATION_DELAY = 0.3
const IMAGE_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

interface SkillsDataProviderProps {
  src: string;
  width: number;
  height: number;
  index: number;
}

// TODO: Remove provider from name since it's confusing 
const SkillDataProvider = ({ src, width, height, index }: SkillsDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={IMAGE_VARIANTS}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * ANIMATION_DELAY }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt=""
      />
    </motion.div>
  )
}

export default SkillDataProvider