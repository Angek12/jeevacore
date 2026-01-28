import { motion } from "framer-motion";
import { Home, Watch, Smartphone, Wifi, Battery, Shield, CheckCircle } from "lucide-react";

const DevicesPage = () => {
  const devices = [
    {
      name: "JeevaCore Hub",
      description: "Central monitoring station for your home environment",
      icon: Home,
      features: [
        "Air quality monitoring (PM2.5, CO2, VOCs)",
        "Temperature and humidity sensing",
        "Sleep environment tracking",
        "Smart home integration",
        "Voice assistant compatibility",
        "Privacy-first data processing"
      ],
      specs: {
        connectivity: "Wi-Fi, Bluetooth, Zigbee",
        battery: "AC power with 24h backup",
        range: "Covers 2,000 sq ft",
        sensors: "12 environmental sensors"
      },
      color: "from-deep-teal to-soft-sky-blue",
      bgColor: "bg-teal-50",
    },
    {
      name: "JeevaCore Band",
      description: "Personal health monitoring on your wrist",
      icon: Watch,
      features: [
        "Continuous heart rate monitoring",
        "Blood oxygen saturation tracking",
        "Sleep stage analysis",
        "Activity and step counting",
        "Posture detection",
        "Stress level monitoring"
      ],
      specs: {
        battery: "7-day battery life",
        water: "5ATM water resistance",
        display: "AMOLED touch display",
        sensors: "6-axis accelerometer + PPG"
      },
      color: "from-soft-sky-blue to-warm-green",
      bgColor: "bg-blue-50",
    },
    {
      name: "JeevaCore App",
      description: "Your personalized health dashboard",
      icon: Smartphone,
      features: [
        "AI-powered health insights",
        "Personalized nudges and reminders",
        "Health trend visualization",
        "Family sharing capabilities",
        "Integration with health apps",
        "Telehealth consultation prep"
      ],
      specs: {
        platforms: "iOS, Android, Web",
        sync: "Real-time cloud sync",
        security: "End-to-end encryption",
        updates: "Over-the-air updates"
      },
      color: "from-warm-green to-sunrise-amber",
      bgColor: "bg-green-50",
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
              JeevaCore Devices
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge hardware designed to seamlessly integrate into your life 
              while providing comprehensive health monitoring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Device Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {devices.map((device, index) => (
              <motion.div
                key={device.name}
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
                {/* Device Visual */}
                <div className="flex-shrink-0 w-full lg:w-1/2">
                  <motion.div
                    className={`${device.bgColor} p-12 rounded-3xl relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Device Icon */}
                    <motion.div
                      className={`w-32 h-32 bg-gradient-to-br ${device.color} rounded-3xl flex items-center justify-center shadow-2xl mx-auto mb-8`}
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 2,
                      }}
                    >
                      <device.icon className="w-16 h-16 text-white" />
                    </motion.div>

                    {/* Device Name */}
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
                      {device.name}
                    </h3>
                    <p className="text-lg text-gray-600 text-center leading-relaxed">
                      {device.description}
                    </p>

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-8 right-8 w-4 h-4 bg-deep-teal/30 rounded-full"
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-8 left-8 w-3 h-3 bg-soft-sky-blue/30 rounded-full"
                      animate={{
                        y: [0, 15, 0],
                        x: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.7,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Device Details */}
                <div className="flex-1 w-full lg:w-1/2">
                  <div className="space-y-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        Key Features
                      </h4>
                      <div className="grid gap-3">
                        {device.features.map((feature, featureIndex) => (
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
                            <CheckCircle className="w-5 h-5 text-deep-teal flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        Technical Specifications
                      </h4>
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="grid gap-4">
                          {Object.entries(device.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center">
                              <span className="text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                              </span>
                              <span className="font-semibold text-gray-900">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
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
              Seamless Integration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All JeevaCore devices work together to provide a complete picture of your health
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: "Real-time Sync",
                description: "All devices communicate seamlessly",
                color: "text-deep-teal"
              },
              {
                icon: Battery,
                title: "Long Battery Life",
                description: "Designed for continuous monitoring",
                color: "text-warm-green"
              },
              {
                icon: Shield,
                title: "Privacy First",
                description: "Your data stays secure and private",
                color: "text-soft-sky-blue"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
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
                <motion.div
                  className={`${benefit.color} mb-4 inline-flex`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <benefit.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevicesPage;
