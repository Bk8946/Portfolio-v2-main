"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";
import dynamic from "next/dynamic";
const AnimationLottie = dynamic(() => import("../../helper/animation-lottie"), {
  ssr: false,
});
import experience from "../../../assets/lottie/code.json";
import load from "../../../assets/lottie/loading.json";
import book from "../../../assets/lottie/book.json";

import { PiCertificateFill } from "react-icons/pi";



const certificates = [
  {
    id: 1,
    title: "IIT-M Pravartak Certified Full Stack Development Course with AI Tools",
    issuer: "GUVI (IIT-M Pravartak)",
    date: "Sep 2024 - Dec 2024",
    url:  "/certifications/iitm.png",
    link: "https://v2.zenclass.in/certificateDownload/ls7ahsss5XywmyN3?download=true"
  },
  {
    id: 2,
    title: "HTML, CSS, Tailwind CSS",
    issuer: "GUVI (IIT-M Pravartak)",
    date: "Dec 2024",
    url: "/certifications/html-css-tailwind.png",
    link: "https://v2.zenclass.in/certificateDownload/pFBwEvnEC295f4Ny?download=true"
  },
  {
    id: 3,
    title: "JavaScript (Basics)",
    issuer: "GUVI (IIT-M Pravartak)",
    date: "Dec 2024",
    url: "/certifications/js-basics.png",
    link: "https://v2.zenclass.in/certificateDownload/co84OjwatD6b6eIQ?download=true"
  },
    {
    id: 4,
    title: "JavaScript (Advanced)",
    issuer: "GUVI (IIT-M Pravartak)",
    date: "Dec 2024",
    url: "/certifications/advanced-js.png",
    link: "https://v2.zenclass.in/certificateDownload/Y0YwgQvT3b5gBrmN?download=true"
  },
  {
    id: 5,
    title: "ReactJS",
    issuer: "GUVI (IIT-M Pravartak)",
    date: "Dec 2024",
    url: "/certifications/react.png",
    link: "https://v2.zenclass.in/certificateDownload/3gK1gkWbGJBRP9Od?download=true"
  },
  {
    id: 6,
    title: "Node.js",
    issuer: "GUVI (IIT-M Pravartak)",
    date: "Dec 2024",
    url: "/certifications/node.png",
    link: "https://v2.zenclass.in/certificateDownload/nA7lpIzEavHDmvBo?download=true"
  },
  {
    id: 7,
    title: "Database",
    issuer: "GUVI (IIT-M Pravartak)",
    date: "Dec 2024",
    url: "/certifications/database.png",
    link: "https://v2.zenclass.in/certificateDownload/zfKWJOvgjfJZ9lus?download=true"
  },
  {
    id: 8,
    title: "Unlocking The Power of JavaScript",
    issuer: "Scaler",
    date: "Feb 2025",
    url: "/certifications/scaler.png",
  },
  {
    id: 9,
    title: "Full Stack Web Development Internship Program",
    issuer: "Edureka",
    date: "Jan 2025",
    url: "/certifications/edu.jpg",
  },
];

const normalizeUrl = (u) => (Array.isArray(u) ? u[0] : encodeURI(u));

export default function Certifications() {
  const [preview, setPreview] = useState(null);

  return (
    <div
      id="certifications"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Background gradient */}
      <Image
        src="/section.svg"
        alt="section-bg"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Section content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left animation */}
              <div className="flex justify-center items-start">
        <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
       
          <AnimationLottie animationPath={experience} />
          <AnimationLottie animationPath={load} />
          <AnimationLottie animationPath={book} />
        </div>
      </div>

        

          {/* Right cards */}
          <div>
            <div className="flex flex-col gap-6">
              {certificates.map((cert) => (
                <GlowCard key={cert.id} identifier={`cert-${cert.id}`}>
                 <div className="p-3 relative cursor-default">
                  <Image
                    src="/blur-23.svg"
                    alt="blur"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80 pointer-events-none select-none"
                  />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {cert.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-x-6 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>

                      <div className="flex-1">
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {cert.title}
                        </p>
                        <p className="text-sm sm:text-base text-gray-300">
                          {cert.issuer}
                        </p>
                      </div>

                     
                    {/* Certificate button  */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreview(cert);
                      }}
                      aria-label={`Open certificate for ${cert.title}`}
                      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium
                                transition-transform transform hover:scale-105 focus:outline-none
                                ring-1 ring-indigo-500/20 hover:ring-indigo-400/30
                                backdrop-blur-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]
                                shadow-[0_6px_24px_rgba(19,18,38,0.6)]"
                    >
                      {/* soft neon glow layer */}
                      <span className="absolute -inset-0.5 rounded-xl opacity-0 hover:opacity-100 transition-opacity
                                      bg-gradient-to-r from-indigo-500/20 via-violet-400/10 to-teal-300/10 blur-sm pointer-events-none" />

                      {/* content */}
                      <span className="relative z-10 flex items-center gap-2">
                       <PiCertificateFill  className="w-4 h-4 text-violet-300" />
                        Certificate
                      </span>
                    </button>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Preview */}
     {/* Modal Preview */}
{preview && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
    <div className="bg-[#071026] max-w-[1100px] w-full rounded-2xl p-6 relative">
      {/* Close Button */}
      <button
        onClick={() => setPreview(null)}
        className="absolute right-4 top-4 bg-indigo-500/20 hover:bg-indigo-500/40 text-white font-medium px-4 py-2 rounded-lg transition-all"
      >
        ✕ Close
      </button>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          {(() => {
            const u = normalizeUrl(preview.url);
            if (!u) return <div className="text-white">No preview available</div>;
            const lower = u.toLowerCase();

            if (lower.endsWith(".pdf")) {
              return (
                <iframe
                  src={u}
                  className="w-full h-[600px] rounded-xl border border-indigo-500/30"
                  title="Certificate Preview"
                />
              );
            }

            return (
              <Image
                src={u}
                alt={preview.title}
                width={1000}
                height={600}
                className="w-full rounded-xl border border-indigo-500/30"
              />
            );
          })()}
        </div>

        <div className="flex flex-col justify-center space-y-2">
          <h3 className="text-xl font-semibold text-white">{preview.title}</h3>
          <p className="text-gray-400">{preview.issuer}</p>
          <p className="text-gray-400">{preview.date}</p>

          {preview.link && (
            <a
              href={preview.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium mt-3 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5H19.5V10.5M19.5 4.5L9 15M9 9H4.5V19.5H15V15"
                />
              </svg>
              View Certificate Online
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
}
