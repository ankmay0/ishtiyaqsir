import React from "react";
import { FaUniversity } from "react-icons/fa";

const experiences = [
  {
    role: "Research Assistant Professor",
    org: "SRM IST Chennai",
    link: "https://www.srmist.edu.in/",
    location: "",
    date: "Jan 2025 – Present",
    desc: "Research Assistant Professor, Full-time.",
    icon: <FaUniversity className="text-blue-600 w-6 h-6" />,
  },
  {
    role: "Assistant Professor",
    org: "C. V. Raman Global University",
    link: "https://cgu-odisha.ac.in/",
    location: "Bhubaneswar",
    date: "July 2023 – Dec. 2024",
    desc: "I worked as an Assistant Professor in the Department of Computer Science Engineering.",
    icon: <FaUniversity className="text-blue-600 w-6 h-6" />,
  },
  {
    role: "Project Associate",
    org: "IIT Mandi",
    link: "https://www.iitmandi.ac.in/",
    location: "",
    date: "20 July 2021 – mid-April 2023",
    desc: "I worked as a Project Associate at IIT Mandi.",
    icon: <FaUniversity className="text-blue-600 w-6 h-6" />,
  },
  {
    role: "Intern",
    org: "IIT Mandi iHub",
    link: "https://ihubiitmandi.in/",
    location: "",
    date: "April 2021 – mid-July 2021",
    desc: "I interned at the IIT Mandi iHub and HCI Foundation.",
    icon: <FaUniversity className="text-blue-600 w-6 h-6" />,
  },
  {
    role: "Assistant Professor",
    org: "NRI Institute of Information Science and Technology",
    link: "https://www.nrigroupindia.com/",
    location: "Bhopal",
    date: "Aug 2015 – Jan 2016",
    desc: "I gained teaching experience as an Assistant Professor.",
    icon: <FaUniversity className="text-blue-600 w-6 h-6" />,
  },
];

export default function Experience() {
  return (
    <section className="bg-[#f1f6fb] min-h-screen py-12 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-9">
          {/* Left Column: Title */}
          <h2 className="sticky top-24 font-semibold text-xl md:text-2xl text-blue-900 -ml-8">
            Work Experience
            </h2>

          
          {/* Right Column: Experience Details */}
          <div className="w-3/4 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200 rounded z-0"></div>
            <div className="flex flex-col gap-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex items-start relative">
                  {/* Timeline Icon */}
                  <div className="relative z-10 flex flex-col items-center" style={{ minWidth: 48 }}>
                    <div className="bg-white rounded-full border-2 border-blue-200 shadow w-12 h-12 flex items-center justify-center">
                      {exp.icon}
                    </div>
                  </div>
                  {/* Experience Card */}
                  <div className="bg-white rounded-lg shadow border border-blue-100 p-6 ml-6 flex-1 text-black">
                    <div className="text-xs text-blue-600 font-semibold">{exp.date}</div>
                    <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold text-base hover:underline"
                    >
                      {exp.org}
                    </a>
                    {exp.location && <span className="text-gray-700 ml-2">{exp.location}</span>}
                    <p className="mt-3 text-base">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
