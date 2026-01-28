"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Heart, Shield, Target } from "lucide-react";

const WhyPreventionWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      value: "80%",
      label: "of chronic diseases are lifestyle-related",
      description: "Small daily habits determine long-term health outcomes",
      icon: Heart,
      color: "#EF4444",
    },
    {
      value: "7x",
      label: "ROI on preventive health investments",
      description: "Every dollar spent on prevention saves seven in healthcare costs",
      icon: TrendingUp,
      color: "#22C55E",
    },
    {
      value: "10+ years",
      label: "potential lifespan increase through prevention",
      description: "Consistent healthy habits can add years to your life",
      icon: Shield,
      color: "#3B82F6",
    },
    {
      value: "90%",
      label: "of health outcomes determined by lifestyle",
      description: "Genetics play a small role compared to daily choices",
      icon: Target,
      color: "#A855F7",
    },
  ];

  const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.span
          style={{ fontSize: "48px", fontWeight: "bold", color: "#0F766E" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {value}
        </motion.span>
      </motion.div>
    );
  };

  const timeline = [
    {
      time: "Today",
      title: "Small Habits",
      description: "Daily monitoring and micro-adjustments",
      side: "left",
    },
    {
      time: "3 Months",
      title: "Noticeable Changes",
      description: "Improved energy, better sleep, reduced stress",
      side: "right",
    },
    {
      time: "1 Year",
      title: "Health Transformation",
      description: "Stronger immune system, better biomarkers",
      side: "left",
    },
    {
      time: "5+ Years",
      title: "Disease Prevention",
      description: "Significantly reduced risk of chronic conditions",
      side: "right",
    },
  ];

  return (
    <section id="why-prevention-works" style={{padding: "80px 0", backgroundColor: "#F8FAFC"}} ref={ref}>
      <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 16px"}}>
        <motion.div
          style={{textAlign: "center", marginBottom: "64px"}}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{fontSize: "48px", lineHeight: 1.2, fontWeight: "bold", color: "#111827", marginBottom: "16px"}}>
            Why Prevention Works
          </h2>
          <p style={{fontSize: "20px", color: "#4B5563", maxWidth: "768px", margin: "0 auto", lineHeight: 1.6}}>
            The evidence is clear: small, consistent actions today lead to 
            dramatically better health outcomes tomorrow.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", marginBottom: "80px"}}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              style={{
                backgroundColor: "white",
                padding: "32px",
                borderRadius: "16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "all 0.3s"
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
                style={{color: stat.color, marginBottom: "16px"}}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <stat.icon style={{width: "32px", height: "32px"}} />
              </motion.div>
              
              <Counter value={stat.value} />
              
              <h3 style={{fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "8px"}}>
                {stat.label}
              </h3>
              
              <p style={{fontSize: "14px", color: "#4B5563", lineHeight: 1.6}}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Prevention Timeline */}
        <motion.div
          style={{
            backgroundColor: "white",
            padding: "32px",
            borderRadius: "24px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            marginBottom: "80px"
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 style={{fontSize: "32px", fontWeight: "bold", color: "#111827", textAlign: "center", marginBottom: "48px"}}>
            The Prevention Timeline
          </h3>
          
          <div style={{position: "relative"}}>
            {/* Timeline Line */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(180deg, #0F766E, #38BDF8, #22C55E, #F59E0B)",
              transform: "translateX(-50%)"
            }} />
            
            {/* Timeline Items */}
            <div style={{display: "flex", flexDirection: "column", gap: "48px"}}>
              {timeline.map((item, index) => (
                <motion.div
                  key={item.time}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: item.side === "left" ? "flex-start" : "flex-end"
                  }}
                  initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <div style={{
                    width: "45%",
                    textAlign: item.side === "left" ? "right" : "left",
                    padding: item.side === "left" ? "0 32px 0 0" : "0 0 0 32px"
                  }}>
                    <div style={{
                      backgroundColor: "rgba(15, 118, 110, 0.1)",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      display: "inline-block",
                      marginBottom: "12px"
                    }}>
                      <span style={{color: "#0F766E", fontWeight: "600"}}>{item.time}</span>
                    </div>
                    <h4 style={{fontSize: "20px", fontWeight: "bold", color: "#111827", marginBottom: "8px"}}>
                      {item.title}
                    </h4>
                    <p style={{fontSize: "14px", color: "#4B5563", lineHeight: 1.6}}>
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Timeline Dot */}
                  <motion.div
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "16px",
                      height: "16px",
                      backgroundColor: "#0F766E",
                      borderRadius: "50%",
                      border: "4px solid white",
                      boxShadow: "0 0 0 2px #0F766E"
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          style={{textAlign: "center"}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "16px",
            background: "linear-gradient(135deg, #0F766E, #38BDF8)",
            color: "white",
            padding: "16px 32px",
            borderRadius: "20px"
          }}>
            <span style={{fontSize: "18px", fontWeight: "600"}}>
              Prevention by Design starts today.
            </span>
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "600"
            }}>
              Take Control
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPreventionWorksSection;
