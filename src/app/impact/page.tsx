import { motion } from "framer-motion";
import { Heart, Globe, Users, Target, Award, TrendingUp } from "lucide-react";

const ImpactPage = () => {
  const impacts = [
    {
      icon: Heart,
      title: "Health Outcomes",
      description: "Measurable improvements in physical and mental wellbeing",
      metrics: [
        { label: "Improved Sleep Quality", value: "67%" },
        { label: "Stress Reduction", value: "45%" },
        { label: "Activity Increase", value: "38%" },
        { label: "Better Hydration", value: "52%" }
      ],
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Users,
      title: "Social Impact",
      description: "Creating healthier communities through preventive care",
      metrics: [
        { label: "Healthcare Cost Reduction", value: "30%" },
        { label: "Productivity Increase", value: "25%" },
        { label: "Family Health Improvement", value: "40%" },
        { label: "Community Engagement", value: "60%" }
      ],
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Globe,
      title: "Environmental Impact",
      description: "Sustainable health solutions for a better planet",
      metrics: [
        { label: "Reduced Medical Waste", value: "35%" },
        { label: "Lower Carbon Footprint", value: "28%" },
        { label: "Energy Efficiency", value: "45%" },
        { label: "Sustainable Materials", value: "80%" }
      ],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Target,
      title: "SDG Alignment",
      description: "Supporting United Nations Sustainable Development Goals",
      metrics: [
        { label: "Good Health & Well-being", value: "SDG 3" },
        { label: "Sustainable Cities", value: "SDG 11" },
        { label: "Responsible Consumption", value: "SDG 12" },
        { label: "Partnerships for Goals", value: "SDG 17" }
      ],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    }
  ];

  const testimonials = [
    {
      quote: "JeevaCore transformed how I approach my health. Small changes made a huge difference.",
      author: "Sarah Chen",
      role: "Software Engineer",
      location: "San Francisco, CA"
    },
    {
      quote: "The preventive approach saved me from serious health issues. Early detection is everything.",
      author: "Michael Rodriguez",
      role: "Teacher",
      location: "Austin, TX"
    },
    {
      quote: "Our family's health has improved dramatically. The kids love the gamified approach.",
      author: "Emily Johnson",
      role: "Mother of 3",
      location: "Seattle, WA"
    }
  ];

  return (
    <div className="min-h-screen bg-light-bg">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Our Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              JeevaCore is creating measurable improvements in health outcomes, 
              social wellbeing, and environmental sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.title}
                className={`${impact.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${impact.color} rounded-xl flex items-center justify-center`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <impact.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {impact.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {impact.description}
                </p>
                
                <div className="space-y-3">
                  {impact.metrics.map((metric, metricIndex) => (
                    <div key={metric.label} className="flex justify-between items-center">
                      <span className="text-gray-700">{metric.label}</span>
                      <motion.span
                        className="font-bold text-deep-teal"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1 + metricIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                        {metric.value}
                      </motion.span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Global Reach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              JeevaCore is making a difference across continents and communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Active Users", color: "text-deep-teal" },
              { number: "15", label: "Countries", color: "text-soft-sky-blue" },
              { number: "200+", label: "Partner Organizations", color: "text-warm-green" },
              { number: "1M+", label: "Health Data Points Daily", color: "text-sunrise-amber" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Stories, Real Impact
            </h2>
            <p className="text-lg text-gray-600">
              Hear from people whose lives have been transformed by JeevaCore
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <Award className="w-8 h-8 text-deep-teal mb-4" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-deep-teal">
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center bg-gradient-to-r from-deep-teal to-soft-sky-blue p-12 rounded-3xl text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Join the Health Revolution
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of a global movement toward preventive health and wellbeing. 
              Together, we can create a healthier future for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-deep-teal px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-deep-teal transition-all duration-300">
                Learn About Impact
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
