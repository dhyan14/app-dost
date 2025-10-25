import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Code, 
  Smartphone, 
  Globe,
  Brain,
  Bot,
  BookOpen,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const Portfolio = () => {
  const featuredProjects = [
    {
      title: 'BEU Mate - Bihar Engineering',
      description: 'An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'AI/ML'],
      category: 'Educational Platform',
      links: {
        playstore: 'https://play.google.com/store',
        website: 'https://beumate.com'
      },
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Devskillquest',
      description: 'An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects and coding challenges.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      category: 'Educational Platform',
      links: {
        website: 'https://devskillquest.com'
      },
      gradient: 'from-green-500 to-blue-600'
    },
    {
      title: 'The Weddings Chapter',
      description: 'A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor portfolios and booking system.',
      image: '/api/placeholder/600/400',
      technologies: ['PHP', 'Laravel', 'MySQL'],
      category: 'Wedding Planning Portal',
      links: {
        website: 'https://theweddingschapter.com'
      },
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const openSourceProjects = [
    {
      title: 'DeepFake Detection',
      description: 'Advanced deep learning model for detecting manipulated media using computer vision and neural networks.',
      technologies: ['AI/ML', 'Jupyter'],
      category: 'AI/ML Summer Internship Project',
      icon: Brain,
      gradient: 'from-purple-500 to-indigo-600',
      github: 'https://github.com/appdost/deepfake-detection'
    },
    {
      title: 'NooBot',
      description: 'Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation.',
      technologies: ['Python', 'Automation'],
      category: 'Intelligent Python Automation Bot',
      icon: Bot,
      gradient: 'from-green-500 to-emerald-600',
      github: 'https://github.com/appdost/noobot'
    },
    {
      title: 'EduTools',
      description: 'Collection of educational tools and utilities for students and teachers. Interactive learning resources and study aids.',
      technologies: ['HTML/CSS', 'Education'],
      category: 'Educational Web Platform',
      icon: BookOpen,
      gradient: 'from-blue-500 to-cyan-600',
      github: 'https://github.com/appdost/edutools'
    },
    {
      title: 'DialogFlow Chatbot',
      description: 'Intelligent chatbot using Google\'s DialogFlow ES for natural language processing and automated customer support.',
      technologies: ['DialogFlow', 'NLP'],
      category: 'Conversational AI Assistant',
      icon: MessageCircle,
      gradient: 'from-orange-500 to-red-600',
      github: 'https://github.com/appdost/dialogflow-chatbot'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
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
            Our Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real solutions for real businesses - explore our successful projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">
                      {project.category.includes('Educational') ? '🎓' : 
                       project.category.includes('Wedding') ? '💒' : '💻'}
                    </div>
                    <div className="text-sm opacity-90">{project.category}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    {project.links.playstore && (
                      <a
                        href={project.links.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Play className="w-5 h-5 text-gray-700" />
                      </a>
                    )}
                    {project.links.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary-600">{project.category}</span>
                  <div className="flex space-x-1">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Source & Innovation Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Open Source & <span className="gradient-text">Innovation</span> Projects
            </h3>
            <p className="text-lg text-gray-600">
              Explore our contributions to AI, automation, and educational technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group hover:shadow-xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs font-medium text-primary-600">{project.category}</div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-transform"
                >
                  <Github className="w-4 h-4 mr-1" />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Interested in working with us on your next project?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help transform your ideas into reality
            </p>
            <button className="btn-primary group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
