'use client';

import type React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Reset form
		setFormData({ name: '', email: '', message: '' });
		setIsSubmitting(false);

		// You can integrate with Netlify Forms, Formspree, or your own API here
		alert('Message sent successfully!');
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<motion.form
			initial={{ opacity: 0, x: -20 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
			onSubmit={handleSubmit}
			className='space-y-6'
		>
			<div>
				<Input
					type='text'
					name='name'
					placeholder='Your Name'
					value={formData.name}
					onChange={handleChange}
					required
					className='bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-500'
				/>
			</div>
			<div>
				<Input
					type='email'
					name='email'
					placeholder='Your Email'
					value={formData.email}
					onChange={handleChange}
					required
					className='bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-500'
				/>
			</div>
			<div>
				<Textarea
					name='message'
					placeholder='Your Message'
					value={formData.message}
					onChange={handleChange}
					required
					rows={5}
					className='bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-green-500 resize-none'
				/>
			</div>
			<Button
				type='submit'
				disabled={isSubmitting}
				className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 transition-all duration-300 disabled:opacity-50'
			>
				{isSubmitting ? (
					<motion.div
						animate={{ rotate: 360 }}
						transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
						className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
					/>
				) : (
					<>
						<Send className='w-4 h-4 mr-2' />
						Send Message
					</>
				)}
			</Button>
		</motion.form>
	);
}
