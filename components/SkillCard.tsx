'use client';

import { motion } from 'framer-motion';
import type { Skill } from '@/types';

import {
	SiGooglegemini,
	SiNodedotjs,
	SiReact,
	SiVuedotjs,
	SiJavascript,
	SiTypescript,
	SiMongodb,
	SiMysql,
	SiHtml5,
	SiBootstrap,
	SiSass,
	SiGit,
	SiGithub,
	SiRedux,
	SiNetlify,
	SiSocketdotio,
	SiN8N,
	SiDocker,
	SiExpress,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { DiHeroku } from 'react-icons/di';

// 2. A dictionary that maps the JSON string to the actual component
const iconMap: Record<string, React.ElementType> = {
	SiGooglegemini,
	SiNodedotjs,
	SiReact,
	SiVuedotjs,
	SiJavascript,
	SiTypescript,
	SiMongodb,
	SiMysql,
	SiHtml5,
	SiBootstrap,
	SiSass,
	SiGit,
	SiGithub,
	SiRedux,
	SiNetlify,
	SiSocketdotio,
	SiN8N,
	SiDocker,
	FaCss3Alt,
	DiHeroku,
	SiExpress,
};

interface SkillCardProps {
	skill: Skill;
	index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
	// 3. We retrieve the component directly from the dictionary
	const IconComponent = iconMap[skill.icon];

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
			className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center group hover:border-green-500/50 transition-all duration-300'
		>
			<div className='flex justify-center mb-4'>
				{IconComponent ? (
					<IconComponent
						className='w-12 h-12 group-hover:scale-110 transition-transform duration-300'
						style={{ color: skill.color }}
					/>
				) : (
					<div className='w-12 h-12 bg-gray-700 rounded-full' />
				)}
			</div>
			<h3 className='text-white font-semibold text-lg'>{skill.name}</h3>
		</motion.div>
	);
}
