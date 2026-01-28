"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" style={{minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", backgroundColor: "#F8FAFC"}}>
      {/* Animated Background Elements */}
      <div style={{position: "absolute", inset: 0, overflow: "hidden"}}>
        <motion.div
          style={{position: "absolute", width: "384px", height: "384px", backgroundColor: "rgba(56, 189, 248, 0.1)", borderRadius: "50%", filter: "blur(3rem)"}}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          style={{position: "absolute", width: "384px", height: "384px", backgroundColor: "rgba(34, 197, 94, 0.1)", borderRadius: "50%", filter: "blur(3rem)"}}
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div style={{position: "absolute", inset: 0}}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{position: "absolute", width: "8px", height: "8px", backgroundColor: "rgba(15, 118, 110, 0.3)", borderRadius: "50%"}}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div style={{position: "relative", zIndex: 10, textAlign: "center", padding: "0 16px", maxWidth: "896px", margin: "0 auto"}}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 style={{fontSize: "48px", lineHeight: 1.2, fontWeight: "bold", color: "#111827", marginBottom: "24px"}}>
            Everyday Prevention for
            <span style={{display: "block", color: "#0F766E"}}>Longer, Healthier Lives</span>
          </h1>
          
          <motion.p
            style={{fontSize: "20px", color: "#4B5563", marginBottom: "32px", maxWidth: "672px", margin: "0 auto 32px", lineHeight: 1.6}}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            JeevaCore combines smart devices, AI-powered insights, and personalized nudges to transform your daily habits into lifelong health.
          </motion.p>

          <motion.div
            style={{display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center", alignItems: "center"}}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button style={{backgroundColor: "#0F766E", color: "white", padding: "16px 32px", borderRadius: "9999px", fontWeight: "600", fontSize: "18px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", transition: "all 0.3s"}}>
              Explore JeevaCore
              <ArrowRight style={{width: "20px", height: "20px"}} />
            </button>
            
            <button style={{backgroundColor: "white", color: "#0F766E", border: "2px solid #0F766E", padding: "16px 32px", borderRadius: "9999px", fontWeight: "600", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", transition: "all 0.3s"}}>
              <Play style={{width: "20px", height: "20px"}} />
              Watch 1-Minute Video
            </button>
          </motion.div>
        </motion.div>

        {/* 3D Hub Placeholder */}
        <motion.div
          style={{marginTop: "64px", position: "relative"}}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <div style={{width: "256px", height: "256px", margin: "0 auto", position: "relative"}}>
            <motion.div
              style={{width: "100%", height: "100%", background: "linear-gradient(to bottom right, #0F766E, #38BDF8)", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div style={{width: "100%", height: "100%", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div style={{color: "white", textAlign: "center"}}>
                  <div style={{fontSize: "36px", fontWeight: "bold", marginBottom: "8px"}}>JeevaCore</div>
                  <div style={{fontSize: "14px", opacity: 0.8}}>Hub</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
