import React from 'react';
import person from '../assets/PersonalData';

const About = () => {
	return (
		<div className='container-fluid padding' id='about'>
			<div className='row headers padding'>
				<div className='col-12 text-center '>
					<h1 className='display-4 animated wow slideInLeft'>About Me</h1>
				</div>
				<hr />
				<div className='col-xs-12 col-sm-12 col-md-4 padding'>
					<figure className='figure'>
						<img
							src={person.about.profilePiPicture}
							width='100%'
							alt='profile'
							className='rounded-circle'
						/>
						<figcaption className='figure-caption text-center p-3'>
							{person.about.name}
						</figcaption>
					</figure>
				</div>
				<div className='col-xs-12 col-sm-12 col-md-8'>
					<ul>
						{person.background.map((bg, index) => (
							<li key={index} className='mb-3 lead'>
								{`${bg.experience} `}
								<a
									href={bg.url}
									target='_blank'
									rel='noopener noreferrer'
									className='education'
								>
									{bg.school}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='row'>
				<div className='container'>
					<div className='row jumbotron'>
						<div className='col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-9'>
							<p className='lead'>
								Check out more details about my experiences!
							</p>
						</div>
						<div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>
							<a
								href={person.about.resume}
								target='_blank'
								rel='noopener noreferrer'
							>
								<button
									type='button'
									className='btn btn-primary btn-lg'
								>
									<i className='fas fa-download pr-2'></i>
									Download Resume
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<hr className='my-4' />
		</div>
	);
};

export default About;
