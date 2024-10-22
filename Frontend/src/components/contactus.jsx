import React from 'react';

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Your message has been sent!');
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 text-black dark:text-white ">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <p className="text-lg text-justify leading-relaxed mb-6">
        We would love to hear from you! Whether you have questions about our products, need assistance with your order, or want to share your feedback, please feel free to reach out to us. Your thoughts and inquiries are important to us, and we are here to help you.
      </p>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">Name:</label>
          <input type="text" id="name" required className="w-full p-2 border border-gray-300 rounded bg-white dark:text-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Email:</label>
          <input type="email" id="email" required className="w-full p-2 border border-gray-300 rounded bg-white dark:text-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">Message:</label>
          <textarea id="message" required className="w-full p-2 border border-gray-300 rounded bg-white dark:text-black" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send Message</button>
      </form>

      <p className="text-lg text-center font-semibold">
        Thank you for reaching out to us!<br />
        <strong>The Shop24/7 Books Team</strong>
      </p>
    </div>
  );
}

export default ContactUs;
