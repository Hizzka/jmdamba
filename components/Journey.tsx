import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export function Journey() {
  const journeyItems = [
    {
      title: "Freelance Full Stack Developer",
      company: "Various Clients",
      period: "Sep 2025 – Present",
      location: "Remote",
      type: "work",
      icon: "🧩",
      description: "Delivering tailored web solutions for diverse clients with a focus on responsive design, performance, and high-quality user experiences driven by iterative client feedback.",
      achievements: [
        "Designed and developed custom websites for small businesses and startups",
        "Improved user engagement through optimized UI/UX practices",
        "Provided ongoing maintenance, analytics tracking & client support"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "R2M IT Solutions Inc.",
      period: "Mar 2022 – Present",
      location: "Philippines",
      type: "work",
      icon: "💼",
      description: "Building scalable and user-friendly web applications, collaborating with cross‑functional teams to enhance functionality, maintain code quality, and improve performance across deployments.",
      achievements: [
        "Built and maintained enterprise-grade web platforms",
        "Collaborated closely with UI/UX designers and backend engineers",
        "Optimized system performance & feature delivery efficiency"
      ]
    },
    {
      title: "IT Officer",
      company: "Cruzado Medical Hospital",
      period: "Dec 2018 – Dec 2020",
      location: "Philippines",
      type: "work",
      icon: "🏥",
      description: "Managed eClaims processing and system administration ensuring efficient operation of hospital information systems and data integrity/security.",
      achievements: [
        "Oversaw IT infrastructure & system troubleshooting",
        "Supported staff with technical issues and system upgrades",
        "Ensured data security & compliance with hospital policies"
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "USM Administration",
      period: "Apr 2017 – Jun 2017",
      location: "Philippines",
      type: "work",
      icon: "👨‍💻",
      description: "Collaborated with a development team to create a school management system contributing to both front‑end and back‑end functionality and usability improvements.",
      achievements: [
        "Designed and implemented UI components for administrative use",
        "Assisted in database integration, testing & bug fixes",
        "Enhanced overall system usability and user satisfaction"
      ]
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-blue-50/30 to-primary/10 relative overflow-hidden">
      {/* Floating Ice Cubes Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`ice-cube-${i}`}
            className="absolute"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 6 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          >
            <div 
              className="w-6 h-6 bg-gradient-to-br from-blue-100/80 to-blue-300/60 
                         border border-blue-200/40 rounded-lg backdrop-blur-sm
                         shadow-lg shadow-blue-500/20 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(219, 234, 254, 0.9) 0%, 
                  rgba(147, 197, 253, 0.7) 50%,
                  rgba(96, 165, 250, 0.5) 100%)`,
                boxShadow: `
                  inset 1px 1px 2px rgba(255, 255, 255, 0.3),
                  inset -1px -1px 2px rgba(59, 130, 246, 0.2),
                  0 2px 4px rgba(59, 130, 246, 0.3)
                `
              }}
            >
              {/* Ice Crystal Patterns */}
              <div className="absolute inset-0 opacity-60">
                <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white/90 rounded-full"></div>
                <div className="absolute top-1 right-0.5 w-0.5 h-0.5 bg-blue-100/80 rounded-full"></div>
                <div className="absolute bottom-0.5 left-1 w-0.5 h-0.5 bg-white/70 rounded-full"></div>
                <div className="absolute top-0.5 right-1 w-1 h-0.5 bg-white/40 rounded-full transform rotate-45"></div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Freezing Snowflakes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`snowflake-${i}`}
            className="absolute text-blue-300/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 8}px`
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            ❄️
          </motion.div>
        ))}

        {/* Floating Ice Crystals */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`crystal-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-200/70 to-white/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 1, 0],
              scale: [0.3, 1.2, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Icy Mist Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-100/10 to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
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
                  scale: [1, 1.2, 1] 
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                💫
              </motion.span>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
              animate={{ 
                y: [0, -2, 0] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              My Journey
            </motion.h2>
            <motion.div
              animate={{ 
                rotate: [0, -360, -720],
                scale: [1, 1.2, 1] 
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl text-blue-400">💫</span>
            </motion.div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The path that led me to where I am today 🚀
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Central Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-primary to-blue-400 opacity-60 z-0" style={{ height: '100%' }}></div>

          <div className="space-y-8 relative z-10">
            {journeyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot with Ice Effect */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-20 shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(96, 165, 250, 0.5)",
                      "0 0 20px rgba(96, 165, 250, 0.8)",
                      "0 0 10px rgba(96, 165, 250, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {/* Floating Ice Crystals around Timeline Dot */}
                  <motion.div
                    className="absolute -top-1 -left-1 w-1 h-1 bg-blue-200 rounded-full"
                    animate={{
                      y: [0, -5, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-1 h-1 bg-blue-100 rounded-full"
                    animate={{
                      y: [0, 5, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1 + 0.5
                    }}
                  />
                </motion.div>

                {/* Content Card */}
                <div className={`w-[45%] ${index % 2 === 0 ? 'pr-6' : 'pl-6'} relative`}>
                  {/* Floating Ice Cubes around Cards */}
                  <motion.div
                    className="absolute -top-2 -right-2 pointer-events-none"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-100 to-blue-300 rounded border border-blue-200/50 shadow-sm opacity-70">
                      <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white/80 rounded-full"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-2 -left-2 pointer-events-none"
                    animate={{
                      rotate: [0, -360],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 5 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4
                    }}
                  >
                    <span className="text-blue-300/60 text-sm">❄️</span>
                  </motion.div>

                  <Card className="glass-effect hover:shadow-xl transition-all duration-300 group border-primary/20 hover:border-primary/40 bg-background/50 backdrop-blur-sm relative overflow-hidden">
                    {/* Frost Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <motion.div 
                          className="w-10 h-10 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-lg flex items-center justify-center text-lg border border-primary/20 flex-shrink-0 group-hover:scale-105 transition-transform relative overflow-hidden"
                          whileHover={{
                            boxShadow: "0 0 15px rgba(96, 165, 250, 0.4)"
                          }}
                        >
                          {/* Ice Crystal Effect on Icon */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                            animate={{
                              opacity: [0, 0.6, 0],
                              scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.2
                            }}
                          />
                          <span className="relative z-10">{item.icon}</span>
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-base font-bold text-primary group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </h3>
                            {item.type === 'education' && (
                              <span className="text-sm">✨</span>
                            )}
                          </div>
                          <p className="text-primary/80 font-medium text-sm mb-2">{item.company}</p>
                          <div className="flex flex-col gap-1 text-xs text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              📅 {item.period}
                            </span>
                            <span className="flex items-center gap-1">
                              📍 {item.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                        {item.description}
                      </p>

                      <div className="space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + achievementIndex * 0.05 }}
                            className="flex items-center gap-2 text-xs"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}