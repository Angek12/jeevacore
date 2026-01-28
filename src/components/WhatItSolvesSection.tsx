"use client";

import { motion } from "framer-motion";
import { 
  Moon, 
  Brain, 
  Droplets, 
  Activity, 
  Monitor, 
  Wind,
  ArrowRight 
} from "lucide-react";

const WhatItSolvesSection = () => {
  const solutions = [
    {
      icon: Moon,
      title: "Sleep",
      description: "Optimize your sleep patterns for better recovery and cognitive function",
      metrics: ["Sleep quality analysis", "REM cycle tracking", "Environment optimization"],
      color: "linear-gradient(135deg, #A855F7, #4F46E5)",
      bgColor: "#FAF5FF",
      iconColor: "#9333EA",
    },
    {
      icon: Brain,
      title: "Stress",
      description: "Monitor and manage stress levels through biofeedback and personalized interventions",
      metrics: ["Heart rate variability", "Cortisol patterns", "Breathing exercises"],
      color: "linear-gradient(135deg, #EC4899, #E11D48)",
      bgColor: "#FDF2F8",
      iconColor: "#DB2777",
    },
    {
      icon: Droplets,
      title: "Hydration",
      description: "Maintain optimal hydration levels for peak physical and mental performance",
      metrics: ["Fluid intake tracking", "Electrolyte balance", "Activity-based recommendations"],
      color: "linear-gradient(135deg, #3B82F6, #06B6D4)",
      bgColor: "#EFF6FF",
      iconColor: "#2563EB",
    },
    {
      icon: Activity,
      title: "Activity",
      description: "Achieve the perfect balance between movement, exercise, and recovery",
      metrics: ["Daily activity goals", "Exercise intensity", "Recovery time optimization"],
      color: "linear-gradient(135deg, #22C55E, #10B981)",
      bgColor: "#F0FDF4",
      iconColor: "#16A34A",
    },
    {
      icon: Monitor,
      title: "Posture",
      description: "Improve posture and prevent musculoskeletal issues through real-time feedback",
      metrics: ["Posture analysis", "Ergonomic suggestions", "Stretching reminders"],
      color: "linear-gradient(135deg, #F97316, #EA580C)",
      bgColor: "#FFF7ED",
      iconColor: "#EA580C",
    },
    {
      icon: Wind,
      title: "Air Quality",
      description: "Ensure clean air in your environment for better respiratory health",
      metrics: ["PM2.5 monitoring", "CO2 levels", "Air purification recommendations"],
      color: "linear-gradient(135deg, #14B8A6, #0D9488)",
      bgColor: "#F0FDFA",
      iconColor: "#0D9488",
    },
  ];

  return (
    <section id="what-it-solves" style={{padding: "80px 0", backgroundColor: "white"}}>
      <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 16px"}}>
        <motion.div
          style={{textAlign: "center", marginBottom: "64px"}}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{fontSize: "48px", lineHeight: 1.2, fontWeight: "bold", color: "#111827", marginBottom: "16px"}}>
            What It Solves
          </h2>
          <p style={{fontSize: "20px", color: "#4B5563", maxWidth: "896px", margin: "0 auto", lineHeight: 1.6}}>
            JeevaCore addresses the six key pillars of preventive health with 
            intelligent monitoring and personalized guidance.
          </p>
        </motion.div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px"}}>
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              style={{position: "relative"}}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <div style={{
                backgroundColor: solution.bgColor,
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid #F3F4F6",
                transition: "all 0.3s",
                height: "100%",
                position: "relative",
                overflow: "hidden"
              }}>
                {/* Background Gradient */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: solution.color,
                  opacity: 0,
                  transition: "opacity 0.3s"
                }} />
                
                {/* Icon */}
                <motion.div
                  style={{color: solution.iconColor, marginBottom: "24px"}}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <solution.icon style={{width: "40px", height: "40px"}} />
                </motion.div>

                {/* Content */}
                <h3 style={{fontSize: "24px", fontWeight: "bold", color: "#111827", marginBottom: "16px"}}>
                  {solution.title}
                </h3>
                <p style={{fontSize: "16px", color: "#4B5563", marginBottom: "24px", lineHeight: 1.6}}>
                  {solution.description}
                </p>

                {/* Metrics */}
                <div style={{marginBottom: "24px"}}>
                  {solution.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} style={{display: "flex", alignItems: "center", fontSize: "14px", color: "#4B5563", marginBottom: "12px"}}>
                      <ArrowRight style={{width: "16px", height: "16px", marginRight: "8px", opacity: 0.6}} />
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <motion.div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "16px",
                    border: "2px solid transparent",
                    transition: "all 0.3s"
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    borderColor: "rgba(15, 118, 110, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                />
              </div>

              {/* Floating Animation */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: "-4px",
                  background: "linear-gradient(135deg, rgba(15, 118, 110, 0.2), rgba(56, 189, 248, 0.2))",
                  borderRadius: "16px",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  zIndex: -1
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          style={{marginTop: "64px", textAlign: "center"}}
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
            Complete Health Coverage
            <span style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "14px"
            }}>
              6 Pillars
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatItSolvesSection;
