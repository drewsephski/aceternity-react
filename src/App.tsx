import React from 'react'
import { PinContainer } from './components/ui/3d-pin'
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision';
import { Explosion } from './components/ui/explosion';
import { motion } from "framer-motion";
import { BackgroundBeams } from './components/ui/background-beams';
import { SparklesCore } from "./components/ui/SparticleCore";
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header Section */}
      <header className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              TechVision
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden"
            >
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </motion.div>
          </div>
        </nav>
      </header>
</div>
  )
}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="sparkles-background"
            background="transparent"
            minSize={0.5}
            maxSize={2}
            particleDensity={70}
            particleColor="#4FACF7"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        </div>

        <div className="relative z-10">
          <BackgroundBeamsWithCollision />
          <BackgroundBeams />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Explosion />
          </div>
        </div>
        </section>

      {/* Hero Section */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
          >
            Future of Technology
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 mb-12"
          >
            Innovating tomorrow's solutions today
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-32 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Solutions',
                description: 'Advanced artificial intelligence solutions for complex business challenges',
                icon: '🤖',
                gradient: 'from-blue-500 via-cyan-400 to-teal-500'
              },
              {
                title: 'Quantum Computing',
                description: 'Next-generation computing solutions for unprecedented processing power',
                icon: '⚛️',
                gradient: 'from-purple-500 via-fuchsia-400 to-pink-500'
              },
              {
                title: 'Cyber Security',
                description: 'Robust security solutions to protect your digital assets',
                icon: '🛡️',
                gradient: 'from-emerald-500 via-teal-400 to-cyan-500'
              }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <span className="text-4xl mb-6 block">{service.icon}</span>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative z-10 py-32 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 group-hover:opacity-75 transition-opacity duration-300" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/60 backdrop-blur-sm">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Project {item}</h3>
                    <p className="text-gray-300">Innovative solutions for modern challenges</p>
                    <button className="mt-4 px-6 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">Let's create something amazing together</p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-opacity duration-300">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
      
export default App  // Add this line to fix the default export error
