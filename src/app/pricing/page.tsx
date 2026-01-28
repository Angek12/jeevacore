import { motion } from "framer-motion";
import { Home, Watch, Smartphone, Users, CheckCircle, ArrowRight } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Band Only",
      description: "Personal health monitoring on your wrist",
      price: "$199",
      period: "one-time",
      features: [
        "JeevaCore Band device",
        "Mobile app access",
        "Basic health tracking",
        "30-day money-back guarantee",
        "1-year warranty"
      ],
      icon: Watch,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      popular: false
    },
    {
      name: "Hub Only",
      description: "Complete home environment monitoring",
      price: "$399",
      period: "one-time",
      features: [
        "JeevaCore Hub device",
        "Environmental monitoring",
        "Smart home integration",
        "Family sharing (up to 6)",
        "2-year warranty",
        "Priority support"
      ],
      icon: Home,
      color: "from-deep-teal to-soft-sky-blue",
      bgColor: "bg-teal-50",
      popular: true
    },
    {
      name: "Complete Bundle",
      description: "Full JeevaCore ecosystem experience",
      price: "$499",
      period: "one-time",
      originalPrice: "$598",
      features: [
        "JeevaCore Hub + Band",
        "Premium app features",
        "Advanced analytics",
        "Unlimited family members",
        "3-year warranty",
        "Priority support",
        "Free software updates"
      ],
      icon: Smartphone,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      popular: false
    }
  ];

  const communityPrograms = [
    {
      name: "Community Health Program",
      description: "Affordable solutions for community organizations",
      price: "Custom",
      features: [
        "Bulk pricing (50+ units)",
        "Training and support",
        "Community dashboard",
        "Health outcome tracking",
        "Grant assistance"
      ],
      icon: Users,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "NGO Partnership",
      description: "Special programs for non-profit organizations",
      price: "Subsidized",
      features: [
        "Special discount pricing",
        "Implementation support",
        "Impact measurement tools",
        "Grant writing assistance",
        "Co-marketing opportunities"
      ],
      icon: CheckCircle,
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50"
    }
  ];

  const paymentOptions = [
    {
      title: "Installment Plans",
      description: "Spread the cost over 6, 12, or 24 months",
      details: "0% APR financing available through our partners"
    },
    {
      title: "Health Savings Account",
      description: "Use HSA/FSA funds for preventive health",
      details: "JeevaCore is HSA/FSA eligible in most plans"
    },
    {
      title: "Insurance Coverage",
      description: "Check with your insurance provider",
      details: "Many plans cover preventive health devices"
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
              Pricing & Accessibility
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Flexible pricing options to make preventive health accessible to everyone. 
              Choose the plan that works best for you and your family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-deep-teal text-white px-4 py-1 rounded-full text-sm font-semibold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Most Popular
                  </motion.div>
                )}
                
                <div className={`${plan.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full ${plan.popular ? 'ring-2 ring-deep-teal' : ''}`}>
                  <div className="text-center mb-8">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      {plan.originalPrice && (
                        <div className="text-gray-500 line-through text-lg">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="text-4xl font-bold text-deep-teal">
                        {plan.price}
                      </div>
                      <div className="text-gray-600">
                        {plan.period}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-deep-teal flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-deep-teal text-white hover:bg-deep-teal/90' 
                        : 'bg-white text-deep-teal border-2 border-deep-teal hover:bg-deep-teal hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Choose Plan
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
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
              Flexible Payment Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make it easy to invest in your health with multiple payment options
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="text-center p-8 rounded-2xl bg-light-bg hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {option.description}
                </p>
                <p className="text-sm text-deep-teal">
                  {option.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Programs */}
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
              Community & Institutional Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Special pricing and support for organizations making a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                className={`${program.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
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
                    className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <program.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {program.name}
                    </h3>
                    <div className="text-lg font-semibold text-deep-teal">
                      {program.price}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-deep-teal flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  className="w-full bg-white text-deep-teal border-2 border-deep-teal py-3 rounded-full font-semibold hover:bg-deep-teal hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center bg-gradient-to-r from-deep-teal to-soft-sky-blue p-12 rounded-3xl text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Try JeevaCore risk-free. If you're not completely satisfied with your purchase, 
              return it within 30 days for a full refund.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-deep-teal px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-deep-teal transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
