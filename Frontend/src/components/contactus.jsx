import React from 'react';

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your message has been sent!');
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 text-black dark:text-white flex flex-col lg:flex-row items-center gap-12">

      {/* Left Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start ">
        <h1 className="text-4xl font-bold mb-6 text-center self-center">Contact Us</h1>

        <img src="/Home.svg" alt="Contact Illustration" className="w-3/4 lg:w-full mb-6" />

        <p className="lg:hidden text-center text-blue-600 mb-4 font-semibold">
          Fill the form below to contact us ⬇️
        </p>

        <p className="text-lg text-justify leading-relaxed">
          We would love to hear from you! Whether you have questions about our products, 
          need assistance with your order, or want to share your feedback, please feel free 
          to reach out. Your thoughts and inquiries are important to us, and we are here 
          to help you.
        </p>
      </div>

      {/* Right Section (Form) */}
      <form 
        onSubmit={handleSubmit} 
        className="lg:w-1/2 w-full mt-8 flex flex-col gap-4 bg-slate-100 dark:bg-gray-800 p-6 rounded-lg "
      >
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

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 transition-colors text-white py-2 px-4 rounded w-fit mx-auto">
          Send Message
        </button>

        <p className="text-lg text-center font-semibold mt-4">
          Thank you for reaching out to us!<br />
          <strong>The Shop24/7 Books Team</strong>
        </p>
      </form>
    </div>
  );
}

export default ContactUs;

