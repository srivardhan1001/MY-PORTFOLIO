import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/srivardhan1001', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sri-vardhan-sri', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:srivardhan643@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 glass border-t border-white/10 relative overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-gradient"
        >
          SV.
        </motion.div>

        <div className="flex gap-8">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/40 hover:text-primary hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -5, rotate: 5 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-white/40 text-sm font-medium">
            T. Sri Vardhan © {currentYear} | Built with <span className="text-primary mx-1">React</span> & <span className="text-secondary mx-1">Tailwind CSS</span>
          </p>
          <div className="flex items-center justify-center gap-1 text-white/20 text-xs uppercase tracking-widest">
            Made with <Heart size={12} className="text-red-500/50" /> in Punjab, India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
