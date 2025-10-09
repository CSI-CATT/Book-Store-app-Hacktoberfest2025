import React from 'react';

function About() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-20 text-gray-900 dark:text-gray-100 font-sans">
      
      {/* Header */}
      <header className="mb-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8">
          Welcome to <span className="text-blue-600 dark:text-blue-400">Shop24/7 Books</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          A reader-first platform built to inspire, inform, and connect book lovers everywhere.
        </p>
      </header>

      {/* Main Content */}
      <section className="space-y-10 text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200 text-justify px-1 sm:px-0">
        
        <p className="mb-6">
          <strong className="font-semibold">Shop24/7 Books</strong> is an independent online bookstore created to serve passionate readers of all kinds. From timeless classics to the latest in technology and design, we curate a collection that supports exploration, learning, and creativity.
        </p>

        <p className="mb-6">
          Our goal is simple: to make high-quality books accessible to everyone. We go beyond selling books — we foster a space where stories matter, knowledge is shared, and ideas grow. Every title we offer is selected to enrich, challenge, or simply entertain.
        </p>

        <p className="mb-6">
          Established in <strong className="font-semibold">2024</strong>, we believe that books remain one of the most powerful tools for self-development and education. That's why our growing library spans fiction, non-fiction, academic resources, professional development, and much more.
        </p>

        <p className="mb-6">
          Designed for modern readers, our platform combines ease of use with personalized recommendations and reliable service. Whether you're a student, a professional, or a casual reader — we’re here to help you discover your next great read.
        </p>

        <p className="text-center font-semibold text-lg sm:text-xl pt-10">
          Thank you for reading with us.<br />
          <span className="text-blue-600 dark:text-blue-400 font-bold">— The Shop24/7 Books Team</span>
        </p>
      </section>
    </main>
  );
}

export default About;
