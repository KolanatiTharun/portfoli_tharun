import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'Artificial Intelligence Mastery',
      description: 'Comprehensive AI course covering neural networks, deep learning, computer vision, and NLP. Build intelligent systems from scratch.',
      duration: '16 weeks',
      students: 180,
      rating: 4.9,
      price: 500,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Neural Networks & Deep Learning', 'Computer Vision', 'Natural Language Processing', 'TensorFlow & PyTorch', 'AI Ethics & Deployment']
    },
    {
      id: 2,
      title: 'Machine Learning Engineering',
      description: 'Master machine learning algorithms, model deployment, and MLOps. Learn to build production-ready ML systems.',
      duration: '14 weeks',
      students: 165,
      rating: 4.8,
      price: 500,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Supervised & Unsupervised Learning', 'Feature Engineering', 'Model Optimization', 'MLOps & Deployment', 'A/B Testing for ML']
    },
    {
      id: 3,
      title: 'Data Science & Analytics',
      description: 'Complete data science pipeline from data collection to insights. Master statistical analysis, visualization, and predictive modeling.',
      duration: '12 weeks',
      students: 140,
      rating: 4.9,
      price: 500,
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Python & R Programming', 'Statistical Analysis', 'Data Visualization', 'Predictive Modeling', 'Big Data Technologies']
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive, industry-focused courses designed to take you from beginner to professional. 
            Each course includes hands-on projects, mentorship, and career support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${course.price}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">What you'll learn:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Enroll Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All courses include lifetime access, completion certificates, and ongoing support.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}