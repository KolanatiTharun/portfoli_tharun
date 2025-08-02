import React from 'react';
import { CheckCircle, Award, BookOpen, Users } from 'lucide-react';

export default function About() {
  const achievements = [
    { icon: Users, number: '500+', label: 'Students Trained' },
    { icon: Award, number: '15+', label: 'Industry Certifications' },
    { icon: BookOpen, number: '25+', label: 'Courses Created' },
    { icon: CheckCircle, number: '98%', label: 'Success Rate' }
  ];

  const skills = [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Data Science',
    'Python Programming',
    'TensorFlow & PyTorch',
    'Statistical Analysis',
    'Neural Networks'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI/ML specialist and passionate educator with extensive experience in artificial intelligence, 
            machine learning, and data science. Dedicated to helping students master cutting-edge 
            technologies through practical, hands-on learning approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                With a couple of years in AI/ML research and development and growing experience in education, I've helped 
                hundreds of students transition into successful data science and AI careers. My approach 
                combines cutting-edge theoretical knowledge with real-world applications, ensuring 
                students are industry-ready upon completion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I've gained valuable experience working on AI projects and now focus on sharing my knowledge through comprehensive courses 
                that bridge the gap between academic theory and industry applications in AI/ML/Data Science.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Educator in action"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                    <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}