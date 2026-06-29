"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, FormEvent } from "react";

export default function Home() {
  const fullText = `As a passionate Software Engineering undergraduate, I’m constantly exploring new technologies and building projects that solve real-world problems. From web platforms to mobile apps and AI integration, I enjoy turning ideas into impactful solutions.`;
  const [displayedText, setDisplayedText] = useState("");
  const [status, setStatus] = useState<"success" | "error" | "">("");

  // Typewriter effect
  useEffect(() => {
    let index = 0;
  
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
  
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 15);
  
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const action = "https://docs.google.com/forms/d/e/1FAIpQLSfIaDreuILlvUQdVWKooEdp8iEfEWAfD8v7W5k_VpUJ6IP1kA/formResponse";

    try {
      await fetch(action, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Error submitting form", err);
      setStatus("error");
    }
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Working Experience Data (Only Professional Roles)
  const experiences = [
    {
      role: "AI Full-Stack Engineer (Part-Time)",
      company: "ASTAKON LABS (Subsidiary of Pahanmi Group)",
      period: "2026 - Present",
      description: "Designed and deployed low-latency FastAPI inference pipelines. Integrated ML models into containerized CI/CD workflows using Docker, optimizing deployment speeds while collaborating across cross-functional Agile sprints.",
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-neutral-950 text-neutral-100 selection:bg-amber-400 selection:text-neutral-900">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
        <div className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto">
          <Link href="#" className="text-xl font-bold tracking-tighter text-amber-400">Sahan Hansaja.</Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-neutral-400">
            <a href="#about" className="transition-colors hover:text-amber-400">About</a>
            <a href="#experience" className="transition-colors hover:text-amber-400">Experience</a>
            <a href="#work" className="transition-colors hover:text-amber-400">Work</a>
            <a href="#blog" className="transition-colors hover:text-amber-400">Content</a>
            <a href="#contact" className="px-3 py-1.5 rounded-md bg-neutral-900 text-neutral-200 border border-neutral-800 hover:border-amber-400 hover:text-amber-400 transition-all">Let&apos;s Talk</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="grid items-center max-w-6xl grid-cols-1 gap-12 px-4 py-20 mx-auto lg:py-32 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-2">
            <h1 className="text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl text-neutral-100">
              Sahan <span className="text-amber-400">Hansaja.</span>
            </h1>
            <div className="w-32 h-2 rounded-full bg-amber-400"></div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-500">— Introduction</h3>
            <h2 className="text-2xl font-semibold leading-snug sm:text-3xl text-neutral-300">
              Full Stack Developer and UX/UI Designer, based in Sri Lanka
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed min-h-[100px] sm:min-h-[80px]">
              {displayedText}
              <span className="animate-pulse text-amber-400">|</span>
            </p>
          </div>
          
          <div className="pt-2">
            <a href="#experience" className="inline-flex items-center gap-2 font-semibold tracking-wide group text-amber-400 hover:underline">
              My Journey <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Dynamic Skill Cards on Hero Side */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-5 sm:grid-cols-3 lg:grid-cols-1">
          {[
            { img: "box.png", title: "AI/ML Engineer", desc: "Enthusiast & Python Specialist" },
            { img: "pen.png", title: "UI/UX Designer", desc: "Figma & Modern Interfaces" },
            { img: "mobile.png", title: "Mobile App Developer", desc: "React Native & Flutter" },
            { img: "youtube.png", title: "Content Creator", desc: "Tech Vlogs & Tutorials", link: "https://youtube.com/@baniya-mark?si=t2mlz73lO-WjfYKD" }
          ].map((box, i) => {
            const CardWrap = box.link ? 'a' : 'div';
            return (
              <CardWrap key={i} href={box.link} {...(box.link && { target: "_blank", rel: "noopener noreferrer" })} className="flex items-center gap-4 p-5 transition-all border cursor-pointer rounded-xl bg-neutral-900 border-neutral-800 hover:border-amber-400/50 group">
                <div className="relative flex-shrink-0 w-12 h-12 p-2 transition-transform border rounded-lg bg-neutral-950 border-neutral-800 group-hover:scale-105">
                  <Image src={`${basePath}/images/${box.img}`} alt={box.title} fill className="object-contain p-2" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-200">{box.title}</h4>
                  <p className="text-xs text-neutral-500">{box.desc}</p>
                </div>
              </CardWrap>
            );
          })}
        </div>
      </section>

      {/* Legacy About Me Quick Statements */}
      <section className="py-16 bg-neutral-900/40 border-y border-neutral-900">
        <div className="grid items-center max-w-6xl grid-cols-1 gap-8 px-4 mx-auto lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-500">— About Me</h3>
            <p className="pl-4 text-base italic leading-relaxed border-l-2 text-neutral-400 border-amber-400">
              “Hi, I&apos;m Sahan Hansaja, a Software Engineering undergraduate at SLTC Research University. I love building modern web and mobile applications, exploring AI integration, and solving real-world problems through technology”
            </p>
            <div className="flex justify-center pt-4 lg:justify-start">
              <Image src={`${basePath}/images/profile.png`} alt="My Profile" width={200} height={200} className="transition-all duration-500 border rounded-2xl border-neutral-800 grayscale hover:grayscale-0" />
            </div>
          </div>
          
          <div className="space-y-4 lg:col-span-7">
            {[
              "Passionate about building smart, real-world solutions",
              "Skilled in Python, MERN, and Flutter",
              "AI & Machine Learning Enthusiast",
              "Cloud & DevOps (AWS, Docker, CI/CD with GitHub Actions)"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 transition-all duration-700 ease-out translate-y-8 border opacity-0 reveal-on-scroll rounded-xl bg-neutral-900/60 border-neutral-850">
                <Image src={`${basePath}/images/pluse.png`} alt="plus" width={24} height={24} className="mt-1 opacity-60" />
                <h3 className="text-xl font-medium text-neutral-200">{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl px-4 py-24 mx-auto space-y-12">
        <div className="space-y-2">
          <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-500">— History</h3>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">My Experience</h2>
        </div>

        <div className="relative ml-4 space-y-12 border-l border-neutral-800 md:ml-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative ml-6 transition-all duration-700 translate-y-8 opacity-0 reveal-on-scroll group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-neutral-700 group-hover:border-amber-400 transition-colors" />
              
              <div className="p-6 space-y-2 transition-colors border bg-neutral-900/40 border-neutral-900 rounded-xl hover:border-neutral-800">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h4 className="text-xl font-bold transition-colors text-neutral-100 group-hover:text-amber-400">{exp.role}</h4>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">{exp.period}</span>
                </div>
                <h5 className="text-sm font-medium text-amber-400/80">{exp.company}</h5>
                <p className="pt-2 text-sm leading-relaxed text-neutral-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="grid items-start max-w-6xl grid-cols-1 gap-12 px-4 py-12 mx-auto lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-4 lg:sticky lg:top-28">
          <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-500">— My Work</h3>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-neutral-100">
            All Creative Works, Selected Projects.
          </h2>
          <div className="pt-2">
            <a href="https://github.com/sahanHansaja026?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all border rounded-lg bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-amber-400 hover:border-amber-400">
              Explore Repositories →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:col-span-8 sm:grid-cols-2">
          {["image1.png", "image2.png", "image3.png"].map((img, i) => (
            <div key={i} className="relative overflow-hidden transition-all duration-700 translate-y-8 border opacity-0 reveal-on-scroll aspect-video rounded-xl bg-neutral-900 border-neutral-800 group hover:border-amber-400/30">
              <Image src={`${basePath}/images/${img}`} alt={`Project showcase ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end p-4 transition-opacity opacity-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent group-hover:opacity-100">
                <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">View Project Architecture</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content / Blog Section */}
      <section id="blog" className="max-w-6xl px-4 py-24 mx-auto space-y-12">
        <div className="space-y-2">
          <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-500">— Blog & Media</h3>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">What&apos;s New? My Blog and News.</h2>
            <Link href="/article" className="text-sm font-semibold underline text-neutral-400 hover:text-amber-400 decoration-2 underline-offset-4">Read All Articles</Link>
          </div>
        </div>

        <div className="divide-y divide-neutral-900 border-y border-neutral-900">
          {[
            { date: "Sep 08 . Blog", title: "Smart Parking Detection using ESP32, FastAPI & PostgreSQL", url: "https://medium.com/@sahanhansaja026/️-smart-parking-detection-using-esp32-fastapi-postgresql-0cf20c1e64fe" },
            { date: "May 06 . Blog", title: "Creating a Backend with MongoDB and Firebase: File Storage Meets Data Management", url: "https://medium.com/@sahanhansaja026/creating-a-backend-with-mongodb-and-firebase-6f192a1abfc9" },
            { date: "Apr 26 . Vlog", title: "Deploying My React App with GitHub Actions & AWS S3: What I Learned", url: "https://youtu.be/F4Yb2p6bK7k" },
            { date: "Sep 09 . Blog", title: "Dynamic Search Bar for a MERN Stack Website", url: "https://medium.com/@sahanhansaja026/building-a-dynamic-search-bar-for-a-mern-stack-website-cefd966da536" }
          ].map((post, idx) => (
            <a key={idx} href={post.url} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between gap-4 px-2 py-6 transition-all transition-colors duration-700 translate-y-8 rounded-lg opacity-0 reveal-on-scroll sm:flex-row sm:items-center group hover:bg-neutral-900/20">
              <div className="space-y-1">
                <span className="text-xs font-semibold tracking-wider uppercase text-amber-400/80">{post.date}</span>
                <h4 className="text-lg font-bold transition-colors text-neutral-200 group-hover:text-neutral-100">{post.title}</h4>
              </div>
              <span className="self-end text-xl transition-all text-neutral-600 group-hover:text-amber-400 group-hover:translate-x-1 sm:self-center">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-6xl px-4 py-12 mx-auto border-t border-neutral-900">
        <div className="grid grid-cols-1 gap-12 p-8 border lg:grid-cols-12 bg-neutral-900/20 border-neutral-900 sm:p-12 rounded-2xl">
          
          <div className="space-y-6 lg:col-span-5">
            <div className="space-y-2">
              <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-500">— Contact Me</h3>
              <h2 className="text-4xl font-extrabold tracking-tight text-neutral-100">Got a project? <br />Let&apos;s Talk</h2>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Have an idea for an AI classification platform, microservice integration, or full-stack application? Feel free to reach out directly.
            </p>
            <div>
              <a href="mailto:sahanhansaja026@gmail.com?subject=Hello&body=Hi Sahan," className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold transition-colors shadow-lg rounded-xl bg-amber-400 text-neutral-950 hover:bg-amber-300 shadow-amber-400/10">
                Email Me Directly →
              </a>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7">
            <h3 className="text-lg font-bold text-neutral-300">Estimate your project? Let me know here.</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider uppercase text-neutral-400">What&apos;s your Email?</label>
                <input type="email" name="entry.1389639083" required className="w-full px-4 py-3 text-sm transition-colors border bg-neutral-950 border-neutral-800 rounded-xl text-neutral-200 focus:outline-none focus:border-amber-400" placeholder="name@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider uppercase text-neutral-400">Tell me about your project?</label>
                <textarea name="message" rows={4} required className="w-full px-4 py-3 text-sm transition-colors border resize-none bg-neutral-950 border-neutral-800 rounded-xl text-neutral-200 focus:outline-none focus:border-amber-400" placeholder="Describe scope, timeline, goals..."></textarea>
              </div>

              <button type="submit" className="w-full py-3 text-sm font-semibold transition-all border shadow-sm bg-neutral-900 border-neutral-800 text-neutral-200 hover:border-amber-400 hover:text-amber-400 rounded-xl">
                Submit Specification →
              </button>

              {status === "success" && <p className="text-sm font-semibold text-green-400 animate-fade-in">😊 Form successfully submitted! Thank you.</p>}
              {status === "error" && <p className="text-sm font-semibold text-red-400 animate-fade-in">😢 Error sending submission. Please try again.</p>}
            </form>
          </div>

        </div>
      </section>

      {/* Footer Grid */}
      <footer className="mt-20 border-t border-neutral-900 bg-neutral-950">
        <div className="flex flex-col items-center justify-between max-w-6xl gap-6 px-4 py-10 mx-auto text-sm sm:flex-row text-neutral-500">
          <p>© {new Date().getFullYear()} Sahan Hansaja. Thanks for scrolling.</p>
          
          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/sahanHansaja026", img: "github.png", alt: "GitHub" },
              { href: "https://www.linkedin.com/in/sahan-hansaja-35502b256", img: "linkdin.png", alt: "LinkedIn" },
              { href: "https://youtube.com/@baniya-mark?si=t2mlz73lO-WjfYKD", img: "youtube.png", alt: "YouTube" }
            ].map((soc, i) => (
              <a key={i} href={soc.href} target="_blank" rel="noopener noreferrer" className="relative p-2 transition-all border rounded-lg bg-neutral-900 border-neutral-850 hover:border-neutral-700 opacity-70 hover:opacity-100 w-9 h-9">
                <Image src={`${basePath}/images/${soc.img}`} alt={soc.alt} fill className="object-contain p-1.5" />
              </a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}