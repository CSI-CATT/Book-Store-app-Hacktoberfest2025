import React from "react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Aditya-jambhale",
    color: "hover:bg-[#181717]",
    svg: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.805 1.304 3.49.997.108-.774.42-1.305.763-1.605-2.665-.304-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23A11.52 11.52 0 0112 5.8c1.02.004 2.045.138 3.003.404 2.29-1.552 3.293-1.23 3.293-1.23.653 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.815 1.103.815 2.222 0 1.606-.015 2.9-.015 3.292 0 .32.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_.adityeahhh",
    color: "hover:bg-[#E1306C]",
    svg: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adityajambhale",
    color: "hover:bg-[#0077B5]",
    svg: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.11 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.3h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-6.8c0-1.62-.03-3.7-2.26-3.7-2.27 0-2.62 1.77-2.62 3.6V24h-5V8z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://x.com/AdityaJambhal18",
    color: "hover:bg-[#1DA1F2]",
    svg: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M24 4.557a9.94 9.94 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.95.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.384 4.482c-4.083-.2-7.702-2.16-10.126-5.13a4.822 4.822 0 00-.664 2.475c0 1.708.87 3.214 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.918 4.918 0 003.946 4.814 4.996 4.996 0 01-2.224.084 4.92 4.92 0 004.588 3.417A9.868 9.868 0 010 19.54a13.896 13.896 0 007.548 2.209c9.056 0 14.01-7.507 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/918108765751",
    color: "hover:bg-[#25D366]",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 transition-colors duration-300 group-hover:text-white"
        aria-hidden="true"
        shapeRendering="geometricPrecision"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12c0 2.128.636 4.11 1.727 5.76L0 24l6.283-1.656A11.965 11.965 0 0012 24c6.627 0 12-5.373 12-12a11.94 11.94 0 00-3.48-8.52zM12 21.5a9.5 9.5 0 01-5.22-1.59l-.37-.25-3.73 1 1-3.64-.26-.38A9.5 9.5 0 1121.5 12c0 5.24-4.26 9.5-9.5 9.5zm5.32-7.17c-.29-.14-1.72-.85-1.98-.95-.26-.1-.44-.15-.63.15s-.73.92-.9 1.1c-.17.19-.33.22-.62.08a5.33 5.33 0 01-1.57-1.03 5.9 5.9 0 01-1.08-1.34c-.12-.21-.02-.33.09-.45.09-.1.22-.25.34-.37.12-.13.16-.22.26-.35.1-.14.05-.27 0-.38a.48.48 0 00-.58-.3c-.19 0-1.6.76-2.15 1.8a8.03 8.03 0 003.11 3.76c.43.18.76.14 1.04.09a1.65 1.65 0 001.22-1.02c.13-.28.2-.5.29-.72a.43.43 0 00-.07-.4z" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200 px-6 py-12 sm:px-12 md:px-20">
      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        className="flex flex-wrap justify-center gap-6 mb-10 text-base font-semibold tracking-wide text-gray-700 dark:text-gray-300"
      >
        {["Home", "Course", "About", "Contact us"].map((item) => (
          <a
            key={item}
            href={`/${item === "Home" ? "" : item.replace(/\s+/g, "")}`}
            className="relative rounded px-3 py-1 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors duration-300"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 flex-wrap mb-10">
        {socials.map(({ name, href, color, svg }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${color} hover:text-white transform hover:scale-110 duration-300`}
            title={name}
          >
            {svg}
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 select-none">
        © {new Date().getFullYear()} Aditya Jambhale. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
