import React from "react";
import { FiExternalLink } from "react-icons/fi";

const publications = [
  {
    title: "A Bound on Undirected Multiple-Unicast Network Information Flow",
    link: "https://ieeexplore.ieee.org/document/9729815",
    authors: "M. I. Qureshi and S. Thakor",
    venue: "IEEE Transactions on Information Theory",
    volume: "vol. 68, no. 7",
    pages: "pp. 4453-4469",
    year: "July 2022"
  },
  {
    title: "On the Information Capacity of Layered Undirected Unicast Networks",
    link: "https://ieeexplore.ieee.org/document/9181613",
    authors: "M. I. Qureshi and S. Thakor",
    venue: "IEEE Communications Letters",
    volume: "vol. 24, no. 12",
    pages: "pp. 2715-2718",
    year: "Dec. 2020"
  },
];

const conferences = [
  {
    title: "On Computing the Partition Bound for Undirected Multi-Source Unicast Network Information Flow",
    authors: "S. Thakor and M. I. Qureshi",
    venue: "National Conference on Communications",
    year: "2024",
    note: "(Accepted)",
    link: null
  },
  {
    title: "On the Partition Bound for Undirected Unicast Network Information Capacity",
    link: "https://ieeexplore.ieee.org/document/9174428",
    arxiv: "https://arxiv.org/abs/2005.10536",
    authors: "M. I. Qureshi and S. Thakor",
    venue: "IEEE International Symposium on Information Theory",
    pages: "pp. 1623-1628",
    year: "2020"
  },
  {
    title: "Undirected Unicast Network Capacity: A Partition Bound",
    link: "https://ieeexplore.ieee.org/document/8849499",
    arxiv: "https://arxiv.org/abs/2005.10530",
    authors: "S. Thakor and M. I. Qureshi",
    venue: "IEEE International Symposium on Information Theory",
    pages: "pp. 196-200",
    year: "2019"
  },
];

export default function Publications() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 font-sans">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left banner */}
        <div className="md:w-1/4 flex items-start ml-14">
        <h2 className="sticky top-24 font-semibold text-xl md:text-2xl text-blue-900">
            Papers Published/Accepted
        </h2>
        </div>

        {/* Right: publication cards, shifted right and with light blue lines */}
        <div className="md:w-4/5 w-full flex flex-col gap-8 md:ml-12 ml-0">
          {/* Journals */}
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="border-b border-blue-200 pb-7 mb-2 last:border-b-0"
            >
              <div className="flex justify-between items-center">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold underline hover:text-blue-600 transition"
                >
                  {pub.title}
                </a>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-gray-700 hover:text-blue-600"
                  aria-label="External link"
                >
                  <FiExternalLink className="inline w-5 h-5" />
                </a>
              </div>
              <div className="text-base mt-1 font-medium">{pub.authors}</div>
              <div className="mt-1 text-lg font-bold">
                {pub.venue}
                <span className="font-normal text-base"> · {pub.year}</span>
              </div>
              <div className="text-base text-gray-700">
                {pub.volume && `${pub.volume}, `}
                {pub.pages && `${pub.pages}`}
              </div>
            </div>
          ))}

          {/* Conferences */}
          {conferences.map((conf) => (
            <div
              key={conf.title}
              className="border-b border-blue-200 pb-7 mb-2 last:border-b-0"
            >
              <div className="flex justify-between items-center">
                {conf.link ? (
                  <a
                    href={conf.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-semibold underline hover:text-blue-600 transition"
                  >
                    {conf.title}
                  </a>
                ) : (
                  <span className="text-2xl font-semibold">{conf.title}</span>
                )}
                {conf.link && (
                  <a
                    href={conf.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-gray-700 hover:text-blue-600"
                    aria-label="External link"
                  >
                    <FiExternalLink className="inline w-5 h-5" />
                  </a>
                )}
              </div>
              <div className="text-base mt-1 font-medium">{conf.authors}</div>
              <div className="mt-1 text-lg font-bold">
                {conf.venue}
                <span className="font-normal text-base">{conf.year && ` · ${conf.year}`}</span>
                {conf.note && (
                  <span className="text-sm font-normal text-gray-600 ml-2">{conf.note}</span>
                )}
              </div>
              <div className="text-base text-gray-700">
                {conf.pages && `${conf.pages}`}
                {conf.arxiv && (
                  <a
                    href={conf.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 text-blue-700 underline hover:text-blue-600"
                  >
                    [arXiv]
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


