import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Heart, 
  Award,
  Target,
  Zap,
  Globe,
  Smartphone,
  Code,
  Cloud
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Encouraging creative problem-solving and cutting-edge solutions',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Cross-functional teamwork and open communication',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Regular training, workshops, and skill development',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'Embracing diverse projects and new technologies',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible arrangements and employee well-being',
      color: 'from-red-400 to-rose-500'
    },
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description: 'Celebrating achievements and milestones',
      color: 'from-indigo-400 to-blue-500'
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'bg-blue-100 text-blue-600' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-100 text-green-600' },
    { name: 'Python', icon: '🐍', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-emerald-100 text-emerald-600' },
    { name: 'AWS', icon: '☁️', color: 'bg-orange-100 text-orange-600' },
    { name: 'Docker', icon: '🐳', color: 'bg-blue-100 text-blue-600' },
    { name: 'Kotlin', icon: '📱', color: 'bg-purple-100 text-purple-600' },
    { name: 'TypeScript', icon: '💙', color: 'bg-blue-100 text-blue-600' }
  ];

  const stats = [
    { icon: Globe, value: '10+', label: 'Web Projects', color: 'text-blue-500' },
    { icon: Smartphone, value: '4+', label: 'Android Apps', color: 'text-green-500' },
    { icon: Code, value: '1', label: 'CRM Project', color: 'text-purple-500' },
    { icon: Cloud, value: '2025', label: 'Founded Year', color: 'text-orange-500' }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            About <span className="gradient-text">AppDost</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for complete digital transformation
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Partner for Complete Digital Transformation
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              AppDost is your trusted partner for complete digital transformation. We are a dynamic, 
              innovation-driven IT solutions provider specializing in turning visionary ideas into 
              powerful, market-ready products. Our mission is to empower businesses with cutting-edge 
              technology solutions that drive growth, enhance user experiences, and create lasting digital impact.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-primary-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Mission-Driven</h4>
                  <p className="text-gray-600">Empowering businesses with innovative technology solutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="w-6 h-6 text-secondary-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Innovation-Focused</h4>
                  <p className="text-gray-600">Turning visionary ideas into market-ready products</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-6 h-6 text-accent-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Excellence-Driven</h4>
                  <p className="text-gray-600">Delivering quality solutions that exceed expectations</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-gray-900">Our Expertise</h4>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Web Development</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full w-5/6"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">95%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Mobile Apps</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full w-4/5"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">90%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">UI/UX Design</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full w-full"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">98%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Cloud Solutions</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full w-3/4"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-xs text-gray-600">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Work Culture & Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Work Culture & <span className="gradient-text">Values</span>
            </h3>
            <p className="text-lg text-gray-600">
              At AppDost, we believe in fostering an environment that promotes growth, innovation, and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group hover:shadow-xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies We Master */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technologies We <span className="gradient-text">Master</span>
            </h3>
            <p className="text-lg text-gray-600">
              We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${tech.color} rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
