import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'srivardhan643@gmail.com', href: 'mailto:srivardhan643@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9492298509', href: 'tel:+919492298509' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/sri-vardhan-sri', href: 'https://linkedin.com/in/sri-vardhan-sri' },
    { icon: Github, label: 'GitHub', value: 'github.com/srivardhan1001', href: 'https://github.com/srivardhan1001' },
    { icon: MapPin, label: 'Location', value: 'Punjab, India', href: '#' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out through any of the channels below — I'll get back to you as soon as possible!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex flex-col items-center text-center gap-4 p-8 glass-card rounded-2xl border border-white/10 group transition-all hover:border-primary/40"
            >
              <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                <info.icon size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">{info.label}</p>
                <p className="text-sm font-medium text-white/80 group-hover:text-primary transition-colors break-all">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-white/40 text-sm">Preferred contact method</p>
          <motion.a
            href="mailto:srivardhan643@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
          >
            <Mail size={20} /> Send me an Email
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
