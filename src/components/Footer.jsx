import React from 'react';
import person from '../assets/PersonalData';

const Footer = () => {
	return (
		<footer>
			<div className='container-fluid padding'>
				<div className='row text-center'>
					<div className='col-md-4'>
						{/* <img src={person.about.logo} width="50" height="52" alt="logo"/> */}
						<span>Alejandro</span>
						<hr className='light' />
						<p>+32 487 75 18 95</p>
						<p>ale.montilla.dev@gmail.com</p>
					</div>
					<div className='col-md-4'>
						<hr className='light' />
						<h5>Address</h5>
						<hr className='light' />
						<p>Rue de la Tonne, 80B</p>
						<p>Liege, Belgium</p>
					</div>
					<div className='col-md-4'>
						<hr className='light' />
						<h5>Social Media</h5>
						<hr className='light' />
						{person.socialMedias.map((media, index) => (
							<p key={index} className='footer-media'>
								<a
									href={media.url}
									target='_blank'
									rel='noopener noreferrer'
								>
									{media.name}
								</a>
							</p>
						))}
					</div>
					<div className='col-12'>
						<hr className='light-100' />
						<h5 className='footer-media'>
							&copy;2021 Alejandro Montilla
						</h5>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
