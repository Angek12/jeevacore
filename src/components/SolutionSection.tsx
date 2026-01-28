"use client";

import { motion } from "framer-motion";
import { Smartphone, Watch, Home, Wifi, ArrowRight } from "lucide-react";

const SolutionSection = () => {
  const devices = [
    {
      icon: Home,
      name: "JeevaCore Hub",
      description: "Central monitoring station for your home environment",
      features: ["Air quality sensing", "Sleep tracking", "Smart home integration"],
      color: "linear-gradient(135deg, #0F766E, #38BDF8)",
    },
    {
      icon: Watch,
      name: "JeevaCore Band",
      description: "Personal health monitoring on your wrist",
      features: ["Heart rate monitoring", "Activity tracking", "Sleep analysis"],
      color: "linear-gradient(135deg, #38BDF8, #22C55E)",
    },
    {
      icon: Smartphone,
      name: "JeevaCore App",
      description: "Your personalized health dashboard",
      features: ["AI insights", "Personalized nudges", "Health trends"],
      color: "linear-gradient(135deg, #22C55E, #F59E0B)",
    },
  ];

  return (
    <section id="solution" style={{padding: "80px 0", backgroundColor: "#F8FAFC"}}>
      <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 16px"}}>
        <motion.div
          style={{textAlign: "center", marginBottom: "64px"}}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{fontSize: "36px", lineHeight: 1.2, fontWeight: "bold", color: "#111827", marginBottom: "16px"}}>
            Introducing JeevaCore
          </h2>
          <p style={{fontSize: "20px", color: "#4B5563", maxWidth: "768px", margin: "0 auto", lineHeight: 1.6}}>
            A complete ecosystem that works together to protect your health through 
            intelligent monitoring and personalized guidance.
          </p>
        </motion.div>

        {/* Device Integration Animation */}
        <motion.div
          style={{marginBottom: "80px", position: "relative", height: "300px"}}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div style={{position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            {/* Hub */}
            <motion.div
              style={{
                position: "absolute",
                left: "10%",
                width: "120px",
                height: "120px",
                background: devices[0].color,
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Home style={{width: "48px", height: "48px", color: "white"}} />
            </motion.div>

            {/* Band */}
            <motion.div
              style={{
                position: "absolute",
                left: "45%",
                width: "100px",
                height: "100px",
                background: devices[1].color,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Watch style={{width: "40px", height: "40px", color: "white"}} />
            </motion.div>

            {/* App */}
            <motion.div
              style={{
                position: "absolute",
                right: "10%",
                width: "80px",
                height: "160px",
                background: devices[2].color,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Smartphone style={{width: "32px", height: "32px", color: "white"}} />
            </motion.div>

            {/* Connection Lines */}
            <motion.div
              style={{
                position: "absolute",
                left: "22%",
                top: "50%",
                width: "23%",
                height: "2px",
                background: "linear-gradient(90deg, #0F766E, #38BDF8)",
                transform: "translateY(-50%)"
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "23%",
                height: "2px",
                background: "linear-gradient(90deg, #38BDF8, #22C55E)",
                transform: "translateY(-50%)"
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>

        {/* Device Cards */}
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px"}}>
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              style={{
                backgroundColor: "white",
                padding: "32px",
                borderRadius: "20px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s",
                textAlign: "center"
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                transform: "translateY(-8px)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                style={{
                  width: "80px",
                  height: "80px",
                  background: device.color,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px"
                }}
                whileHover={{ 
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <device.icon style={{width: "32px", height: "32px", color: "white"}} />
              </motion.div>
              
              <h3 style={{fontSize: "24px", fontWeight: "bold", color: "#111827", marginBottom: "12px"}}>
                {device.name}
              </h3>
              
              <p style={{fontSize: "16px", color: "#4B5563", marginBottom: "20px", lineHeight: 1.6}}>
                {device.description}
              </p>
              
              <ul style={{listStyle: "none", padding: 0, margin: "20px 0"}}>
                {device.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{display: "flex", alignItems: "center", marginBottom: "8px", fontSize: "14px", color: "#374151"}}>
                    <Wifi style={{width: "16px", height: "16px", color: "#0F766E", marginRight: "8px"}} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                style={{
                  width: "100%",
                  backgroundColor: "#0F766E",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.3s"
                }}
                whileHover={{ 
                  backgroundColor: "#0D5F56",
                  transform: "scale(1.02)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
                <ArrowRight style={{width: "16px", height: "16px"}} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          style={{marginTop: "80px", textAlign: "center"}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "linear-gradient(135deg, #0F766E, #38BDF8)",
            color: "white",
            padding: "16px 32px",
            borderRadius: "16px",
            fontSize: "18px",
            fontWeight: "600"
          }}>
            Complete Health Ecosystem
            <span style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "14px"
            }}>
              3 Devices
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
