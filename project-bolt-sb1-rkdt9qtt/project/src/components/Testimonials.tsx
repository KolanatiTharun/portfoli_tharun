import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name:'Lalitha janneti',
      role: 'ML Software Engineer(presently studing Btech)',
      content: 'The 3-month Machine Learning course was a game-changer for me. It provided a perfect balance of theory and hands-on projects.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Navyabhargavi',
      role: 'ML Engineer(Presently studying Btech',
      content: 'Best investment I ever made. The machine learning course gave me the skills and confidence to transition from software development to ML engineering. Highly recommend!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Thanusree Nagaladinne',
      role: 'Data science Student',
      content: 'Outstanding course content and mentorship. The instructor goes above and beyond to ensure every student succeeds. The data science course was comprehensive and practical.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-xl text-gray-600">
            Hear from graduates,graduating students who transformed their careers through our AI/ML/Data Science courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}