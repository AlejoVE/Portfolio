'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			// Update active section based on scroll position
			const sections = navItems.map((item) => item.href.substring(1));
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});

			if (currentSection) {
				setActiveSection(currentSection);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.getElementById(href.substring(1));
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<motion.div whileHover={{ scale: 1.05 }} className='text-2xl font-bold text-white'>
						<Link
							href='#home'
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('#home');
							}}
						></Link>
					</motion.div>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8'>
						{navItems.map((item) => (
							<motion.a
								key={item.name}
								href={item.href}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.href);
								}}
								className={`text-sm font-medium transition-colors duration-300 hover:text-green-400 ${
									activeSection === item.href.substring(1) ? 'text-green-400' : 'text-gray-300'
								}`}
								whileHover={{ y: -2 }}
								whileTap={{ y: 0 }}
							>
								{item.name}
							</motion.a>
						))}
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className='text-gray-300 hover:text-white transition-colors'
						>
							{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className='md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800'
					>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection(item.href);
									}}
									className={`block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-green-400 ${
										activeSection === item.href.substring(1) ? 'text-green-400' : 'text-gray-300'
									}`}
								>
									{item.name}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
}
