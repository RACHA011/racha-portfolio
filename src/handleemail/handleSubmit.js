import emailjs from 'emailjs-com';

const handleSubmit = (event) => {
  event.preventDefault();

  emailjs
    .sendForm('service_0htpxyk', 'template_867h6us', event.target, 'F9HKN7u04Vqdu6l3_')
    .then((result) => {
      console.log(result.text);
      alert('Email sent successfully!');
      window.location.href = '/';
    })
    .catch((error) => {
      console.error(error.text);
      alert('Failed to send email.');
    });

  event.target.reset();
};

export default handleSubmit;
