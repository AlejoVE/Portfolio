"use client"

import { motion } from "framer-motion"
import type { Project } from "@/types"
import Image from "next/image"

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden group cursor-pointer hover:border-green-500/50 transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image_url || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-semibold text-lg">View Project</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
