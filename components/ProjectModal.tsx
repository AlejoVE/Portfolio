'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, X } from 'lucide-react';
import Image from 'next/image';

interface ProjectModalProps {
	project: Project | null;
	isOpen: boolean;
	onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	if (!project) return null;

	return (
		<>
			<Dialog open={isOpen} onOpenChange={onClose}>
				<DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700'>
					<DialogHeader>
						<DialogTitle className='text-2xl font-bold text-white mb-4'>{project.title}</DialogTitle>
					</DialogHeader>

					<div className='space-y-6'>
						{/* Image Gallery */}
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							{project.images.map((image, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: index * 0.1 }}
									className='relative overflow-hidden rounded-lg cursor-pointer'
									onClick={() => setSelectedImage(image)}
								>
									<Image
										src={image || '/placeholder.svg'}
										alt={`${project.title} screenshot ${index + 1}`}
										width={600}
										height={400}
										className='w-full h-48 object-cover'
									/>
								</motion.div>
							))}
						</div>

						{/* Description */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-2'>About This Project</h3>
							<p className='text-gray-300 leading-relaxed'>{project.description}</p>
						</div>

						{/* Technologies */}
						<div>
							<h3 className='text-lg font-semibold text-white mb-3'>Technologies Used</h3>
							<div className='flex flex-wrap gap-2'>
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className='px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30'
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Action Buttons */}
						<div className='flex gap-4 pt-4'>
							<Button asChild className='bg-green-600 hover:bg-green-700 text-white'>
								<a
									href={project.live_site_url}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-2'
								>
									<ExternalLink className='w-4 h-4' />
									View Live Site
								</a>
							</Button>
							{project.github_url && project.github_url.trim().length > 0 && (
								<Button asChild variant='outline' className='border-gray-600 text-gray-300 hover:bg-gray-800'>
									<a
										href={project.github_url}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-2'
									>
										<Github className='w-4 h-4' />
										View Code
									</a>
								</Button>
							)}
						</div>
					</div>
				</DialogContent>
			</Dialog>

			{/* Image viewer modal */}
			<DialogPrimitive.Root open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
				<DialogPrimitive.Portal>
					<DialogPrimitive.Overlay asChild>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm'
						/>
					</DialogPrimitive.Overlay>
					<DialogPrimitive.Content
						className='fixed inset-0 z-50 flex items-center justify-center p-4 outline-none'
						onClick={() => setSelectedImage(null)}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.2, ease: 'easeOut' }}
							className='flex flex-col items-center gap-4'
							onClick={(e) => e.stopPropagation()}
						>
							<DialogPrimitive.Close asChild>
								<button
									className='bg-white/90 text-black rounded-full p-1.5 shadow-2xl transition-all duration-200 hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50'
									aria-label='Close'
								>
									<X size={20} />
								</button>
							</DialogPrimitive.Close>
							<Image
								src={selectedImage || ''}
								alt='Selected project image'
								width={1920}
								height={1080}
								className='block object-contain rounded-lg max-h-[80vh] max-w-[90vw] shadow-2xl'
							/>
						</motion.div>
					</DialogPrimitive.Content>
				</DialogPrimitive.Portal>
			</DialogPrimitive.Root>
		</>
	);
}
