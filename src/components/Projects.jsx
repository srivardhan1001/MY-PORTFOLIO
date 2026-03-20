import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ShieldCheck, Target, Rocket } from 'lucide-react';

const ProjectCard = ({ title, tagline, description, tech, impact, role, github, demo, icon: Icon, accent, status }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      className={`relative group ${status === 'dimmed' ? 'opacity-60 grayscale cursor-not-allowed' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        animate={{
          rotateX: mousePos.y * 20,
          rotateY: mousePos.x * 20,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`h-full glass-card p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden`}
        style={{
          boxShadow: isHovered ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px ${accent}44` : 'none',
        }}
      >
        {/* Animated pulsing border for 'Coming Soon' */}
        {status === 'pulsing' && (
          <div className="absolute inset-0 border-2 border-primary/50 rounded-3xl animate-pulse-slow" />
        )}

        <div className="flex items-center justify-between">
          <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-[${accent}] group-hover:scale-110 transition-transform`} style={{ color: accent }}>
            <Icon size={32} />
          </div>
          <div className="flex gap-4">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold font-heading">{title}</h3>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: accent }}>{tagline}</p>
        </div>

        <p className="text-white/60 leading-relaxed min-h-[80px]">
          {description}
        </p>

        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-md border border-white/10 text-white/70">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1 text-white/60">
              <span className="text-white">Role:</span> {role}
            </div>
            {impact && (
              <div className="flex items-center gap-1 text-white/60">
                <span className="text-white">Impact:</span> {impact}
              </div>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, ${accent}, transparent 40%)`
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'PhishGuard 🛡️',
      tagline: 'Cybersecurity Web App',
      description: 'A cybersecurity web application that detects phishing websites by analyzing suspicious URLs and identifying malicious patterns — helping users verify link safety before clicking.',
      tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      impact: 'Protects users from fraudulent websites',
      role: 'Solo Developer',
      github: 'https://github.com/srivardhan1001/PhishGuard',
      demo: '#',
      icon: ShieldCheck,
      accent: '#00F5D4',
    },
    {
      title: 'Talent-Match 🎯',
      tagline: 'AI-Powered Recruitment Platform',
      description: 'A web-based recruitment platform where candidates upload resumes and recruiters post jobs. Automated resume analysis shortlists the most relevant applicants.',
      tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
      impact: 'Reduced manual hiring effort',
      role: 'Solo Developer',
      github: 'https://github.com/srivardhan1001/Talent-Match',
      demo: '#',
      icon: Target,
      accent: '#7B2FBE',
    },
    {
      title: 'Coming Soon 🚀',
      tagline: 'Next Big Project',
      description: 'Currently building something exciting involving cybersecurity automation. Stay tuned for updates!',
      tech: ['TBA', 'Coming Soon'],
      role: 'Lead Developer',
      icon: Rocket,
      accent: '#00F5D4',
      status: 'pulsing',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading"
          >
            Things I've <span className="text-gradient">Built</span>
          </motion.h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
