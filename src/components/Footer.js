import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Heart,
  ArrowUp,
  ExternalLink,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Android App Development', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'CRM Software', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
    { name: 'Cybersecurity', href: '#services' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/appdost', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/appdost', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/appdost', label: 'Twitter' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">AppDost</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Delivering innovative IT solutions since 2025. We transform ideas into powerful 
                digital experiences with cutting-edge technology and expert craftsmanship.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  10+ Web Projects
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  4+ Android Apps
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  1 CRM System
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 mt-0.5" />
                  <div>
                    <div className="text-gray-400 text-sm">contact@appdost.in</div>
                    <div className="text-gray-400 text-sm">hr@appdost.in</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 mt-0.5" />
                  <div>
                    <div className="text-gray-400 text-sm">+91 76350 75422</div>
                    <div className="text-gray-400 text-sm">+91 11 6929 0750</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                  <div>
                    <div className="text-gray-400 text-sm">3 Offices:</div>
                    <div className="text-gray-400 text-sm">Banka (HQ), Motihari, Patna</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-400 mt-0.5" />
                  <div>
                    <div className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 6:00 PM IST</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mb-4 md:mb-0"
            >
              <p className="text-gray-400 text-sm">
                © 2025 AppDost - Complete IT Solution. All rights reserved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 pt-6 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
              <div className="flex items-center">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 mx-1" />
                <span>in India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
