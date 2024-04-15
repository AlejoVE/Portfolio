document.getElementById('submit-form').addEventListener('click', (e) => {
	e.preventDefault();

	const name = document.getElementById('name-form').value;
	const email = document.getElementById('email-form').value;
	const subject = document.getElementById('subject-form').value;
	const message = document.getElementById('message-form').value;

	const data = { name, email, subject, message };

	sendEmail(data);
});
