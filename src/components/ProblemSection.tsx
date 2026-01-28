"use client";

import { motion } from "framer-motion";
import { Heart, Brain, Wind, Droplets, Activity, Monitor } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Heart,
      title: "Stress",
      description: "Chronic stress affects 80% of adults and leads to serious health issues",
      color: "#EF4444",
      bgColor: "#FEF2F2",
    },
    {
      icon: Brain,
      title: "Sleep",
      description: "Poor sleep quality impacts cognitive function and physical health",
      color: "#A855F7",
      bgColor: "#FAF5FF",
    },
    {
      icon: Wind,
      title: "Air Quality",
      description: "Indoor air pollution affects respiratory health and wellbeing",
      color: "#3B82F6",
      bgColor: "#EFF6FF",
    },
    {
      icon: Droplets,
      title: "Hydration",
      description: "Dehydration affects energy levels and organ function",
      color: "#06B6D4",
      bgColor: "#ECFEFF",
    },
  ];

  return (
    <section id="problem" style={{padding: "80px 0", backgroundColor: "white"}}>
      <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 16px"}}>
        <motion.div
          style={{textAlign: "center", marginBottom: "64px"}}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{fontSize: "36px", lineHeight: 1.2, fontWeight: "bold", color: "#111827", marginBottom: "16px"}}>
            The Problem We're Solving
          </h2>
          <p style={{fontSize: "20px", color: "#4B5563", maxWidth: "768px", margin: "0 auto", lineHeight: 1.6}}>
            Modern life exposes us to countless health risks that accumulate over time. 
            Small, daily impacts create long-term consequences.
          </p>
        </motion.div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "48px", alignItems: "center"}}>
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{fontSize: "30px", fontWeight: "bold", color: "#111827", marginBottom: "24px"}}>
              The Silent Health Crisis
            </h3>
            <div style={{color: "#4B5563", fontSize: "18px", lineHeight: 1.6}}>
              <p style={{marginBottom: "16px"}}>
                Every day, we face invisible threats to our health: poor air quality, 
                chronic stress, inadequate sleep, and dehydration. These factors 
                compound over time, leading to:
              </p>
              <ul style={{listStyle: "none", padding: 0, margin: "16px 0"}}>
                <li style={{display: "flex", alignItems: "flex-start", marginBottom: "12px"}}>
                  <span style={{color: "#0F766E", marginRight: "8px"}}>•</span>
                  <span>Decreased productivity and cognitive performance</span>
                </li>
                <li style={{display: "flex", alignItems: "flex-start", marginBottom: "12px"}}>
                  <span style={{color: "#0F766E", marginRight: "8px"}}>•</span>
                  <span>Increased risk of chronic diseases</span>
                </li>
                <li style={{display: "flex", alignItems: "flex-start", marginBottom: "12px"}}>
                  <span style={{color: "#0F766E", marginRight: "8px"}}>•</span>
                  <span>Reduced quality of life and longevity</span>
                </li>
                <li style={{display: "flex", alignItems: "flex-start", marginBottom: "12px"}}>
                  <span style={{color: "#0F766E", marginRight: "8px"}}>•</span>
                  <span>Higher healthcare costs and burden</span>
                </li>
              </ul>
              <p style={{paddingTop: "16px"}}>
                The solution isn't more doctor visits—it's <strong style={{color: "#0F766E"}}>prevention</strong> 
                through awareness and small, consistent actions.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Animated Icons */}
          <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px"}}>
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                style={{
                  backgroundColor: problem.bgColor,
                  padding: "24px",
                  borderRadius: "16px",
                  border: "1px solid #F3F4F6",
                  transition: "all 0.3s"
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  style={{color: problem.color, marginBottom: "16px"}}
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <problem.icon style={{width: "32px", height: "32px"}} />
                </motion.div>
                <h4 style={{fontWeight: "600", color: "#111827", marginBottom: "8px"}}>
                  {problem.title}
                </h4>
                <p style={{fontSize: "14px", color: "#4B5563", lineHeight: 1.6}}>
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          style={{marginTop: "64px", textAlign: "center"}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(15, 118, 110, 0.1)",
            padding: "12px 24px",
            borderRadius: "9999px"
          }}>
            <span style={{fontSize: "24px", fontWeight: "bold", color: "#0F766E"}}>80%</span>
            <span style={{color: "#374151"}}>of chronic diseases are lifestyle-related</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
