import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Globe, 
  Palette, 
  Users, 
  Cloud, 
  Shield,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Heart,
  Award
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Android App Development',
      description: 'Custom Android applications built with the latest technologies to bring your ideas to life.',
      features: ['Native & Hybrid Apps', 'Play Store Deployment', 'Maintenance & Support'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive and scalable web applications tailored to your business needs.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Development',
      description: 'Beautiful, intuitive user interfaces that enhance user experience and engagement.',
      features: ['User Research', 'Wireframing', 'Brand Identity'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'CRM Software',
      description: 'Comprehensive CRM solutions to manage customer relationships and boost productivity.',
      features: ['Custom Development', 'Integration Services', 'Training & Support'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS, Azure, GCP', 'Migration Services', 'Performance Tuning'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with robust security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      color: 'from-gray-500 to-slate-600'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.',
      icon: Target
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description: 'Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.',
      icon: Palette
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.',
      icon: Zap
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description: 'We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly.',
      icon: Award
    }
  ];

  const whyChooseUs = [
    { icon: CheckCircle, text: 'Complete Lifecycle Expertise' },
    { icon: CheckCircle, text: 'Cutting-Edge Technology Stack' },
    { icon: CheckCircle, text: 'Agile Development Process' },
    { icon: CheckCircle, text: 'Quality-First Approach' },
    { icon: CheckCircle, text: 'Scalable Solutions' },
    { icon: CheckCircle, text: 'Client-Centric Focus' }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver end-to-end IT solutions that drive business growth and digital transformation
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 group hover:shadow-2xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Development <span className="gradient-text">Process</span>
            </h3>
            <p className="text-lg text-gray-600">
              A proven methodology that ensures quality, efficiency, and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="gradient-text">AppDost?</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with business acumen to deliver solutions that not only meet your requirements but exceed your expectations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <item.icon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <button className="btn-primary mt-8 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Client Satisfaction</div>
                    <div className="text-2xl font-bold text-green-500">100%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full w-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Project Delivery</div>
                    <div className="text-2xl font-bold text-blue-500">On Time</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-3 rounded-full w-5/6"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Support Quality</div>
                    <div className="text-2xl font-bold text-purple-500">24/7</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-3 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
