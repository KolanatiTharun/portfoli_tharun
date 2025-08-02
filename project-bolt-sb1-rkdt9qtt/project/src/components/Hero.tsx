import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Master New Skills with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    {' '}Expert Guidance
                  </span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Transform your career with cutting-edge AI, Machine Learning, and Data Science courses. 
                  Master the technologies shaping the future with hands-on projects and expert mentorship.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span>Start Learning Today</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-white/30 hover:border-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  View Courses
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">500+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm">4.9 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">Certified</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional educator"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold">Madhira Venkata Ramesh Reddy</h3>
                  <p className="text-blue-200">AI/ML Specialist & Educator</p>
                  <p className="text-sm text-blue-100 mt-2">Couple of Years AI/ML Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}