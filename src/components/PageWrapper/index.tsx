import React from 'react'
import { motion, AnimatePresence  } from "framer-motion"

interface Props{
  children: any
}

export default function PageWrapper({children}:Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.div>
    </AnimatePresence>
  )
}
