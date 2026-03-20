import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold font-heading">Get in Touch</h3>
              <p className="text-white/60 max-w-md">
                Have a project in mind or just want to say hi? My inbox is always open. Whether you have a question or just want to connect, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-4 glass-card rounded-2xl border border-white/10 group transition-all"
                >
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{info.label}</p>
                    <p className="text-lg font-medium text-white/80 group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl border border-white/10 relative"
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-10 bg-background/80 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center text-center p-8 space-y-4"
              >
                <div className="p-4 bg-primary/20 rounded-full text-primary">
                  <CheckCircle size={48} />
                </div>
                <h4 className="text-2xl font-bold font-heading text-primary">Message Sent!</h4>
                <p className="text-white/60 italic">"I'll get back to you soon 🚀"</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm font-bold text-primary hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-1">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 text-white placeholder:text-white/20 transition-all"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 text-white placeholder:text-white/20 transition-all"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-1">Message</label>
                <textarea
                  required
                  rows="5"
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 text-white placeholder:text-white/20 transition-all resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
