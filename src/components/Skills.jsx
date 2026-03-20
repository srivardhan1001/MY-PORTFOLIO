import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Wrench, Database, Layout, Users } from 'lucide-react';

const SkillProgress = ({ name, progress }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="space-y-2" ref={ref}>
      <div className="flex justify-between text-sm font-medium">
        <span>{name}</span>
        <span className="text-primary">{progress}%</span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${progress}%` } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </div>
  );
};

const SkillCard = ({ title, icon: Icon, skills }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass-card p-6 rounded-2xl border border-white/10 space-y-4"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 bg-primary/10 rounded-lg text-primary">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold font-heading">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-white/5 rounded-full text-sm font-medium text-white/80 border border-white/10"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillGroups = [
    {
      title: 'Programming',
      icon: Code2,
      skills: ['Python 🐍', 'Java ☕', 'C++ 💻', 'HTML 🌐', 'CSS 🎨', 'JavaScript ✨'],
    },
    {
      title: 'Tools & Tech',
      icon: Wrench,
      skills: ['Git 🔧', 'Kali Linux 💀', 'Wireshark 🦈', 'Nmap 🔍'],
    },
    {
      title: 'Databases & OS',
      icon: Database,
      skills: ['MySQL 🗄️', 'Linux 🐧', 'Windows 🪟'],
    },
    {
      title: 'Frameworks',
      icon: Layout,
      skills: ['React.js ⚛️', 'Django 🎸'],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Problem Solving 🧠', 'Teamwork 🤝', 'Communication 📢', 'Continuous Learning 📚'],
    },
  ];

  const progressSkills = [
    { name: 'Python', progress: 85 },
    { name: 'Django', progress: 80 },
    { name: 'React', progress: 70 },
    { name: 'C++', progress: 65 },
    { name: 'Cybersecurity Tools', progress: 75 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading"
          >
            My <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl space-y-8"
          >
            <h3 className="text-2xl font-bold font-heading mb-6">Expertise Level</h3>
            <div className="space-y-6">
              {progressSkills.map((skill, i) => (
                <SkillProgress key={i} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map((group, i) => (
              <SkillCard key={i} {...group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
