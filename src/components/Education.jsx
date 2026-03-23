import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const TimelineItem = ({ title, institution, year, result, coursework, icon: Icon, isLast }) => {
  return (
    <div className="relative pl-12 pb-12 group">
      {!isLast && (
        <div className="absolute left-6 top-10 bottom-0 w-[2px] bg-gradient-to-b from-primary to-transparent" />
      )}
      <div className="absolute left-0 top-0 p-3 bg-background border-2 border-primary rounded-full text-primary z-10 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 rounded-2xl border-l-4 border-primary hover:border-l-8 transition-all"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <h3 className="text-2xl font-bold font-heading text-white">{title}</h3>
          <span className="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold border border-primary/30">
            {year}
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary/80 font-semibold">
            <School size={18} />
            <span>{institution}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <span className="font-bold text-white">Result:</span>
            <span>{result}</span>
          </div>
          {coursework && (
            <div className="space-y-2">
              <span className="font-bold text-white">Relevant Coursework:</span>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10 text-white/70">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      title: 'B.Tech in Computer Science & Engineering',
      institution: 'Lovely Professional University, Jalandhar, Punjab',
      year: '2023 - Present',
      result: 'CGPA: 7.25',
      coursework: ['DSA', 'Operating Systems', 'DBMS', 'Artificial Intelligence', 'Computer Networks', 'Software Engineering'],
      icon: GraduationCap,
    },
    {
      title: 'Intermediate (MPC + CS)',
      institution: 'Deeksha Junior College, Vizag, Andhra Pradesh',
      year: '2023',
      result: '80.1%',
      coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
      icon: BookOpen,
    },
    {
      title: 'Matriculation',
      institution: 'Narayana E-Techno School, Vizag, Andhra Pradesh',
      year: '2021',
      result: '100%',
      icon: School,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading"
          >
            Academic <span className="text-gradient">Journey</span>
          </motion.h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4">
          {educationData.map((item, i) => (
            <TimelineItem 
              key={i} 
              {...item} 
              isLast={i === educationData.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
