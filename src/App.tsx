import React from 'react'
import { PinContainer } from './components/ui/3d-pin'
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision';
import './index.css';

function App() {
  return (
    <div className="bg-gray-700">
      {/* Header Section */}
      <header className="bg-blue-100 shadow-2xl">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-800">Your Logo</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-blue-950 hover:text-blue-800">Home</a>
              <a href="#" className="text-blue-950 hover:text-blue-800">About</a>
              <a href="#" className="text-blue-950 hover:text-blue-800">Services</a>
              <a href="#" className="text-blue-950 hover:text-blue-800">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Background Beams */}
        <div className="relative h-0">
            <BackgroundBeamsWithCollision/>
        </div>

      
      {/* Hero Section with 3D Pin */}
      <section className="relative bg-gradient-to-r from-blue-500 to-gray-800 text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">Discover amazing features and services</p>
          
          <div className="flex justify-center items-center mt-16">
            <PinContainer 
              title="Aceternity UI" 
              href="https://ui.aceternity.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  Aceternity UI
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-300">
                    Beautiful components built with Tailwind CSS.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service Cards with Hover Effects */}
            <div className="group p-8 bg-blue-200 rounded-2xl drop-shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-lg mb-6 transform transition-transform group-hover:rotate-12"></div>
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">Custom web solutions built with cutting-edge technologies for optimal performance.</p>
            </div>
            <div className="group p-8 bg-blue-200 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-red-700 rounded-lg mb-6 transform transition-transform group-hover:rotate-12"></div>
              <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-600">Beautiful, intuitive interfaces that enhance user experience and engagement.</p>
            </div>
            <div className="group p-8 bg-blue-200 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gray-800 rounded-lg mb-6 transform transition-transform group-hover:rotate-12"></div>
              <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-gray-600">Strategic marketing solutions to boost your online presence and reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                    <p className="text-sm">View Case Study</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="group text-center">
                <div className="relative mb-6 inline-block">
                  <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white text-xl">+</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Member {member}</h3>
                <p className="text-gray-600">Position</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
            <p className="text-xl mb-12">Let's create something amazing together</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Your Logo</h3>
              <p className="text-gray-400">Creating digital experiences that inspire.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Digital Marketing</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
