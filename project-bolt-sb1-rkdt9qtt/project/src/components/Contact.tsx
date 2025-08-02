import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mvramesh9587@gmail.com',
      link: 'mvramesh9587.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6301979587',
      link: 'tel:+916301979587'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India, Telangana',
      link: '#'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 6301979587',
      link: 'https://wa.me//6301979587'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to start your learning journey? Contact me for course enrollment, 
            career guidance, or any questions about the programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                I'm here to help you achieve your career goals. Whether you're just starting out 
                or looking to advance your skills, I provide personalized guidance and support 
                throughout your learning journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <Icon className="h-6 w-6 text-yellow-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold mb-1">{info.label}</h4>
                    <p className="text-blue-100 text-sm">{info.value}</p>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Course Interest</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                  <option value="" className="text-gray-900">Select a course</option>
                  <option value="ai" className="text-gray-900">Artificial Intelligence</option>
                  <option value="ml" className="text-gray-900">Machine Learning</option>
                  <option value="datascience" className="text-gray-900">Data Science</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  placeholder="Tell me about your goals and how I can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}