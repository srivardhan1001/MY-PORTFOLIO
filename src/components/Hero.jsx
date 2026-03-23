import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 md:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-3 glass-card px-4 py-2 w-fit rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">Open to Opportunities</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">T. Sri Vardhan</span>
          </h1>

          <div className="text-2xl md:text-3xl font-heading text-white/80 h-[40px]">
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Cybersecurity Enthusiast',
                2000,
                'Full-Stack Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            B.Tech CSE student at Lovely Professional University passionate about cybersecurity and full-stack development. I build real-world solutions — from detecting phishing attacks to automating recruitment pipelines. Always learning, always building.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#projects"
              className="btn-primary flex items-center gap-2"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects <ExternalLink size={18} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Sri_Vardhan_Resume"
              className="btn-outline flex items-center gap-2"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume <Download size={18} />
            </motion.a>
          </div>

          <div className="flex items-center gap-6 pt-6">
            {[
              { icon: Github, href: 'https://github.com/srivardhan1001' },
              { icon: Linkedin, href: 'https://linkedin.com/in/sri-vardhan-sri' },
              { icon: Mail, href: 'mailto:srivardhan643@gmail.com' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Image/Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Glowing Ring */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse-slow" />
          
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/30 p-2 group">
            <div className="w-full h-full rounded-full border-2 border-primary overflow-hidden shadow-[0_0_30px_rgba(0,245,212,0.3)]">
              <img 
                src="/profile.jpeg" 
                alt="T. Sri Vardhan"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Floating Icons */}
            <motion.div 
              className="absolute -top-4 -right-4 p-3 glass-card rounded-xl text-primary"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-2xl">🐍</span>
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -left-8 p-3 glass-card rounded-xl text-primary"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-2xl">⚛️</span>
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 right-1/4 p-3 glass-card rounded-xl text-primary"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-2xl">🐧</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
