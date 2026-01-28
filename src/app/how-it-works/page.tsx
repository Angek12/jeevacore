import { motion } from "framer-motion";
import { Eye, Brain, ArrowRight, CheckCircle } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      number: "01",
      title: "Sense",
      description: "JeevaCore devices continuously monitor your environment and biometrics 24/7",
      features: [
        "Real-time air quality monitoring",
        "Heart rate and sleep tracking",
        "Activity and posture sensing",
        "Environmental data collection"
      ],
      icon: Eye,
      color: "from-deep-teal to-soft-sky-blue",
    },
    {
      number: "02",
      title: "Analyze",
      description: "Our AI processes your data to identify patterns and provide actionable insights",
      features: [
        "Machine learning algorithms",
        "Pattern recognition",
        "Health trend analysis",
        "Personalized baseline establishment"
      ],
      icon: Brain,
      color: "from-soft-sky-blue to-warm-green",
    },
    {
      number: "03",
      title: "Nudge",
      description: "Receive timely, personalized suggestions that fit seamlessly into your routine",
      features: [
        "Context-aware notifications",
        "Micro-action recommendations",
        "Progressive habit building",
        "Motivational feedback"
      ],
      icon: ArrowRight,
      color: "from-warm-green to-sunrise-amber",
    },
    {
      number: "04",
      title: "Improve",
      description: "Track your progress and watch as small changes lead to significant health improvements",
      features: [
        "Progress visualization",
        "Health score tracking",
        "Long-term trend monitoring",
        "Achievement celebrations"
      ],
      icon: CheckCircle,
      color: "from-sunrise-amber to-deep-teal",
    },
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
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              JeevaCore uses a simple four-step process to transform your daily habits 
              into lifelong health benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                {/* Step Number and Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <motion.div
                      className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-xl`}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <step.icon className="w-16 h-16 text-white" />
                    </motion.div>
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold text-lg"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.2 + featureIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-deep-teal rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Visualization */}
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
              Continuous Improvement Loop
            </h2>
            <p className="text-lg text-gray-600">
              The process repeats continuously, creating a virtuous cycle of health improvement
            </p>
          </motion.div>

          <div className="relative">
            {/* Flow Diagram */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <motion.div
                    className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ 
                      scale: [0, 1.2, 1],
                      opacity: [0, 1]
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 left-full w-16 h-0.5 bg-deep-teal/30"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.2 + 0.4,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="absolute right-0 top-1/2 w-2 h-2 bg-deep-teal rounded-full -translate-y-1/2"
                        animate={{
                          x: [0, 10],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Circular Arrow for Loop */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              <svg className="w-full h-full" viewBox="0 0 800 400">
                <motion.path
                  d="M 100 200 Q 400 100 700 200"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0F766E" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
