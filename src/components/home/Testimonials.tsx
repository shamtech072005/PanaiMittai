import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  role, 
  rating,
  delay 
}) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Quote className="absolute top-6 right-6 h-10 w-10 text-primary-200 opacity-50" />
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-accent-500 fill-accent-500' : 'text-primary-200'
            }`}
          />
        ))}
      </div>
      <p className="text-primary-700 mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-medium text-primary-900">{author}</p>
        <p className="text-sm text-primary-500">{role}</p>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I've been using this palm sugar for my morning tea for months now. It tastes amazing and I feel more energized throughout the day!",
      author: "Priya Sharma",
      role: "Yoga Instructor",
      rating: 5,
    },
    {
      quote: "After switching to this palm sugar, my digestion has improved significantly. I love how it's processed traditionally without any chemicals.",
      author: "Raj Patel",
      role: "Health Coach",
      rating: 5,
    },
    {
      quote: "The perfect alternative to refined sugar. My family loves the rich, caramel-like taste and the health benefits are a huge bonus.",
      author: "Anita Desai",
      role: "Nutritionist",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-texture bg-cover bg-fixed">
      <div className="bg-primary-900/80 py-20">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.h2 
              className="text-primary-50 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our <span className="text-accent-400">Customers Say</span>
            </motion.h2>
            <motion.p 
              className="text-primary-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Don't just take our word for it. Here's what people who have incorporated our
              palm sugar into their daily routine have to say.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;