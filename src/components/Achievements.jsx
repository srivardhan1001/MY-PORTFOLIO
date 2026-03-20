import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ShieldCheck, GraduationCap, Star } from 'lucide-react';

const AchievementCard = ({ title, date, description, icon: Icon }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card p-8 rounded-3xl border border-white/10 group hover:shadow-[0_0_30px_rgba(0,245,212,0.2)] transition-all"
  >
    <div className="flex items-start justify-between mb-6">
      <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
        <Icon size={32} />
      </div>
      <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/60">
        {date}
      </span>
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-white/60 leading-relaxed italic">
        {description}
      </p>
    </div>
  </motion.div>
);

const Achievements = () => {
  const achievements = [
    {
      title: 'Hackverse Hackathon',
      date: '2024',
      description: 'Qualified for Round 2, competing among hundreds of teams, reaching Round 2 of a competitive hackathon.',
      icon: Trophy,
    },
    {
      title: 'Cybersecurity Tools Proficiency',
      date: 'Ongoing',
      description: 'Hands-on experience with Kali Linux, Wireshark, and Nmap for network analysis and security testing.',
      icon: ShieldCheck,
    },
    {
      title: 'Academic Excellence',
      date: '2020',
      description: 'Scored 100% in Matriculation (10th grade), demonstrating strong foundation and dedication.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading"
          >
            Wins & <span className="text-gradient">Milestones</span>
          </motion.h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, i) => (
            <AchievementCard key={i} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
