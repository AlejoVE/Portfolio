import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'

const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID

emailjs.init(EMAILJS_USER_ID)
export const sendEmail = async (data) => {
	try {
		Swal.fire({
			title: 'Sending...',
			showCancelButton: false,
			showConfirmButton: false,
			didOpen: () => {
				Swal.showLoading()
			},
			didClose: () => {
				Swal.hideLoading()
			},
		})
		await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, EMAILJS_USER_ID)
		Swal.fire({
			title: 'Message sent!',
			text: 'Thanks for contact me, I will answer you ASAP',
			icon: 'success',
			confirmButtonText: 'Ok',
			didOpen: () => {
				Swal.hideLoading()
		   },
		})
	} catch (error) {
		Swal.fire({
			title: 'Something went wrong',
			html: '<h5>Please contact me directly at <strong>ale.montilla.dev@gmail.com</strong></h5>',
			icon: 'error',
			didOpen: () => {
				 Swal.hideLoading()
			},
			confirmButtonText: 'Ok',
		})
	}
}
