import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Network } from 'lucide-react';

const CertificationCard = ({ title, platform, year, category, icon: Icon, file }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-80 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.7s' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 border border-white/10 group"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
            <Icon size={40} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-heading line-clamp-2">{title}</h3>
            <p className="text-primary font-semibold">{platform}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-6 border border-primary/30"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="space-y-2">
            <span className="px-3 py-1 bg-primary text-background text-xs font-bold rounded-full uppercase tracking-widest">
              {category}
            </span>
            <p className="text-2xl font-bold font-heading text-white">{year}</p>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Successfully completed this certification from {platform}, demonstrating expertise in {category}.
          </p>
          <a
            href={file}
            download
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold rounded-full text-sm hover:opacity-80 transition-all duration-300"
          >
            Download Certificate
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const Certifications = () => {
  const [filter, setFilter] = useState('All');

  const certs = [
    {
      title: 'Privacy and Security in Online Social Media',
      platform: 'NPTEL',
      year: '2025',
      category: 'Cybersecurity',
      icon: Shield,
      file: '/certificates/nptel-privacy-security.pdf',
    },
    {
      title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
      platform: 'Infosys',
      year: '2025',
      category: 'AI / ML',
      icon: Cpu,
      file: '/certificates/infosys-chatgpt.pdf',
    },
    {
      title: 'Peer-to-Peer Protocols and Local Area Networks',
      platform: 'Coursera',
      year: '2025',
      category: 'Networking',
      icon: Network,
      file: '/certificates/coursera-networking.pdf',
    },
  ];

  const categories = ['All', ...new Set(certs.map(c => c.category))];
  const filteredCerts = filter === 'All' ? certs : certs.filter(c => c.category === filter);

  return (
    <section id="certifications" className="py-20">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading"
          >
            Certifications & <span className="text-gradient">Learning</span>
          </motion.h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border ${
                filter === cat
                  ? 'bg-primary text-background border-primary'
                  : 'bg-white/5 text-white/60 border-white/10 hover:border-primary/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <CertificationCard {...cert} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
