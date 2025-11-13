import { motion } from "framer-motion";

export function Achievements() {
  const achievements = [
    {
      number: "5+",
      label: "Years Experience",
      icon: "✨"
    },
    {
      number: "25+", 
      label: "Projects Completed",
      icon: "💫"
    },
    {
      number: "15+",
      label: "Technologies", 
      icon: "⭐"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: "❄️"
    }
  ];

  return (
    <section className="py-20 icy-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div 
              className="flex items-center gap-2 text-primary"
              animate={{ 
                scale: [1, 1.1, 1] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ 
                  rotate: [0, 360, 720],
                  scale: [1, 1.3, 1] 
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                ✨
              </motion.span>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
              animate={{ 
                y: [0, -2, 0] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Achievements & Experience
            </motion.h2>
            <motion.div
              animate={{ 
                rotate: [0, -360, -720],
                scale: [1, 1.2, 1] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl text-blue-400">❄️</span>
            </motion.div>
          </div>
          <p className="text-md text-muted-foreground max-w-3xl mx-auto">
            Numbers that reflect my journey and commitment to delivering exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="achievement-card"
            >
              <div className="text-center p-8 rounded-2xl glass-effect hover:glowing transition-all duration-300 floating">
                <motion.div 
                  className="achievement-icon mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  {achievement.icon}
                </motion.div>
                <motion.h3 
                  className="achievement-number mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
                >
                  {achievement.number}
                </motion.h3>
                <p className="text-muted-foreground font-medium">
                  {achievement.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}