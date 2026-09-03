'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, MapPin, Mail, Phone, Github, Linkedin, ExternalLink, Calendar } from 'lucide-react';

// Components
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import TypewriterEffect from '@/components/TypewriterEffect';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

// Types and Data
import type { Profile, SkillsData, Project, Article } from '@/types';
import profileData from '@/data/profile.json';
import skillsData from '@/data/skills.json';
import projectsData from '@/data/projects.json';
import articlesData from '@/data/articles.json';

export default function HomePage() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

	const profile = profileData as Profile;
	const skills = skillsData as SkillsData;
	const projects = projectsData as Project[];
	const articles = articlesData as Article[];

	const openProjectModal = (project: Project) => {
		setSelectedProject(project);
		setIsProjectModalOpen(true);
	};

	const closeProjectModal = () => {
		setIsProjectModalOpen(false);
		setSelectedProject(null);
	};

	return (
		<div className='min-h-screen bg-gray-950 text-white'>
			<Navbar />

			{/* Hero Section */}
			<section id='home' className='relative min-h-screen flex items-center justify-center overflow-hidden'>
				<ParticleBackground />
				<div className='relative z-10 text-center px-4 sm:px-6 lg:px-8'>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6'
					>
						{profile.name}
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className='text-xl sm:text-2xl lg:text-3xl text-green-400 mb-8'
					>
						<TypewriterEffect text={profile.title} delay={100} />
					</motion.div>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className='text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12'
					>
						{profile.tagline}
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.9 }}
					>
						<Button
							asChild
							size='lg'
							className='bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105'
						>
							<a href={profile.cv_url} download className='flex items-center gap-2'>
								<Download className='w-5 h-5' />
								Download CV
							</a>
						</Button>
					</motion.div>
				</div>
			</section>

			{/* About Section */}
			<section id='about' className='py-20 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl font-bold mb-6'>About Me</h2>
						<div className='w-24 h-1 bg-green-500 mx-auto'></div>
					</motion.div>

					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<p className='text-lg text-gray-300 leading-relaxed mb-8'>{profile.about}</p>

							<div className='space-y-4'>
								<div className='flex items-center gap-3'>
									<MapPin className='w-5 h-5 text-green-400' />
									<span className='text-gray-300'>{profile.location}</span>
								</div>
								<div className='flex items-center gap-3'>
									<Mail className='w-5 h-5 text-green-400' />
									<a
										href={`mailto:${profile.email}`}
										className='text-gray-300 hover:text-green-400 transition-colors'
									>
										{profile.email}
									</a>
								</div>
								<div className='flex items-center gap-3'>
									<Phone className='w-5 h-5 text-green-400' />
									<a
										href={`tel:${profile.phone}`}
										className='text-gray-300 hover:text-green-400 transition-colors'
									>
										{profile.phone}
									</a>
								</div>
							</div>

							<div className='mt-8'>
								<Button asChild className='bg-green-600 hover:bg-green-700 text-white font-semibold'>
									<a href={profile.cv_url} download className='flex items-center gap-2'>
										<Download className='w-4 h-4' />
										Download CV
									</a>
								</Button>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className='relative'
						>
							<div className='relative w-full max-w-md mx-auto'>
								<div className='absolute inset-0 bg-green-500/20 rounded-2xl blur-2xl'></div>
								<Image
									src='./images/profile.avif'
									alt='Alejandro Montilla'
									width={400}
									height={400}
									className='relative z-10 w-full rounded-2xl border-2 border-green-500/30'
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id='skills' className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50'>
				<div className='max-w-6xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl font-bold mb-6'>{skills.title}</h2>
						<p className='text-lg text-gray-400 max-w-2xl mx-auto mb-8'>{skills.subtitle}</p>
						<div className='w-24 h-1 bg-green-500 mx-auto'></div>
					</motion.div>

					<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
						{skills.skills.map((skill, index) => (
							<SkillCard key={skill.name} skill={skill} index={index} />
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id='projects' className='py-20 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl font-bold mb-6'>Projects</h2>
						<p className='text-lg text-gray-400 max-w-2xl mx-auto mb-8'>
							Here are some of my recent projects that showcase my skills and experience.
						</p>
						<div className='w-24 h-1 bg-green-500 mx-auto'></div>
					</motion.div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{projects.map((project, index) => (
							<ProjectCard
								key={project.id}
								project={project}
								index={index}
								onClick={() => openProjectModal(project)}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Articles Section - Conditional Rendering
			{articles.length > 0 && (
				<section id='articles' className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50'>
					<div className='max-w-6xl mx-auto'>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className='text-center mb-16'
						>
							<h2 className='text-4xl sm:text-5xl font-bold mb-6'>Recent Articles</h2>
							<p className='text-lg text-gray-400 max-w-2xl mx-auto mb-8'>
								Thoughts, tutorials, and insights from my development journey.
							</p>
							<div className='w-24 h-1 bg-green-500 mx-auto'></div>
						</motion.div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{articles.map((article, index) => (
								<motion.article
									key={article.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									whileHover={{ scale: 1.02 }}
									className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 group cursor-pointer hover:border-green-500/50 transition-all duration-300'
									onClick={() => window.open(article.article_url, '_blank')}
								>
									<div className='flex items-center gap-2 text-sm text-gray-400 mb-3'>
										<Calendar className='w-4 h-4' />
										{new Date(article.publication_date).toLocaleDateString()}
									</div>
									<h3 className='text-white font-bold text-xl mb-3 group-hover:text-green-400 transition-colors'>
										{article.title}
									</h3>
									<p className='text-gray-400 text-sm leading-relaxed mb-4'>{article.summary}</p>
									<div className='flex items-center text-green-400 text-sm font-medium group-hover:gap-2 transition-all'>
										Read More
										<ExternalLink className='w-4 h-4 ml-1 group-hover:ml-0 transition-all' />
									</div>
								</motion.article>
							))}
						</div>
					</div>
				</section>
			)} */}

			<section id='contact' className='py-20 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl font-bold mb-6'>Contact Me</h2>
						<p className='text-lg text-gray-400 max-w-2xl mx-auto mb-8'>
							You can get in touch with me through any of my contact channels.
						</p>
						<div className='w-24 h-1 bg-green-500 mx-auto'></div>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, y: 20 }} // Cambié x:20 a y:20 para que la animación venga desde abajo, más natural al estar centrado
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='space-y-12 flex flex-col items-center w-full max-w-4xl mx-auto'
					>
						<div className='w-full'>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
								{/* Elemento 1: Teléfono */}
								<div className='flex flex-col items-center gap-4 text-center'>
									<div className='w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center'>
										<Phone className='w-7 h-7 text-green-400' />
									</div>
									<div>
										<p className='text-white font-semibold text-sm tracking-wider uppercase mb-1'>
											Contact Number
										</p>
										<a
											href={`tel:${profile.phone}`}
											className='text-gray-400 hover:text-green-400 transition-colors'
										>
											{profile.phone}
										</a>
									</div>
								</div>

								{/* Elemento 2: Email */}
								<div className='flex flex-col items-center gap-4 text-center'>
									<div className='w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center'>
										<Mail className='w-7 h-7 text-green-400' />
									</div>
									<div>
										<p className='text-white font-semibold text-sm tracking-wider uppercase mb-1'>Email</p>
										<a
											href={`mailto:${profile.email}`}
											className='text-gray-400 hover:text-green-400 transition-colors'
										>
											{profile.email}
										</a>
									</div>
								</div>

								{/* Elemento 3: Ubicación */}
								<div className='flex flex-col items-center gap-4 text-center'>
									<div className='w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center'>
										<MapPin className='w-7 h-7 text-green-400' />
									</div>
									<div>
										<p className='text-white font-semibold text-sm tracking-wider uppercase mb-1'>Location</p>
										<p className='text-gray-400'>{profile.location}</p>
									</div>
								</div>
							</div>
						</div>

						{/* Botones de Redes Sociales */}
						<div className='flex justify-center gap-4'>
							<Button
								asChild
								variant='outline'
								size='lg'
								className='border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-green-500'
							>
								<a
									href={profile.github}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-2'
								>
									<Github className='w-5 h-5' />
									GitHub
								</a>
							</Button>
							<Button
								asChild
								variant='outline'
								size='lg'
								className='border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-green-500'
							>
								<a
									href={profile.linkedin}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-2'
								>
									<Linkedin className='w-5 h-5' />
									LinkedIn
								</a>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid md:grid-cols-3 gap-8 mb-8'>
						{/* About Column */}
						<div>
							<h3 className='text-xl font-bold mb-4'>About</h3>
							<p className='text-gray-400 text-sm leading-relaxed'>
								Full stack web developer passionate about creating innovative solutions and building
								applications that provide excellent user experiences.
							</p>
						</div>

						{/* Links Column */}
						<div>
							<h3 className='text-xl font-bold mb-4'>Links</h3>
							<div className='space-y-2'>
								<a href='#home' className='block text-gray-400 hover:text-green-400 transition-colors text-sm'>
									Home
								</a>
								<a href='#about' className='block text-gray-400 hover:text-green-400 transition-colors text-sm'>
									About
								</a>
								<a
									href='#projects'
									className='block text-gray-400 hover:text-green-400 transition-colors text-sm'
								>
									Projects
								</a>
								<a
									href='#contact'
									className='block text-gray-400 hover:text-green-400 transition-colors text-sm'
								>
									Contact
								</a>
							</div>
						</div>

						{/* Contact Column */}
						<div>
							<h3 className='text-xl font-bold mb-4'>Have questions?</h3>
							<div className='space-y-2 text-sm'>
								<p className='text-gray-400'>{profile.location}</p>
								<p className='text-gray-400'>{profile.phone}</p>
								<p className='text-gray-400'>{profile.email}</p>
							</div>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className='border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center'>
						<p className='text-gray-400 text-sm mb-4 sm:mb-0'>© 2025 {profile.name}. All Rights Reserved.</p>
						<div className='flex gap-4'>
							<a
								href={profile.github}
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-green-400 transition-colors'
							>
								<Github className='w-5 h-5' />
							</a>
							<a
								href={profile.linkedin}
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-green-400 transition-colors'
							>
								<Linkedin className='w-5 h-5' />
							</a>
						</div>
					</div>
				</div>
			</footer>

			{/* Project Modal */}
			<ProjectModal project={selectedProject} isOpen={isProjectModalOpen} onClose={closeProjectModal} />
		</div>
	);
}
