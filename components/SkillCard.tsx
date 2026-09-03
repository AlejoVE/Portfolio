"use client"

import { motion } from "framer-motion"
import type { Skill } from "@/types"
import * as Icons from "react-icons/si"

interface SkillCardProps {
  skill: Skill
  index: number
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const IconComponent = (Icons as any)[skill.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 10px 30px ${skill.color}20`,
        transition: { duration: 0.2 },
      }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center group hover:border-green-500/50 transition-all duration-300"
    >
      <div className="flex justify-center mb-4">
        {IconComponent && (
          <IconComponent
            className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
            style={{ color: skill.color }}
          />
        )}
      </div>
      <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
    </motion.div>
  )
}
