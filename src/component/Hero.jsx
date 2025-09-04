import React from 'react';
import { FaEnvelope, FaLinkedin, FaDownload, FaUniversity,} from 'react-icons/fa';

function Hero() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-20 font-sans">
      {/* Left: Photo + Contact */}
      <div className="flex flex-col items-center md:items-start mx-6 md:mr-16">
        <img
          src="/BioPic.png"
          alt="Profile"
          className="rounded-full border-2 border-blue-300 w-36 h-36 object-cover mb-5"
        />
        <div className="flex gap-x-5 mt-2">
          <a
            href="mailto:mohammaq@srmist.edu.in"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-400 px-4 py-1 rounded-full shadow transition"
            >
            <FaEnvelope className="w-5 h-5" />
            <span className="font-semibold text-base">Email</span>
            </a>

          <a
            href="https://www.linkedin.com/in/mohammad-ishtiyaq-qureshi-5b40959b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="font-semibold text-base">LinkedIn</span>
          </a>
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition"
          >
            <FaDownload className="w-5 h-5" />
            <span className="font-semibold text-base">CV</span>
          </a>
        </div>
      </div>
      {/* Right: Info */}
      <div className="flex flex-col justify-center items-start max-w-xl">
        <div className="flex items-center mb-3">
          <div className="w-1 h-10 bg-blue-400 mr-4 rounded"></div>
          <span className="font-serif text-3xl md:text-4xl font-light text-blue-900 tracking-tight">
            Mohammad Ishtiyaq Qureshi
          </span>
        </div>
        <p className="text-blue-700 mb-2 text-lg font-medium">
          Research Assistant Professor
        </p>
        <div className="mb-4">
          <h2 className="text-blue-600 font-semibold flex items-center gap-2">
            <FaUniversity className="w-4 h-4" /> Departments
          </h2>
          <ul className="ml-5 mt-1 space-y-1 text-base">
            <li className="font-medium text-blue-800">
              Department of Computational Intelligence
            </li>
            <li className="font-medium text-blue-800">
              Faculty of Engineering &amp; Technology, Kattankulathur – Chennai
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;




