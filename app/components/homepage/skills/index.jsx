"use client";

import React, { useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const SKILL_GROUPS = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML5", icon: "/skills/html.svg" },
      { name: "CSS3", icon: "/skills/css.svg" },
      { name: "JavaScript", icon: "/skills/js.svg" },
      { name: "React.js", icon: "/skills/react.svg" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
      { name: "Bootstrap", icon: "/skills/bootstrap.svg" },
      { name: "Redux Toolkit", icon: "/skills/redux.svg" },
      { name: "Vite", icon: "/skills/vitejs.svg" },
      { name: "Learning Next.js", icon: "/skills/nextJS.svg" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { name: "Node.js", icon: "/skills/node.svg" },
      { name: "Express.js", icon: "/skills/Express.svg" },
      { name: "JWT Authentication", icon: "/skills/jwt.svg" },
      { name: "Bycrypt.js", icon: "/skills/bcrypt.svg" },
      { name: "MongoDB & Mongoose", icon: "/skills/mongodb.svg" },
      { name: "MySql", icon: "/skills/mysql.svg" },
      { name: "REST APIs", icon: "/skills/restapi.svg" },
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      { name: "Figma", icon: "/skills/figma-icon.svg" },
      { name: "Responsive Design", icon: "/skills/responsive.svg" },
      { name: "Wireframing", icon: "/skills/wire.svg" },
      { name: "Prototyping", icon: "/skills/Proto.svg" },
      { name: "Canva", icon: "/skills/canva.svg" },
      { name: "Adobe Photoshop", icon: "/skills/photoshop.svg" },
      { name: "Adobe Illustrator", icon: "/skills/illustrator.svg" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "/skills/aws.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "Git", icon: "/skills/git.svg" },
      { name: "GitHub", icon: "/skills/github.svg" },
      { name: "MongoDB Atlas", icon: "/skills/atlas.svg" },
      { name: "Cloudinary", icon: "/skills/cloudinary.svg" },
      { name: "Firebase", icon: "/skills/firebase.svg" },
      { name: "Vercel", icon: "/skills/vercel1.svg" },
      { name: "Netlify", icon: "/skills/netlifyy.svg" },
      { name: "Render", icon: "/skills/render.jpg" },
      { name: "Google cloud Console", icon: "/skills/Google Cloud.svg" },
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      { name: "VS Code", icon: "/skills/vs code.svg" },
      { name: "Postman", icon: "/skills/postman.svg" },
      { name: "Thunder Client", icon: "/skills/thunder.jpeg" },
      { name: "npm | pnpm | yarn", icon: "/skills/NPM.svg" },
      { name: "Linux", icon: "/skills/Linux.svg" },
      { name: "Chrome Dev Tools", icon: "/skills/chrome.svg" },
      { name: "JSON", icon: "/skills/json.svg" },
      { name: "Dotenv", icon: "/skills/dotenv.png" },
    ],
  },
  {
    title: "AI Tools & Integrations",
    items: [
      { name: "OpenAI API ( ChatGpt )", icon: "/skills/chatgpt.svg" },
      { name: "Github Copilot", icon: "/skills/github-copilot.png" },
      { name: "Cursor", icon: "/skills/cursor.png" },
      { name: "Gemini API", icon: "/skills/gemini.png" },
      { name: "Claude API", icon: "/skills/claude.png" },
      { name: "Figma AI", icon: "/skills/figma-icon.svg" },
    ],
  },
];

// ===== Tilt effect =====
function useTilt() {
  const ref = useRef(null);

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);
    if (clientX == null || clientY == null) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const rotX = (py * 12).toFixed(2);
    const rotY = (px * -12).toFixed(2);
    const scale = 1.02;
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
  }, []);

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "";
  }, []);

  return { ref, handleMove, handleLeave };
}

// ===== Main Section =====
export default function SkillsSection() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background  */}
      <Image
        src="/section.svg"
        alt="section background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Gradient line  */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Title  */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="py-8 relative">
        <Image
          src="/blur-23.svg"
          alt="blur"
          width={1080}
          height={200}
          className="absolute bottom-0 opacity-80"
        />

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group, gi) => (
              <SkillCard key={gi} title={group.title} items={group.items} delay={gi * 80} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== Card =====
function SkillCard({ title, items, delay = 0 }) {
  const { ref, handleMove, handleLeave } = useTilt();
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.opacity = 0;
    el.style.transform = "translateY(12px)";
    const t = setTimeout(() => {
      el.style.transition = "all 450ms cubic-bezier(.2,.9,.3,1)";
      el.style.opacity = 1;
      el.style.transform = "";
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="rounded-2xl border border-[#2A2A3B] bg-[#0F1221]/90 hover:bg-[#181C2F]/90 backdrop-blur-md 
                 p-6 shadow-[0_8px_30px_rgba(88,82,204,0.15)] transition-all duration-300"
    >
      <div ref={ref} className="will-change-transform">
        <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">
          {title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {items.map((it) => (
            <div
              key={it.name}
              className="flex items-center gap-2 bg-[#181C2F]/70 hover:bg-[#222745]/80 
                         border border-[#2E3250] px-3 py-2 rounded-xl transition-all duration-200"
            >
              <Image
                src={it.icon}
                width={20}
                height={20}
                alt={it.name}
                className="opacity-90"
              />
              <span className="text-sm text-white/90">{it.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
