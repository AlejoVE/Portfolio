import Swal from 'sweetalert2';

const API_URL = process.env.REACT_APP_API_URL;

export const sendEmail = async (data) => {
	try {
		const res = await fetch(`${API_URL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!res.ok) {
			Swal.fire('Oh no, something when wrong, please try later', 'error');
		}

		Swal.fire(
			'Message sent!',
			'Thanks for contact me, I will answer you ASAP',
			'success'
		);
	} catch (error) {
		console.log(error);
	}
};
