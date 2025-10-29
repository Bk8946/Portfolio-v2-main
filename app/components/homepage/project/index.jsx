"use client";

import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image"; 

const projects = [
   {
    title: "Fitness Class Booking System",
    description:
      " A full-stack web application built with React (frontend) and Node.js, Express, and MongoDB (backend). It allows fitness centers to manage class schedules, user registrations, and bookings with real-time updates and secure authentication. (Note: Backend temporarily down due to a MongoDB issue.)",
    url: "/projects/bk.jpg",
    color: "#5196fd",
    githubFrontend: "https://github.com/Bk8946/Fitness-Class-Booking-System-frontend.git",
     githubBackend: "https://github.com/Bk8946/Fitness-Class-Booking-System-backend.git",
    liveLink: "https://bkfitnesscenter01.netlify.app/",
  },
  {
    title: "Rapid Rentels ",
    description:
      "A full-stack web application built with React (frontend) and Node.js/Express (backend). It allows users to browse, list, book, and manage rental properties seamlessly with secure authentication, rich dashboard controls, integrated Stripe payment processing, and RESTful API interaction.",
    url: "/projects/rapidrentel.jpg",
    color: "#8f89ff",
    githubFrontend: "https://github.com/Bk8946/rapid-rentals-client-main.git",
    githubBackend: "https://github.com/Bk8946/rapid-rentals-server-main.git",
    liveLink: "https://rapidrentels.netlify.app/",
  },
  {
    title: "Hostel Management System",
    description:
      "A full-stack web application built with React (frontend) and Node.js/Express/MongoDB (backend) that streamlines hostel operations, including room allocation, Staff management, and payment tracking. (Note: Backend temporarily down due to a MongoDB issue.)",
    url: "/projects/hostel.JPG",
    color: "#ffffff",
    githubFrontend: "https://github.com/Bk8946/Hostel-Management-Frontend-main.git",
    githubBackend: "https://github.com/Bk8946/Hostel_Management_Backend-main.git",
    liveLink: "https://hostelmgnt.netlify.app/",
  },
  {
    title: "Job Portal",
    description:
      "A responsive web application built with React that connects job seekers and employers. It allows users to post, browse, and apply for jobs with an intuitive interface and dynamic search and filter functionality.",
    url: "/projects/job.JPG",
    color: "#ed649e",
    githubFrontend: "https://github.com/Bk8946/JobPortal-Frontend-main.git",
    liveLink: "https://j-obportal.netlify.app/",
  },
    {
    title: "Smart Task Planner",
    description:
      "A productivity web app built with Next.js featuring AI integration to help users organize, prioritize, and manage tasks intelligently with smart suggestions, deadline reminders, and progress tracking.",
    url: "/projects/task.JPG",
    color: "#ff0000a6",
    githubFrontend: "https://github.com/Bk8946/Smart-Task-Planner-main.git",
    liveLink: "https://app.netlify.com/projects/taskplanne-r/overview",
  },
    {
    title: "College Placement System",
    description:
      "A full-stack web application built with React (frontend) and Node.js/Express/MongoDB (backend) that streamlines campus recruitment by managing student profiles, job postings, company registrations, and placement tracking efficiently. (Note: Backend temporarily down due to a MongoDB issue.)",
    url: "/projects/clg.JPG",
    color: "#df7818ff",
    githubFrontend: "https://github.com/Bk8946/College-Placement-Management-FrontEnd-main.git",
    githubBackend: "https://github.com/Bk8946/College-Placement-Management-Backend-main.git",
    liveLink: "https://clgplcmgnt.netlify.app/home",
  },
    {
    title: "AskMeIdentity Landing Page",
    description:
      "A modern, responsive landing page built with HTML and Tailwind CSS that showcases brand identity and services through a sleek UI, smooth animations, and optimized performance for an engaging user experience.",
    url: "/projects/askme.JPG",
    color: "#e7c60bff",
    githubFrontend: "https://github.com/Bk8946/Askmeidentity-LandingPage.git",
    liveLink: "https://askmeidentity-landingpage.netlify.app/",
  },
    {
    title: "Travelling Landing Page",
    description:
      "A responsive travel-themed landing page built with HTML and CSS, featuring a modern design, smooth animations, and optimized performance to deliver an engaging user experience.",
    url: "/projects/travel.JPG",
    color: "#50e40cff",
    githubFrontend: "https://github.com/Bk8946/Trabook-landingPage.git",
    liveLink: "https://tvlnglandingpage.netlify.app/",
  },
    {
    title: "Budget Manager",
    description:
      "A responsive web app that helps users manage income, expenses, and savings efficiently. Built with modern frontend technologies for a clean and intuitive user experience.",
    url: "/projects/budget.JPG",
    color: "#01ee7fff",
    githubFrontend: "https://github.com/Bk8946/Budget-Tracker.git",
    liveLink: "https://budgettrackertask4.netlify.app/",
  },
    {
    title: "Password Reset Flow",
    description:
      "Full-stack implementation of a secure password reset process. The front-end is built with React and Vite, delivering a smooth user experience, while the back-end handles token generation, validation, and email delivery via a robust Node.js API. Together they demonstrate end-to-end security and user-authentication best practices.(Note: Backend temporarily down due to a MongoDB issue.)",
    url: "/projects/pswrd.JPG",
    color: "#005547ff",
   githubFrontend: "https://github.com/Bk8946/PasswordResetFlow-frontend.git",
    githubBackend: "https://github.com/Bk8946/PasswordResetFlow-backend.git",
    liveLink: "https://passwordresetflow1.netlify.app/",
  },
    {
    title: "E-Commerce Website",
    description:
      "A fully responsive React-based online store built with React Router for smooth navigation. Features dynamic product listings, cart management, and a clean, user-friendly interface.",
    url: "/projects/ecom.JPG",
    color: "#0559b9ff",
    githubFrontend: "https://github.com/Bk8946/React-Router.git",
    liveLink: "https://reactroutermodel123.netlify.app/",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      document.documentElement.style.setProperty(
        "--project-scale",
        isTargetResolution ? "0.85" : "1"
      );
      document.documentElement.style.setProperty(
        "--project-margin",
        isTargetResolution ? "-5vh" : "0"
      );
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main ref={container} className="relative">
        {/*  Background  */}
        <Image
          src="/section.svg"
          alt="section background"
          width={1572}
          height={795}
          className="absolute top-0 -z-10"
        />

        {/*  Title styled  */}
        <div className="flex justify-center -translate-y-[1px] mt-20">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
          </div>
        </div>

        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Projects
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <section>
          {projects.map((project, i) => {
            const targetScale = 1;
            return (
              <Card
                key={`project_${i}`}
                i={i}
                url={project.url}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubFrontend={project.githubFrontend}
                githubBackend={project.githubBackend}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubFrontend,
  githubBackend,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[20%] h-auto w-[98%] md:w-[95%] lg:w-[90%] xl:w-[88%] origin-top project-card"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        {/*  Blur overlay  */}
        <Image
          src="/blur-23.svg"
          alt="blur overlay"
          width={1080}
          height={200}
           className="absolute bottom-0 opacity-80 pointer-events-none"
        />

        {/* Split Card Layout */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image Section */}
          <div className="w-full md:w-[60%] h-[300px] md:h-[450px] lg:h-[500px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[40%] p-8 md:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {githubFrontend && (
                  <LinkButton
                    href={githubFrontend}
                    color={color}
                    label="Frontend"
                    icon="github"
                  />
                )}
                {githubBackend && (
                  <LinkButton
                    href={githubBackend}
                    color={color}
                    label="Backend"
                    icon="github"
                  />
                )}
                <LinkButton
                  href={liveLink}
                  color={color}
                  label="Live"
                  icon="globe"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function LinkButton({ href, color, label, icon }) {
  const icons = {
    github: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </>
    ),
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[icon]}
      </svg>
      <span
        className="text-xs md:text-sm font-medium transition-colors duration-200"
        style={{ color }}
      >
        {label}
      </span>
    </motion.a>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(["github", "globe"]).isRequired,
};
